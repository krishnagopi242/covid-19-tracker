import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDataModel, StateModel } from '../shared/models/country-data.model';
import { MatTableDataSource } from '@angular/material/table';
import { Sort, MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit, OnDestroy {

  indiaData: CountryDataModel;
  ELEMENT_DATA: StateModel[] = [];
  isLoading = false;
  private paramsSubscriptions: Subscription;
  private paramsSubscriptions1: Subscription;
  timeOutIDs:NodeJS.Timeout[] = [];
  clearTime: NodeJS.Timeout;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) { }

  displayedColumns: string[] = ['position', 'statename', 'confirmed', 'recovered', 'death'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getData();
    this.getDistrcitWiseData();
    this.callMethods();
  }

  ngOnDestroy() {
    this.paramsSubscriptions.unsubscribe();
    this.timeOutIDs.forEach(id => clearTimeout(id));
    if (this.clearTime) {
      clearInterval(this.clearTime);
    }
  }

  callMethods() {
    this.timeOutIDs.push(setTimeout(() => {
      this.clearTime = setInterval(() => {
        this.getData(true);
        this.getDistrcitWiseData(true);
      }, 60000);
    }, 60000));
  }

  getData(showLoader?: boolean) {
    this.isLoading = true;
    this.paramsSubscriptions = this.http.get<any>('https://api.coronatracker.com/v3/stats/worldometer/country').subscribe(
      (data: CountryDataModel[]) => {
        this.isLoading = false;
        this.indiaData = data.find((value) => {
          return value.countryCode === 'IN' ? value : '';
        });
        this.cd.detectChanges();
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  getDistrcitWiseData(showLoader?: boolean) {
    this.isLoading = true;
    this.paramsSubscriptions1 = this.http.get<any>('https://covid19-india-adhikansh.herokuapp.com/states').subscribe(
      (data) => {

        data.state.forEach((element, index) => {
          this.ELEMENT_DATA.push({
            position: index + 1,
            confirmed: element.confirmed,
            statename: element.name,
            death: element.death,
            recovered: element.cured
          });
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.sort = this.sort;
          this.isLoading = false;
          this.cd.detectChanges();
        });
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }
}

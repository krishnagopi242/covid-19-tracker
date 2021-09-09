import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDataModel, StateModel } from '../shared/models/country-data.model';
import { MatTableDataSource } from '@angular/material/table';
import { Sort, MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { StateWiseDataModel } from '../shared/models/state-data.model';
import { StateMappings } from '../shared/mappings/state-mappings';


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
  timeOutIDs: any[] = [];
  clearTime: any;
  totalCount = {
    confirmed: 0,
    recovered: 0,
    tested: 0,
    vaccinated1: 0,
    vaccinated2: 0
  }

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) { }

  displayedColumns: string[] = ['position', 'statename', 'confirmed', 'recovered', 'tested', 'firstdose', 'seconddose'];
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
    this.paramsSubscriptions1 = this.http.get<any>('https://data.covid19india.org/v4/min/data.min.json').subscribe(
      (data: StateWiseDataModel) => {
        this.dataSource = null;
        this.ELEMENT_DATA = [];
        Object.entries(data).forEach((value: any, index) => {
          console.log(value);
          if (StateMappings[value[0]] && value[1].total?.confirmed) {
            this.ELEMENT_DATA.push({
              position: index + 1,
              confirmed: value[1].total?.confirmed ? value[1].total?.confirmed : 'Not Available',
              statename: StateMappings[value[0]],
              tested: value[1].total?.tested ? value[1].total?.tested : 'Not Available',
              recovered: value[1].total?.recovered ? value[1].total?.recovered : 'Not Available',
              vaccinated1: value[1].total?.vaccinated1 ? value[1].total?.vaccinated1 : 'Not Available',
              vaccinated2: value[1].total?.vaccinated2 ? value[1].total?.vaccinated2 : 'Not Available'
            });
          }
          if (value[0] === 'TT') {
            this.totalCount = {
              confirmed: value[1].total?.confirmed,
              recovered: value[1].total?.recovered,
              tested: value[1].total?.tested,
              vaccinated1: value[1].total?.vaccinated1,
              vaccinated2: value[1].total?.vaccinated2,
              
            }
          }
        });
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
        this.cd.detectChanges();
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }
  getTotalCount(type: string) {
    return this.totalCount[type];
  }
}

import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDataModel, StateModel } from '../shared/models/country-data.model';
import { MatTableDataSource } from '@angular/material/table';
import { Sort, MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  indiaData: CountryDataModel;
  ELEMENT_DATA: StateModel[] = [];
  isLoading = false;
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
  }

  getData() {
    this.isLoading = true;
    this.http.get<any>('https://api.coronatracker.com/v3/stats/worldometer/country').subscribe(
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

  getDistrcitWiseData() {
    this.isLoading = true;
    this.http.get<any>('http://covid19-india-adhikansh.herokuapp.com/states').subscribe(
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

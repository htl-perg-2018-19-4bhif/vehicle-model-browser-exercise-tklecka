import { Component, OnInit } from '@angular/core';
import { IModel } from '../Interfaces/imodel';
import { GetHttpService } from '../Services/get-http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  carsAR: string[] = ["Acura",
    "Alfa Romeo",
    "Aptera",
    "Aston Martin"];

  yearAR: number[] = [1926,
    1948,
    1950,
    1953,
    1954,
    1955];

    modelsAR: IModel[] = [];

    selectedCar: any;
    selectedYear: any;

    displayedColumns: string[] = ['id', 'year', 'make', 'model'];

  constructor(private api: GetHttpService) { }

  ngOnInit() {
  }

  onError(error: any){
    console.error(error);
  }

  refreshClicked(){
    this.api.getMakeYearOffset(this.selectedCar, this.selectedYear, 10).subscribe((data: IModel[]) => {
      this.modelsAR = data;
    }, (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

}

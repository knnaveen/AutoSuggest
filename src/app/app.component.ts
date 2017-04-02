import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Buyer } from './buyer.interface';
import { AppComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
})
export class AppComponent {
  buyerDetails: any[] = [];

  buyer: string;
  title = 'app works!';

  constructor(private _service: AppComponentService) {
  }

  observableBuyerListSource(filter: string) {
    if (filter.length >= 3 && filter.length < 5) {
      this.buyerDetails.length = 0;
      this
        ._service
        .getBuyerDetails(filter)
        .subscribe(res => {
          let response: Buyer[] = res;
          let i = 0;
          for (let buyer of response) {
            this.buyerDetails[i] = buyer.buyerId + " - " + buyer.buyerName;
            i++;
          }
        
        }, error => {
          console.log(error)
        
        }, () => {
          console.log("Get buyer details finished.")
        });
    }
    return Observable.of(this.buyerDetails);
  }
}

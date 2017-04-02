# SampleAutoSuggest

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# SampleAutoSuggest Project 

## Install AutoSuggest 
Install AutoSuggest using  - npm install ng2-auto-complete --sav
[Reference - https://www.npmjs.com/package/ng2-auto-complete]

## import Ng2AutoCompleteModule to  AppModule

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2AutoCompleteModule

  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

## Create observable source to retrieve data from JSON source

  observableBuyerListSource(filter: string) {

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
    
    return Observable.of(this.buyerDetails);
  }

## Use in html to read suggested values from Observable source

    <label for="buyer"> Buyer</label>
    <input  ng2-auto-complete 
      [(ngModel)]="buyer" 
      [source]="observableBuyerListSource.bind(this)" 
      min-chars=3  
      loading-text="Loading..." 
      accept-user-input="false" 
      no-match-found-text=""
        id="buyer"><br>
import { Component } from '@angular/core';

@Component({
  selector: 'app-challange-buy-plan',
  templateUrl: './challange-buy-plan.component.html',
  styleUrls: ['./challange-buy-plan.component.scss']
})
export class ChallangeBuyPlanComponent {
  checkoutForm;
  planShown:Boolean = true;
  planName:String = "";

  firstName:String = "";
  lastName:String = "";
  emailAddress:String = "";
  transferNo:String = "";

  currentPlan: number;

  constructor() { }

  buyPlan(plan: number){
    this.planShown = false;
    this.currentPlan = plan;

    switch(plan) { 
      case 1: { 
        this.planName = "TRAIN WITH PETER - 119 PLN/msc";
        break; 
      } 
      case 2: { 
        this.planName = "Individual program - 79 PLN/msc";
         break; 
      } 
      case 3: { 
        this.planName = "Crossfit classes - zajęcia grupowe - 249 PLN/msc";
        break; 
     } 
      default: { 
        this.planName = "Błąd";
         break; 
      } 
   } 

  }

  confirmPurchase(){
    this.planShown = true;

    this.firstName = "";
    this.lastName = "";
    this.emailAddress = "";
    this.transferNo = "";

    this.currentPlan = 0;
  }
}

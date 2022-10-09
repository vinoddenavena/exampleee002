import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Productentryexample01 extends LightningElement {
     Pnamee;
     Pprice;
    productnamehandler(event){
        this.Pnamee=event.target.value;
    }
    Productpricehandler(event){
        this.Pprice=event.target.value;
    }
    saveproducthandler(event){
        //creating fields formatting
        const fields = {'Product_Name__c':this.Pnamee,'Price_of_the_Product__c':this.Pprice};
        //assigning fields
        const recordData = {apiName:'Ekart__c',fields};
        //calling the imperation 
        createRecord(recordData).then(response=>{
            alert('Account Created Successfully ID' +response.id);
        }).catch(error=>{
            alert('Account Creation Failed error'+error.body.message);
        });
    }
}
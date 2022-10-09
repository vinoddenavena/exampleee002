import { LightningElement } from 'lwc';
 
export default class practicecomponent extends LightningElement (){
    strName='';
    changeHandler(event){
        this.strName = event.target.value;
    }
}
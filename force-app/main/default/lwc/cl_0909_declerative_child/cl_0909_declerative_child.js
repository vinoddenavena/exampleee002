import { LightningElement } from 'lwc';

export default class Cl_0909_declerative_child extends LightningElement {
    addmeee(event){
      const incc = new CustomEvent('evnticc');
      this.dispatchEvent(incc); 
    }
}
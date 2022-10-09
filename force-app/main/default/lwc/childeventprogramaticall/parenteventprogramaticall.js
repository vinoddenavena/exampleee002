import { LightningElement } from 'lwc';

export default class Childeventprogramaticall extends LightningElement {
    contrl;
    Contrlval;
    constructor(){
        super();
        this.template.addEventListener('evntincc',this.handleincrease.bind(this));
        this.template.addEventListener('evntdec',this.handledecrease.bind(this));
    }
    handleincrease(event){
        this.contrl = event.detail;
        this.Contrlval = this.Contrlval+1;

    }
    handledecrease(event){
        this.contrl = event.detail;
        this.Contrlval=this.Contrlval-1;
    }

}
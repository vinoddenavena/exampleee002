import { LightningElement } from 'lwc';

export default class Lwcchildeventprogramatic extends LightningElement {
    Inceeme(event){
        const eve = new CustomEvent('evntincc',{detail:'volume',bubbles:true,composed:true});
        this.dispatchEvent(eve);
    }
    deccmee(event){
        this.dispatchEvent(new CustomEvent('evntdec',{detail:'volume',bubbles:true,composed:true}));
    }
}
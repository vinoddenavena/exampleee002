import { LightningElement , api , track} from 'lwc';


export default class ChildY extends LightningElement {
    @api apiparam = "this is api example";
    @track twoo = "this is track example";
    Hellodear = "this is non rective example";

    helloworld(){
        this.apiparam = "api value has been changed" ;
        this.twoo = "track value has been changed";
        this.Hellodear = "Reactive value has been changed ";
    }
}
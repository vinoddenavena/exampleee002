import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Lwcpubsubpublisher extends LightningElement {
    clickmeee(event){
        let message = {
            "message" : "hello all good morning " ,
            "name"    : "Vinod Kumar" , 
            "phone"   : "909090990"
        };
        pubsub.fire('eventnotify',message);
    }
}
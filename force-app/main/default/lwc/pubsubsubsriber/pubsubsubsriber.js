import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Pubsubsubsriber extends LightningElement {
    message ;
    connectedCallback()
    {
        this.register();
    }
    register()
    {
        pubsub.register('eventnotify',this.handleevent.bind(this));
    }
    handleevent(messageFromevent){
        this.message=messageFromevent?JSON.stringify(messageFromevent,null,'\t'):'no message payload';
    }
}
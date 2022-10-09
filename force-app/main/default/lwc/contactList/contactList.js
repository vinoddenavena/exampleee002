import { LightningElement , wire} from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const cll = [{label:'FirstName',fieldName:'FirstName',type: 'text'},
             {label:'LastName',fieldName:'LastName',type: 'text'},
            {label:'Email',fieldName:'Email',type:'Email'}]
export default class ContactList extends LightningElement {
    colm=cll;
    @wire(getContacts) vinod;
    vinod;

    get errors() {
        return (this.vinod.error) ?
            reduceErrors(this.vinod.error) : [];
    }
}

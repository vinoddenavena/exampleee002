import { LightningElement , api, wire} from 'lwc';
 
import getaccountlist from '@salesforce/apex/psngrcrdid_exmplwc_26_07.getaccountlist';
import Name from '@salesforce/schema/Contact.Name';
import Title from '@salesforce/schema/Contact.Title';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
const COLUMNS = [
    { label: ' Name', fieldName: Name.fieldApiName, type: 'text' },
    { label: 'Title', fieldName: Title.fieldApiName, type: 'currency' },
    { label: 'Email', fieldName: Email.fieldApiName, type: 'text' }]
export default class Psngrcdid_26_07 extends LightningElement {
    colmn = COLUMNS;
    @api recordId
    @wire(getaccountlist , { accountId: '$recordId'})
    vinod;
}
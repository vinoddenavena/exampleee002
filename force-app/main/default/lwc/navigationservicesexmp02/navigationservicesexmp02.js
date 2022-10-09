import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
 
 
export default class NavigationService extends NavigationMixin(LightningElement) {
    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }
 
    openAccountList(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            }
        });
    }
 
    createNewAccount(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }
 
    openAccountRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: "0019D00000A1gMmQAJ",
                actionName: 'view'
            }
        });
    }
 
    openLightningComponent(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__AuraCmp'
            }
        });
    }
 
    openSalesforceBlog(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'https://niksdeveloper.com/category/salesforce/'
            }
        });
    }

     
}
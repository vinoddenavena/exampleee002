import { LightningElement } from 'lwc';



import { NavigationMixin } from 'lightning/navigation';

export default class NavigateExternalURL  extends NavigationMixin (LightningElement) {



    navigateToWebPage() {

        this[NavigationMixin.Navigate]({

            type: 'standard__webPage',

            attributes: {

                url: 'https://www.google.com/'

            }

        });

    }

    }
     


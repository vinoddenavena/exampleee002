import { LightningElement, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import downloadjs from '@salesforce/resourceUrl/downloadjs';
import downloadPDF from '@salesforce/apex/Mypagepdfcls.getPdfFileAsBase64String';

export default class pdfgeneration extends LightningElement {
    boolShowSpinner = false;
        pdfString;
        generatePdf(){
            
            this.boolShowSpinner = true;
            downloadPDF({}).then(response => {
                console.log(response);
                this.boolShowSpinner = false;
                var strFile = "data:application/pdf;base64,"+response;
                window.download(strFile, "sample.pdf", "application/pdf");
    
            }).catch(error => {
                console.log('Error: ' +error.body.message);
            });
        }
        renderedCallback() {
            loadScript(this, downloadjs)
            .then(() => console.log('Loaded download.js'))
            .catch(error => console.log(error));
        }        
    }
 
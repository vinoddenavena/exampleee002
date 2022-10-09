import { LightningElement ,wire, track, api } from 'lwc';
import getlistofTasks from '@salesforce/apex/Activitiescontroller.getlistofTasks';

const COLUMNS = [
    { label: 'Subject', fieldName: 'subName', type: 'url', typeAttributes: {label: { fieldName: 'Subject' }, target: '_blank'},sortable: "true" },
    { label: 'Name', fieldName: 'WhoName', typeAttributes: {label: { fieldName: 'WhoNamee' }, target: '_blank'}, type: 'url' ,sortable: "true"},
    { label: 'Related To', fieldName: 'WhatName',type: 'url',typeAttributes: {label: { fieldName: 'WhatNamee' }, target: '_blank'}, sortable: "true" },
    { label: 'Due Date', fieldName: 'ActivityDate', type: 'date',sortable: "true",typeAttributes: {day: "numeric", month: "numeric", year: "numeric"}},
    { label: 'Status', fieldName: 'Status', type: 'text',sortable: "true" },
    { label: 'Priority', fieldName: 'Priority', type: 'text',sortable: "true"},
    { label: 'Assigned Alias', fieldName: 'OwnerName', type: 'url',typeAttributes: {label: { fieldName: 'OwnerNamee' }, target: '_blank'},sortable: "true"},
    { label: 'Last Mordified By Alias', fieldName: 'LastModifiedByName', type: 'url',typeAttributes: {label: { fieldName: 'LastModifiedByNamee' }, target: '_blank'},sortable: "true"}
];
export default class Dhruvsoft1_Activity_Tab extends LightningElement 
{
    @track data;
    @track columns = COLUMNS;
    @track sortBy='Subject';
    @track sortDirection='asc';
    @track isShowModal = false;
    @api isLoading = false;
    @track handleEnterMulActivities1 = false;
    @wire(getlistofTasks,{field : '$sortBy',sortOrder : '$sortDirection'})
    tasks({ error, data }) 
    {
        if (data) {
            this.isLoading = false;
          console.log('data==='+data);
            let TaskList = []; 
            data.forEach((record) => {
                let TaskRec = Object.assign({}, record);  
                TaskRec.subName = '/' + TaskRec.Id;
                TaskList.push(TaskRec);
            });
            this.data = TaskList;
            var rows = this.data;
               
                for ( var i = 0; i < rows.length; i++ ) {
                   
                    var row = rows[i];
                   
                    if ( row.Who ) {
                        row.WhoName = 'https://'+location.host+'/' + row.WhoId;
                        row.WhoNamee =  row.Who.Name;
                    }
                    if ( row.Owner ) {
                        row.OwnerName = 'https://'+location.host+'/' + row.OwnerId;
                        row.OwnerNamee =  row.Owner.Name;
                    }
                    if ( row.What ) {
                        row.WhatName = 'https://'+location.host+'/' + row.WhatId;
                        row.WhatNamee =  row.What.Name;
                    }
                    if ( row.LastModifiedBy ) {
                        row.LastModifiedByName = 'https://'+location.host+'/' + row.LastModifiedById;
                        row.LastModifiedByNamee =  row.LastModifiedBy.Name;
                    }
                }
        } else if (error) {
            this.error = result.error;
        }
    }
    doSorting(event) 
    {
        this.isLoading = true;
        this.sortBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
    }
    handleClickNewTask() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }
    handleRefresh()
    {
        location.reload();
    }
}
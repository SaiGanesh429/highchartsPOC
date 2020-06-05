import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-bootstrap-multiselect',
  templateUrl: './ngx-bootstrap-multiselect.component.html',
  styleUrls: ['./ngx-bootstrap-multiselect.component.scss']
})
export class NgxBootstrapMultiselectComponent implements OnInit {

  constructor() { }
  selectedItems =[];
  dropdownSettings = {
      dataIdProperty: "idValue",
      dataNameProperty: "nameValue",
      headerText: "Test header",
      noneSelectedBtnText: "All selected",
      btnWidth: "200px",
      dropdownHeight: "200px",
      showDeselectAllBtn: true,
      showSelectAllBtn: true,
      deselectAllBtnText: 'Deselect',
      selectAllBtnText: 'Select',
      btnClasses: 'btn btn-primary btn-sm dropdown-toggle',
      selectionLimit: 3,
      enableFilter: true
    }
  dropdownList = [
      {"idValue":1,"nameValue":"India"},
      {"idValue":2,"nameValue":"Singapore"},
      {"idValue":3,"nameValue":"Australia"},
      {"idValue":4,"nameValue":"Canada"},
      {"idValue":5,"nameValue":"South Korea"},
      {"idValue":6,"nameValue":"Germany"},
      {"idValue":7,"nameValue":"France"},
      {"idValue":8,"nameValue":"Russia"},
      {"idValue":9,"nameValue":"Italy"},
      {"idValue":10,"nameValue":null}
    ]
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Section } from "../../model/sections";
import { HeadingExampleComponent } from '../../components/examples/heading/heading-example/heading-example.component';
import { HeadingTablePropertiesComponent } from '../../components/examples/heading/properties/heading-table-properties/heading-table-properties.component';
import { HeadingImportComponent } from '../../components/examples/heading/heading-import/heading-import.component';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push(
      {
        id: 0,
        label: "PROPERTIES",
        selector: "heading-table-properties",
        component: HeadingTablePropertiesComponent
      },
      {
        id: 1,
        label: "MODULE",
        selector: "heading-import",
        component: HeadingImportComponent
      },
      {
        id: 2,
        label: "EXAMPLES",
        selector: "heading-example",
        component: HeadingExampleComponent
      }
    );
  }

}

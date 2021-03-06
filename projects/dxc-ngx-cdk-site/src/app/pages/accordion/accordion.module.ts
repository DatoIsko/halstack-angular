import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionComponent } from './accordion.component';
import { DxcTableModule, DxcAccordionModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { AccordionTablePropertiesComponent } from 'src/app/components/examples/accordion/properties/accordion-table-properties/accordion-table-properties.component';
import { ExampleViewerComponent } from 'src/app/components/example-viewer/example-viewer.component';
import { ExampleViewerModule } from 'src/app/components/example-viewer/example-viewer.module';
import { AccordionDefaultComponent } from 'src/app/components/examples/accordion/accordion-default/accordion-default.component';
import { AccordionAlternativeComponent } from 'src/app/components/examples/accordion/accordion-alternative/accordion-alternative.component';
import { AccordionDisabledComponent } from 'src/app/components/examples/accordion/accordion-disabled/accordion-disabled.component';
import { AccordionAssistiveComponent } from 'src/app/components/examples/accordion/accordion-assistive/accordion-assistive.component';
import { AccordionIconComponent } from 'src/app/components/examples/accordion/accordion-icon/accordion-icon.component';
import { AccordionDarkComponent } from 'src/app/components/examples/accordion/accordion-dark/accordion-dark.component';
import { AccordionExampleModule } from '../../components/examples/accordion/accordion-example/accordion-example.module';
import { AccordionControlledComponent } from '../../components/examples/accordion/accordion-controlled/accordion-controlled.component';
import { AccordionImportComponent } from '../../components/examples/accordion/accordion-import/accordion-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionTablePropertiesComponent,
    AccordionDefaultComponent,
    AccordionAlternativeComponent,
    AccordionDisabledComponent,
    AccordionAssistiveComponent,
    AccordionIconComponent,
    AccordionDarkComponent,
    AccordionControlledComponent,
    AccordionImportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DxcAccordionModule,
    AccordionExampleModule,
    ExampleViewerModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule
  ], 
  exports: [
    AccordionComponent,
    AccordionTablePropertiesComponent,
    AccordionDefaultComponent,
    AccordionAlternativeComponent,
    AccordionDisabledComponent,
    AccordionAssistiveComponent,
    AccordionIconComponent,
    AccordionDarkComponent,
    AccordionImportComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class AccordionModule { }

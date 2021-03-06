import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DxcTabbedSectionModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TabbedSectionInfoComponent } from './tabbed-section-info.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { TabbedSectionTablePropertiesComponent } from '../../components/examples/tabbed-section/properties/tabbed-section-table-properties/tabbed-section-table-properties.component';
import { TabbedSectionDefaultComponent } from '../../components/examples/tabbed-section/tabbed-section-default/tabbed-section-default.component';
import { TabbedSectionExampleComponent } from '../../components/examples/tabbed-section/tabbed-section-example/tabbed-section-example.component';
import { TabbedSectionNotesComponent } from '../../components/examples/tabbed-section/properties/tabbed-section-notes/tabbed-section-notes.component';
import { CodePlaygroundModule } from 'src/app/components/code-playground/code-playground.module';
import { TabbedSectionImportComponent } from '../../components/examples/tabbed-section/tabbed-section-import/tabbed-section-import.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    TabbedSectionInfoComponent,
    TabbedSectionTablePropertiesComponent,
    TabbedSectionDefaultComponent,
    TabbedSectionExampleComponent,
    TabbedSectionNotesComponent,
    TabbedSectionImportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    DxcTabbedSectionModule,
    TabbedSectionModule,
    ExampleViewerModule,
    CodePlaygroundModule,
    DxcTagModule,
    ComponentsSidenavModule
  ],
  exports: [
    TabbedSectionInfoComponent,
    TabbedSectionTablePropertiesComponent,
    TabbedSectionDefaultComponent,
    TabbedSectionExampleComponent,
    TabbedSectionNotesComponent,
    TabbedSectionImportComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class TabbedSectionInfoModule { }

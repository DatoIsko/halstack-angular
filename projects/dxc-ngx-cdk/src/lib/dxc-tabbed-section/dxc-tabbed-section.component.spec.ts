import { render, fireEvent } from "@testing-library/angular";
import { screen } from "@testing-library/dom";
import { DxcTabbedSectionComponent } from "./dxc-tabbed-section.component";
import { TestBed } from "@angular/core/testing";
import { DxcTabbedSectionModule } from './dxc-tabbed-section.module';

describe("DxcTabbedSection tests", () => {
  test("should render dxc-tabbed-section", async () => {
    const tabs = await render(DxcTabbedSectionComponent, {
      template: `<dxc-tabbed-section [sections]="[{id:0, label: 'TAB 1', selector: 'tab1-selector'},
                                                {id:1, label: 'TAB 2', selector: 'tab2-selector'},
                                                {id:2, label: 'TAB 3', selector: 'tab3-selector'}]">
                </dxc-tabbed-section>`,
      componentProperties: {
       },
      imports: [DxcTabbedSectionModule],
      excludeComponentDeclaration: true
    });
    tabs.detectChanges();
    expect(screen.getByText("TAB 1")).toBeTruthy();
    expect(screen.getByText("TAB 2")).toBeTruthy();
    expect(screen.getByText("TAB 3")).toBeTruthy();
    });

    test("should render content dxc-tabbed-section", async () => {
        const tabs = await render(DxcTabbedSectionComponent, {
          template: `<dxc-tabbed-section [sections]="[{id:0, label: 'TAB 1', selector: 'tab1-selector'},
                                                    {id:1, label: 'TAB 2', selector: 'tab2-selector'},
                                                    {id:2, label: 'TAB 3', selector: 'tab3-selector'}]">
                        <div id="section1-selector0" style="height: 200px;">Section 1</div>
                        <div id="section2-selector1" style="height: 200px;">Section 2</div>
                        <div id="section3-selector2" style="height: 200px;">Section 3</div>
                    </dxc-tabbed-section>`,
          componentProperties: {
           },
          imports: [DxcTabbedSectionModule],
          excludeComponentDeclaration: true
        });
        tabs.detectChanges();
        expect(screen.getByText("Section 1")).toBeTruthy();
        expect(screen.getByText("Section 2")).toBeTruthy();
        expect(screen.getByText("Section 3")).toBeTruthy();
    });

});
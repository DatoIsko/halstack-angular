import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { EventEmitter } from 'events';
import { css } from "emotion";
import { DxcTabsComponent } from '../dxc-tabs/dxc-tabs.component';
import { BehaviorSubject } from 'rxjs';
import { coerceArray, coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'dxc-tabbed-section',
  templateUrl: './dxc-tabbed-section.component.html',
  styleUrls: ['./dxc-tabbed-section.component.scss']
})
export class DxcTabbedSectionComponent implements OnInit {

  //input attributes
  @Input() tabsMode: string = "filled";;
  @Input() tabsTheme: string = "light";;

  @Input()
  get disableTabsRipple(): boolean { return this._disableTabsRipple; }
  set disableTabsRipple(value: boolean) {
    this._disableTabsRipple = coerceBooleanProperty(value);
  }
  private _disableTabsRipple;

  @Input()
  get stickAtPx(): number { return this._stickAtPx; }
  set stickAtPx(value: number) {
    this._stickAtPx = coerceNumberProperty(value);
  }
  private _stickAtPx;

  @Input()
  get sections(): Array<any> { return this._sections; }
  set sections(value: Array<any>) {
    this._sections = coerceArray(value);
  }
  private _sections;
  
  @ViewChild(DxcTabsComponent, { static: true })
  public sectionTabGroup: DxcTabsComponent;
  
  tabChange = new EventEmitter();
  selectecTab = 0; 

  styledDxcSectionTabbedGroup: string;
  tabId: number;

  private TABS_HEIGHT : number = 54;
  offset: number = 0;

  defaultInputs = new BehaviorSubject<any>({
    tabsMode: "filled",
    tabsTheme: "light",
    disableTabsRipple: "false",
    stickAtPx: 0,
  });

  constructor() { 
    this.stickAtPx = 0;  
    this.disableTabsRipple = false; 
  }

  ngOnInit() {
    this.styledDxcSectionTabbedGroup = `${this.setStyledDxcSectionTabbedGroup(this.defaultInputs.getValue())}`;
    this.calculateOffset(this.defaultInputs.getValue().stickAtPx);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styledDxcSectionTabbedGroup = `${this.setStyledDxcSectionTabbedGroup(this.defaultInputs.getValue())}`;
    this.calculateOffset(this.defaultInputs.getValue().stickAtPx);
  }

  scroll (section) {
    const topOfElement = document.getElementById(section).offsetTop  - 1 ;
    window.scroll({ top: topOfElement - this.offset + 10, behavior: "smooth" });
  }

  onSectionChange(sectionId: string) {
    if (sectionId !== undefined && sectionId !== null) {
      this.tabId = +sectionId;
    } else {
      this.tabId = 0;
    }
  }

  calculateOffset(stickAtPx: number) {
    this.offset = +stickAtPx + this.TABS_HEIGHT;
  }

  setStyledDxcSectionTabbedGroup(input: any){
    return css`
     #dxcTabbedSection .mat-tab-group {
        ${input.stickAtPx ? css`
          z-index: 500;
          position: sticky;
          top: ${+input.stickAtPx}px;` 
        : css`
          z-index: 10;
          position: initial;
          top: unset;
        `};
      }`;
  }
 
}
/// <reference path="d/handlebars.d.ts" />
/// <reference path="d/jquery.d.ts" />

import {Tab} from "./tab.ts";
import {Names} from "./names.ts";

declare var MyApp: any;

export class Frontend {
  
  public tabContainerId: string;
  public tabContentContainerId: string;
  
  private names: Names;
  
  constructor() {
    this.tabContainerId = "header2";
    this.tabContentContainerId = "content";
    
    this.names = new Names();
  }
  
  public formTab(tab?: Tab): Tab {
    if(tab) {
      
    }
    return new Tab();
  }

  public newTab(tab: Tab): void {
    var tabHtml = MyApp.templates.tab(tab);
    var tabContentHtml = MyApp.templates.tabContent(tab);
    // insert tab
    document.getElementById(this.tabContainerId).innerHTML += tabHtml;
    // insert tab content
    document.getElementById(this.tabContentContainerId).innerHTML += tabContentHtml;
  }
  
  
  public selectTab(tab: Tab): void {
    let className = this.names.eventsClassPrefix + "Tab";
    $("." + className).removeClass("jsActive");
    $("." + className + "[data-tab-id=" + tab.id + "]").addClass("jsActive");
    let tabClassName = this.names.classTabContent;
    $("." + tabClassName).removeClass("jsShow").addClass("jsHide");
    $("." + tabClassName + "[data-tab-id=" + tab.id + "]").removeClass("jsHide").addClass("jsShow");
  }

}
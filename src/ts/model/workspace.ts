/// <reference path="../typings/tsd.d.ts" />

import {Db} from "../super/db.ts";

import {Tab} from "./tab.ts";
import {Widget} from "./widget.ts";
import {WidgetInstance} from "./widget_instance.ts";

export class Workspace {

  public id: number;
  public name: string;
  public db: Db;
  public created: Date;
  public modified: Date;

  constructor() {
  }

}

import { ComponentFactory } from "@angular/core";
import { Layout1Component } from "./layout/layout1/layout1.component";
import { Layout2Component } from "./layout/layout2/layout2.component";
import { Layout3Component } from "./layout/layout3/layout3.component";

export type LayoutType =
    | Layout1Component
    | Layout2Component
    | Layout3Component

export const LayoutComponentList = {
  'layout1': Layout1Component,
  'layout2': Layout2Component,
  'layout3': Layout3Component,
}

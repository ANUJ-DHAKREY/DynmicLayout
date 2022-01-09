import { AfterViewChecked, AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { map, Subscription, takeUntil } from 'rxjs';
import { LayoutComponentList, LayoutType } from './app.model';
import { Layout1Component } from './layout/layout1/layout1.component';
import { SwitchLayoutService } from './service/switch-layout.service';
import { Shared1Component } from './shared/shared1/shared1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dyanmicTheme';

  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<any>;
  obs: Subscription;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private switchLayoutService: SwitchLayoutService
    ) {
      this.obs = this.switchLayoutService.getLayout().subscribe((layout) => {
        this.createComponent(layout)
      })
    }

    ngAfterViewInit(): void {
      this.createComponent('layout1');
    }


  public createComponent(type: string) {
    this.container.clear();
    const selectLayout = LayoutComponentList[type]
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(selectLayout);
    this.componentRef = this.container.createComponent(factory);
  }
}

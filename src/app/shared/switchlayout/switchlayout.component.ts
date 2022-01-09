import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SwitchLayoutService } from 'src/app/service/switch-layout.service';

@Component({
  selector: 'app-switchlayout',
  templateUrl: './switchlayout.component.html',
  styleUrls: ['./switchlayout.component.scss']
})
export class SwitchlayoutComponent implements OnInit {
  layouts: string[] = ['layout1', 'layout2', 'layout3']
  selectedLayout: string = 'layout1'

  constructor(private switchLayoutService: SwitchLayoutService) { }


  ngOnInit(): void {
    this.switchLayoutService.getLayout().subscribe(layout => {
      this.selectedLayout = layout;
    });
  }

  selectlayout(event) {
    this.selectedLayout = event;
    this.switchLayoutService.setSelectedLayout(this.selectedLayout);
  }

}

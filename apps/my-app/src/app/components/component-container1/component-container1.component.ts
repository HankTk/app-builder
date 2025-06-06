import { Component, OnInit } from '@angular/core';
import { ButtonsComponent } from "../../pages/buttons/buttons.component";

@Component({
  selector: 'app-component-analyte',
  standalone: true,
  templateUrl: './component-container1.component.html',
  imports: [ButtonsComponent],
  styleUrls: ['./component-container1.component.scss'],
})
export class ComponentContainer1Component implements OnInit {

  constructor() {}

  ngOnInit() {}

}

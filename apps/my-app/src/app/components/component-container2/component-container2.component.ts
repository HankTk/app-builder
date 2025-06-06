import { Component, OnInit } from '@angular/core';
import { ButtonsComponent } from "../../pages/buttons/buttons.component";
import { InputsComponent } from "../../pages/inputs/inputs.component";

@Component({
  selector: 'app-component-detail',
  standalone: true,
  templateUrl: './component-container2.component.html',
  imports: [ButtonsComponent, InputsComponent],
  styleUrls: ['./component-container2.component.scss'],
})
export class ComponentContainer2Component implements OnInit {

  constructor() {}

  ngOnInit() {}

}

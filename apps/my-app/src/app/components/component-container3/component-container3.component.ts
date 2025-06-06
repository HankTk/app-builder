import { Component, OnInit } from '@angular/core';
import { Signals1Component } from "../../pages/signals1/signals1.component";

@Component({
  selector: 'app-component-detail',
  standalone: true,
  templateUrl: './component-container3.component.html',
  imports: [Signals1Component],
  styleUrls: ['./component-container3.component.scss'],
})
export class ComponentContainer3Component implements OnInit {

  constructor() {}

  ngOnInit() {}

}

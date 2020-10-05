import { Component, Injector, OnInit } from '@angular/core';
import { MainService } from "../../libs/main.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends MainService implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadScripts();
  }

}

import { Component, Injector, OnInit } from '@angular/core';
import { ScriptComponent } from "../libs/script.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends ScriptComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadScripts();
  }

}

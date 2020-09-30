import { Component, Injector, OnInit } from '@angular/core';
import { ScriptComponent } from "../../libs/script.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends ScriptComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadScripts();
    setTimeout(() => {
      var elem = document.getElementById("script");
      elem.remove();
    }, 2000);
  }

}

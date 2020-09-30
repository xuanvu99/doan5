import { Component, Injector, OnInit } from '@angular/core';
import { ScriptComponent } from "../../libs/script.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent extends ScriptComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    // this.loadScripts();
  }

}

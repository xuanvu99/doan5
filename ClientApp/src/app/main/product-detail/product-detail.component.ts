import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ScriptService } from "../../libs/script.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent extends ScriptService implements OnInit {

  constructor(
    injector: Injector,
    private route: ActivatedRoute
  ) {
    super(injector)
  }

  ngOnInit(): void {
    let elem = document.getElementsByClassName('script');
    if (elem.length != undefined) {
      for (var i = elem.length - 1; 0 <= i; i--) {
        elem[i].remove();
      }
    }
    setTimeout(() => {
      this.loadScripts();
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

    })
  }

}

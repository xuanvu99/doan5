import { Component, Injector, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public _renderer: any

  constructor(injector: Injector) {
    this._renderer = injector.get(Renderer2);
  }

  ngOnInit(): void {
    // let elem = document.getElementsByClassName('nouislider');
    // for (var i = elem.length - 1; 0 <= i; i--) {
    //   elem[i].remove();
    // }
    // this.loadScripts();
  }

  // public loadScripts() {
  //   this.renderExternalScript('assets/js/vendors/jquery.nouislider.min.js').onload = () => { }
  // }

  // public renderExternalScript(src: string): HTMLScriptElement {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = src;
  //   script.async = true;
  //   script.defer = true;
  //   script.className = "nouislider";
  //   this._renderer.appendChild(document.body, script);
  //   return script;
  // }

}

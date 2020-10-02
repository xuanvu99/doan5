import { Component, Injector, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public _renderer: any;

  constructor(injector: Injector) {
    this._renderer = injector.get(Renderer2);
  }

  ngOnInit(): void {
    this.loadScripts();
    let script = document.getElementsByClassName('main');
    for (var i = script.length - 1; 1 <= i; i--) {
      script[i].remove();
    }
  }

  public loadScripts() {
    let scripts = document.getElementById('script');
    if (scripts == undefined)
      this.renderExternalScript('assets/js/main.js').onload = () => { }
  }

  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    script.className = "main";
    this._renderer.appendChild(document.body, script);
    return script;
  }

}

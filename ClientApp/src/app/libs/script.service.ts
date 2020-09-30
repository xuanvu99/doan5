import { Injector, Renderer2 } from '@angular/core';

export class ScriptComponent {
    public _renderer: any;

    constructor(injector: Injector) {
        this._renderer = injector.get(Renderer2);
    }

    public loadScripts() {
        this.renderExternalScript('assets/js/main.js').onload = () => { }
        // this.renderExternalScript('assets/js/vendors/jquery.nouislider.min.js').onload = () => { }
    }

    public renderExternalScript(src: string): HTMLScriptElement {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        script.defer = true;
        script.id = "script";
        this._renderer.appendChild(document.body, script);
        return script;
    }
}
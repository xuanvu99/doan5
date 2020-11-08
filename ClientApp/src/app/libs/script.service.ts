import { Injector, Renderer2 } from '@angular/core';

export class ScriptService {
    public _renderer: any;

    constructor(injector: Injector) {
        this._renderer = injector.get(Renderer2);
    }

    public loadScripts() {
        // this.renderExternalScript('assets/js/plugins.js').onload = () => { }
        this.renderExternalScript('assets/js/main.js').onload = () => { }
    }

    public renderExternalScript(src: string): HTMLScriptElement {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        script.defer = true;
        script.className = "script";
        this._renderer.appendChild(document.body, script);
        return script;
    }
}
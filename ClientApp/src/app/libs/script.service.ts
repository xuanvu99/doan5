import { Injector, Renderer2 } from '@angular/core';

export class ScriptComponent {
    public _renderer: any;

    constructor(injector: Injector) {
        this._renderer = injector.get(Renderer2);
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
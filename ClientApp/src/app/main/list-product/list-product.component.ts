import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { environment } from 'src/environments/environment';
import { ScriptService } from "../../libs/script.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent extends ScriptService implements OnInit {
  list = [];

  constructor(
    injector: Injector,
    private route: ActivatedRoute,
    private homeService: HomeService
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
    }, 1000)

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.homeService.getList(id).subscribe((data: any) => {
        this.list = data;
      })
    })
  }

  createImg = (nameFile: string) => {
    return environment.urlImage + nameFile;
  }

}

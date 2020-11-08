import { Component, OnInit } from '@angular/core';
import { HomeService } from "../services/home.service";

declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listCate = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    $('.drodown-show > a').on('click', function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $('.drodown-show > a').removeClass('active').siblings('.dropdown').slideUp()
        $(this).removeClass('active').siblings('.dropdown').slideUp();
      } else {
        $('.drodown-show > a').removeClass('active').siblings('.dropdown').slideUp()
        $(this).addClass('active').siblings('.dropdown').slideDown();
      }
    });

    this.homeService.getCategory().subscribe((data: any) => {
      this.listCate = data;
    })
  }

}

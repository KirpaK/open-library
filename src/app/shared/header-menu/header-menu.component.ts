import { Component, OnInit, Output, Input, Inject } from "@angular/core";
import { ROUTES_CONFIG } from "src/app/config/routes.config";

@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.styl"]
})
export class HeaderMenuComponent implements OnInit {
  @Input() title: string;
  homeLink: string = this.routsConfg.routes.home;
  favoritesLink: string = this.routsConfg.routes.books.favorites;

  constructor(@Inject(ROUTES_CONFIG) private routsConfg: any) {}

  ngOnInit() {}
}

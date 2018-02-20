import { Component } from "@angular/core";
import { LoadingProgressService } from "./../../loading.service";

@Component({
  selector: "navv",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  constructor(public progressbar: LoadingProgressService) {}
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

import { LoadingProgressService } from "./../../loading.service";

import { Email } from "../../../DTOs/Email";

@Injectable()
export class EmailService {
  constructor(
    private _email: HttpClient,
    private progressbar: LoadingProgressService,
    private _router: Router,
    public snackBar: MatSnackBar
  ) {}

  send(email: Email) {
    this._email.post("http://localhost:5000/api/send", email).subscribe(
      res => {
        this.openSnackBar("Email sent.", null);
        this._router.navigate(["/home"]);
      },
      error => {
        return false;
      },
      () => {
        this.progressbar.show = false;
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
}

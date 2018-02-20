import { Component } from "@angular/core";

import { EmailService } from "./../../services/email.service";

import { Email } from "../../../../DTOs/Email";

@Component({
  selector: "email-form",
  templateUrl: "./email-form.component.html",
  styleUrls: ["./email-form.component.css"]
})
export class EmailFormComponent {
  email: Email = new Email();

  constructor(private _emailService: EmailService) {}

  sendEmail(option: any): void {
    if (
      !(
        option.controls.password.value ===
        document.getElementsByName("passwordvalidating")[0].value
      )
    ) {
      this._emailService.openSnackBar("Password invalid", null);
    } else {
      this._emailService.send(this.email);
    }
  }
}

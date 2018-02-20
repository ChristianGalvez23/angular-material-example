import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../MaterialModule/material.module";

import { EmailService } from "./services/email.service";

import { EmailFormComponent } from "./components/email-form/email-form.component";
import { EmailsSentComponent } from "./components/emails-sent/emails-sent.component";

const routes: Routes = [
  { path: "email/send", component: EmailFormComponent },
  { path: "email/sent", component: EmailsSentComponent }
];

@NgModule({
  declarations: [EmailFormComponent, EmailsSentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [EmailService],
  exports: [RouterModule]
})
export class EmailModule {}

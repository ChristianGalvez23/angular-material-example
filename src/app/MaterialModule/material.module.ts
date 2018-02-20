import { NgModule } from "@angular/core";

// Angular Material Components
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatRadioModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatRadioModule,
    MatSnackBarModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}

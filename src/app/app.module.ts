import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// Own Services
import { InterceptorCalls } from "./interceptor.service";
import { LoadingProgressService } from "./loading.service";

// Own Modules
import { MaterialModule } from "./MaterialModule/material.module";
import { EmailModule } from "./EmailModule/email.module";

// Own Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";

// Properties
const routes: Routes = [{ path: "home", component: HomeComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    EmailModule
  ],
  providers: [
    LoadingProgressService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorCalls,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

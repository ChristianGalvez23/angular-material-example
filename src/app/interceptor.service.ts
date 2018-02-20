import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { LoadingProgressService } from "./loading.service";

@Injectable()
export class InterceptorCalls implements HttpInterceptor {
  constructor(private progressbar: LoadingProgressService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Http outgoing call...");
    this.progressbar.show = true;
    return next.handle(req);
  }
}

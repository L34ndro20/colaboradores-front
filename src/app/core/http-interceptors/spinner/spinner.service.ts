import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize} from 'rxjs/operators';

@Injectable()
export class Spinner  implements HttpInterceptor {

  private count: number;
  constructor(private spinner: NgxSpinnerService) {
      this.count = 0;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.count === 0) {
      this.spinner.show();
    }
    this.count++;
    return next.handle(req).pipe(finalize(() => {

      this.count--;
      if (this.count === 0) {
        this.spinner.hide();
      }
    }));
  }
}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public toastrService: ToastrService,
  ) { }

  showSuccess(message: string): void {
    this.toastrService.success(message, 'Success');
  }

  showError(message: string): void {
    this.toastrService.error(message, 'Error');
  }
  showWarning(message: string): void {
    this.toastrService.warning(message, 'Error');
  }
}

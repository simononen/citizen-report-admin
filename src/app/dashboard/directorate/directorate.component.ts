import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DirectoryAnalyticsService } from './_services/directory-analytics.service';
import { IDirectorate } from '../../shared/interfaces/directorate/directorate';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-directorate',
  templateUrl: './directorate.component.html',
  styleUrls: ['./directorate.component.scss']
})
export class DirectorateComponent implements OnInit {

  isLoading: Boolean = false;
  errorMessage: string = '';
  directorateSummaries$!: Observable<IDirectorate | null>;

  constructor(
    private _directorateAnalyticsService: DirectoryAnalyticsService
  ) {}

  ngOnInit(): void {
    this.getDirectorateSummaries();
  }
  getDirectorateSummaries() {
    this.directorateSummaries$ = this._directorateAnalyticsService.getAnalyticsSummary().pipe(
      catchError(error => {
        this.errorMessage = error;
        return of(null);
      }));
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorate',
  templateUrl: './directorate.component.html',
  styleUrls: ['./directorate.component.scss']
})
export class DirectorateComponent implements OnInit {

  isLoading: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

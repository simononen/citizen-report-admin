import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { DistrictService } from '../../district/_services/district.service';
import { ILeader } from '../../../../shared/interfaces/leader/leader';
import { LeadershipService } from '../_services/leadership.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-leadership',
  templateUrl: './new-leadership.component.html',
  styleUrls: ['./new-leadership.component.scss']
})
export class NewLeadershipComponent implements OnInit {

  leadershipForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  leaders$!: Observable<ILeader[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';


  constructor(
    private fb: FormBuilder,
    private _districtService: DistrictService,
    private _leadersService: LeadershipService
  ) {
   }

  ngOnInit(): void {
    this.getAllDistricts('');
  }

  getAllDistricts(url: string) {
    this.isLoading = true;
    this._districtService.getAllDistricts(url, 'all').subscribe(
      (res) => {
        this.isLoading = false;
        this.districtList = res;
        this.setUpLeaderForm();
      },
      (error) => {

      }
    )
  }

  setUpLeaderForm(): void {
    this.leadershipForm = this.fb.group({
      'position': ['', Validators.required],
      'contact_details': [''],
      'description': [''],
      'district_id': ['', Validators.required],
    });

    this.filteredDistricts = this.leadershipForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  clearSearch() {
    this.district?.setValue(null);
  }

  onSaveLeadership(form: FormGroup) {
    this.isLoading = true;

    let leaderData = {
      'data': {
        'type': 'leaders',
        'attributes': {
          'position': form.controls.position.value,
          'description': form.controls.description.value,
          'contact_details': form.controls.contact_details.value,
          'district_id': form.controls.district_id.value.id,
        }
      }
    }

    this._leadersService.addLeader(leaderData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The leader record has been added.',
          'success'
        );
        this.leadershipForm.reset();
      },
      (error) => {
        this.isLoading = false;

      }
    );


  }

  displayState(state: any) {
    return state ? state.district_name : '';
  }

  get leadershipTitle() {
    return this.leadershipForm.get('title');
  }

  get district() {
    return this.leadershipForm.get('district_id');
  }

}

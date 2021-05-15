import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { DistrictService } from '../../district/_services/district.service';
import { IParish } from 'src/app/shared/interfaces/parish/parish';
import { Observable } from 'rxjs';
import { ParishService } from '../_services/parish.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-parish',
  templateUrl: './new-parish.component.html',
  styleUrls: ['./new-parish.component.scss']
})
export class NewParishComponent implements OnInit {

  parishForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  parishes$!: Observable<IParish[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
    private _parishService: ParishService,
    private _districtService: DistrictService,
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
        this.setUpParishForm();
      },
      (error) => {

      }
    )
  }

  setUpParishForm(): void {
    this.parishForm = this.fb.group({
      'parish_code': [''],
      'parish_name': ['', Validators.required],
      'district_id': ['', Validators.required],
    });

    this.filteredDistricts = this.parishForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onSaveParish(form: FormGroup) {

    this.isLoading = true;

    let parishData = {
      'data': {
        'type': 'parishes',
        'attributes': {
          'parish_code': form.controls.parish_code.value,
          'parish_name': form.controls.parish_name.value,
          'district_id': form.controls.district_id.value.id,
          'district_name': form.controls.district_id.value.district_name
        }
      }
    }

    this._parishService.addParish(parishData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The parish record has been added.',
          'success'
        );
        this.parishForm.reset();
      },
      (error) => {
        this.isLoading = false;

      }
    );

  }

  displayState(state: any) {
    return state ? state.district_name : '';
  }

  get parishName() {
    return this.parishForm.get('parish_name');
  }

  get district() {
    return this.parishForm.get('district_id');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDistrict, IDistricts } from 'src/app/shared/interfaces/district/IDistrict';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, tap } from 'rxjs/operators';

import { CountyService } from '../_services/county.service';
import { DistrictService } from '../../district/_services/district.service';
import Swal from 'sweetalert2';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-county',
  templateUrl: './new-county.component.html',
  styleUrls: ['./new-county.component.scss']
})
export class NewCountyComponent implements OnInit {

  countyForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  districts$!: Observable<IDistrict[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
    private _countyService: CountyService,
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
        this.setUpCountyForm();
      },
      (error) => {
        this.isLoading = false;

      }
    )
  }

  setUpCountyForm(): void {
    this.countyForm = this.fb.group({
      'county_code': [''],
      'county_name': ['', Validators.required],
      'district_id': ['', Validators.required],
    });

    this.filteredDistricts = this.countyForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onSaveCounty(form: FormGroup) {
    this.isLoading = true;

    let countyData = {
      'data': {
        'type': 'counties',
        'attributes': {
          'county_code': form.controls.county_code.value,
          'county_name': form.controls.county_name.value,
          'district_id': form.controls.district_id.value.id,
          'district_name': form.controls.district_id.value.district_name,
        }
      }
    }

    this._countyService.addCounty(countyData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The county record has been added.',
          'success'
        );
        this.countyForm.reset();
      },
      (error) => {
        this.isLoading = false;

      }
    );
  }

  getDistrictDetails(districtDetails: string) {
    console.log('District Details ', districtDetails);
  }

  displayState(state: any) {
    return state ? state.district_name : '';
  }

  get countyName() {
    return this.countyForm.get('county_name');
  }

  get district() {
    return this.countyForm.get('district_id');
  }

}

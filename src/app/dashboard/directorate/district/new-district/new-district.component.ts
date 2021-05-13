import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDistrict, IDistrictData, IDistrictPostData } from 'src/app/shared/interfaces/district/IDistrict';
import { Route, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DistrictService } from '../_services/district.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-district',
  templateUrl: './new-district.component.html',
  styleUrls: ['./new-district.component.scss']
})
export class NewDistrictComponent implements OnInit, OnDestroy {

  isLoading: Boolean = false;
  districtForm!: FormGroup;

  errorMessage: string = '';

  // sub!: Subscription;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _districtService: DistrictService,
  ) {
   }

  ngOnInit(): void {
    this.setUpDistrictForm();
  }

  setUpDistrictForm(): void {
    this.districtForm = this.fb.group({
      's_n': [''],
      'district_code': [''],
      'district_name': ['', Validators.required],
      'region': [''],
      'has_city': [false, Validators.required],
      'city': [''],
      'latitude': [''],
      'longitude': ['']
    });
  }

  onSaveDistrict(form: FormGroup) {

    this.isLoading = true;

    const districtData = {
      'data': {
        'type': 'districts',
        'attributes': {
          's_n': form.controls.s_n.value,
          'dist_code': form.controls.district_code.value,
          'district_name': form.controls.district_name.value,
          'region': form.controls.region.value,
          'has_city': form.controls.has_city.value,
          'city': form.controls.city.value,
          'latitude': form.controls.latitude.value,
          'longitude': form.controls.longitude.value
        }
      }
    }

    this._districtService.addDistrict(districtData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The district record has been added.',
          'success'
        );
        this.districtForm.reset();
        this.setUpDistrictForm();
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  get districtName() {
    return this.districtForm.get('district_name');
  }

  get hasCity() {
    return this.districtForm.get('has_city');
  }

}

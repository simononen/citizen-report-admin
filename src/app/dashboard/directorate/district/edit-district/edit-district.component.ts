import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DecryptService } from '../../../../shared/services/decrypt/decrypt.service';
import { DistrictService } from '../_services/district.service';
import { IDistrict } from '../../../../shared/interfaces/district/IDistrict';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-district',
  templateUrl: './edit-district.component.html',
  styleUrls: ['./edit-district.component.scss']
})
export class EditDistrictComponent implements OnInit {

  isLoading!: Boolean;

  districtForm!: FormGroup;

  district!: IDistrict;

  routingSubscription: Subscription

  districtId!: number | string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.districtId = this._decryptService.decrypt(params['id']);
    });

    this.getDistrictById(this.districtId);

   }

  ngOnInit(): void {

    this.getDistrictById(this.districtId);

  }

  setUpDistrictForm(district: IDistrict): void {
    this.districtForm = this.fb.group({
      's_n': [district?.data?.attributes?.s_n ? district?.data?.attributes?.s_n : '', ''],
      'district_code': [district?.data?.attributes?.dist_code ? district?.data.attributes?.dist_code : '', ''],
      'district_name': [district?.data?.attributes?.district_name ? district?.data?.attributes?.district_name : '', Validators.required],
      'region': [district?.data?.attributes?.region ? district?.data?.attributes?.region : '', ''],
      'has_city': [district?.data?.attributes?.has_city ? district?.data?.attributes?.has_city: false, Validators.required],
      'city': [district?.data?.attributes?.city ? district?.data?.attributes?.city : '', ''],
      'latitude': [district?.data?.attributes?.latitude ? district?.data?.attributes?.latitude : '', ''],
      'longitude': [district?.data?.attributes?.longitude ? district?.data?.attributes?.longitude : '', '']
    });
  }

  onSaveDistrict(form: FormGroup) {
    let districtData = {
      'data': {
        'type': 'districts',
        'attributes': {
          'id': this.districtId,
          's_n': form.controls.s_n.value,
          'district_code': form.controls.district_code.value,
          'district_name': form.controls.district_name.value,
          'region': form.controls.region.value,
          'has_city': form.controls.has_city.value,
          'city': form.controls.city.value,
          'latitude': form.controls.latitude.value,
          'longitude': form.controls.longitude.value
        }
      }
    }

    this._districtService.updateDistrict(districtData, this.districtId).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The district record has been updated.',
          'success'
        );
      },
      (error) => {
        this.isLoading = false;
      }
    );

  }

  getDistrictById(id: number | string) {
    this.isLoading = true
    this._districtService.getDistrictById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.district = res;
        this.setUpDistrictForm(this.district);
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  get districtName() {
    return this.districtForm.get('district_name');
  }

  get hasCity() {
    return this.districtForm.get('has_city');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { CountyService } from '../_services/county.service';
import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { DistrictService } from '../../district/_services/district.service';
import { ICounty } from 'src/app/shared/interfaces/county/County';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-county',
  templateUrl: './edit-county.component.html',
  styleUrls: ['./edit-county.component.scss']
})
export class EditCountyComponent implements OnInit {

  countyForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';

  districtList!: any[];
  county!: ICounty;
  countyId!: number | string;

  filteredDistricts: any = '';

  routingSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _countyService: CountyService,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.countyId = this._decryptService.decrypt(params['id']);
    });

    this.getCountyById(this.countyId);
  }

  ngOnInit(): void {

  }

  getAllDistricts(url: string) {
    this.isLoading = true;
    this._districtService.getAllDistricts(url, 'all').subscribe(
      (res) => {
        this.isLoading = false;
        this.districtList = res;
        // this.setUpCountyForm();
      },
      (error) => {

      }
    )
  }

  setUpCountyForm(county: ICounty): void {
    this.countyForm = this.fb.group({
      'county_code': [county?.data?.attributes?.county_code ? county?.data?.attributes?.county_code : '', ''],
      'county_name': [county?.data?.attributes?.county_name ? county?.data?.attributes?.county_name : '', Validators.required],
      'district_id': [county?.data?.relationships ? county?.data?.relationships : '', Validators.required],
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

  getCountyById(id: number | string) {
    this.isLoading = true;
    this._countyService.getCountyById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.county = res;
        this.setUpCountyForm(this.county);
        this.getAllDistricts('');
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  onSaveDistrict(form: FormGroup) {
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

    this._countyService.updateCounty(this.countyId, countyData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The county record has been updated.',
          'success'
        );
      },
      (error) => {

      }
    );

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

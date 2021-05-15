import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { DistrictService } from '../../district/_services/district.service';
import { ISubcounty } from '../../../../shared/interfaces/subcounty/Subcounty';
import { SubSubcountiesService } from '../_services/sub-counties.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-sub-county',
  templateUrl: './edit-sub-county.component.html',
  styleUrls: ['./edit-sub-county.component.scss']
})
export class EditSubCountyComponent implements OnInit {

  subCountyForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';

  districtList!: any[];
  subcounty!: ISubcounty;
  subcountyId!: number | string;

  filteredDistricts: any = '';

  routingSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _subCountyService: SubSubcountiesService,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.subcountyId = this._decryptService.decrypt(params['id']);
    });

    this.getSubcountyById(this.subcountyId);
  }

  ngOnInit(): void {
  }

  getAllDistricts(url: string) {
    this.isLoading = true;
    this._districtService.getAllDistricts(url, 'all').subscribe(
      (res) => {
        this.isLoading = false;
        this.districtList = res;
      },
      (error) => {

      }
    )
  }

  setUpSubcountyForm(subcounty: ISubcounty): void {
    this.subCountyForm = this.fb.group({
      'sub_county_code': [subcounty?.data?.attributes?.sub_county_code ? subcounty?.data?.attributes?.sub_county_code : '', ''],
      'sub_county_name': [subcounty?.data?.attributes?.sub_county_name ? subcounty?.data?.attributes?.sub_county_name : '', Validators.required],
      'district_id': [subcounty?.data?.relationships ? subcounty?.data?.relationships : '', Validators.required],
    });

    this.filteredDistricts = this.subCountyForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getSubcountyById(id: number | string) {
    this.isLoading = true;
    this._subCountyService.getSubcountyById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.subcounty = res;
        this.setUpSubcountyForm(this.subcounty);
        this.getAllDistricts('');
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  onUpdateCounty(form: FormGroup) {
    this.isLoading = true;

    let subcountyData = {
      'data': {
        'type': 'subcounties',
        'attributes': {
          'sub_county_code': form.controls.sub_county_code.value,
          'sub_county_name': form.controls.sub_county_name.value,
          'district_id': form.controls.district_id.value.id,
          'district_name': form.controls.district_id.value.district_name,
        }
      }
    }

    this._subCountyService.updateSubcounty(this.subcountyId, subcountyData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The Sub county record has been updated.',
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

  get subCountyName() {
    return this.subCountyForm.get('sub_county_name');
  }

  get district() {
    return this.subCountyForm.get('district_id');
  }

}

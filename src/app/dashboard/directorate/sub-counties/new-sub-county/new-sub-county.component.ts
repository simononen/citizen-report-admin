import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { DistrictService } from '../../district/_services/district.service';
import { IDistrict } from 'src/app/shared/interfaces/district/IDistrict';
import { Observable } from 'rxjs';
import { SubSubcountiesService } from '../_services/sub-counties.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-sub-county',
  templateUrl: './new-sub-county.component.html',
  styleUrls: ['./new-sub-county.component.scss']
})
export class NewSubCountyComponent implements OnInit {

  subCountyForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  districts$!: Observable<IDistrict[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
    private _districtService: DistrictService,
    private _subCountyService: SubSubcountiesService,
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
        console.log('District lists ', this.districtList);
        this.setUpSubcountyForm();
      },
      (error) => {

      }
    )
  }

  setUpSubcountyForm(): void {
    this.subCountyForm = this.fb.group({
      'sub_county_code': [''],
      'sub_county_name': ['', Validators.required],
      'district_id': ['', Validators.required],
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

  onSaveSubCounty(form: FormGroup) {

    let subcountyData = {
      'data': {
        'type': 'subcounties',
        'attributes': {
          'sub_county_code': form.controls.sub_county_code.value,
          'sub_county_name': form.controls.sub_county_name.value,
          'district_id': form.controls.district_id.value.id,
          'district_name': form.controls.district_id.value.district_name
        }
      }
    }

    this._subCountyService.addSubcounty(subcountyData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The sub county record has been added.',
          'success'
        );
        this.subCountyForm.reset();
      },
      (error) => {

      }
    );
  }

  getDistrictDetails(districtDetails: string) {
    console.log('District Details ', districtDetails);
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

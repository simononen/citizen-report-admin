import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { DistrictService } from '../../district/_services/district.service';
import { IParish } from 'src/app/shared/interfaces/parish/parish';
import { ParishService } from '../_services/parish.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-parish',
  templateUrl: './edit-parish.component.html',
  styleUrls: ['./edit-parish.component.scss']
})
export class EditParishComponent implements OnInit {

  parishForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';

  districtList!: any[];
  parish!: IParish;
  parishId!: number | string;

  filteredDistricts: any = '';

  routingSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _parishService: ParishService,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.parishId = this._decryptService.decrypt(params['id']);
    });

    this.getParishById(this.parishId);
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

  setUpParishForm(parish: IParish): void {
    this.parishForm = this.fb.group({
      'parish_code': [parish?.data?.attributes?.parish_code ? parish?.data?.attributes?.parish_code : '', ''],
      'parish_name': [parish?.data?.attributes?.parish_name ? parish?.data?.attributes?.parish_name : '', Validators.required],
      'district_id': [parish?.data?.relationships ? parish?.data?.relationships : '', Validators.required],
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

  getParishById(id: number | string) {
    this.isLoading = true;
    this._parishService.getParishById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.parish = res;
        this.setUpParishForm(this.parish);
        this.getAllDistricts('');
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  onSaveParish(form: FormGroup) {
    this.isLoading = true;

    let parishData = {
      'data': {
        'type': 'counties',
        'attributes': {
          'parish_code': form.controls.parish_code.value,
          'parish_name': form.controls.parish_name.value,
          'parish_ward': form.controls.parish_name.value,
          'district_id': form.controls.district_id.value.id,
          'district_name': form.controls.district_id.value.district_name,
        }
      }
    }

    this._parishService.updateParish(this.parishId, parishData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The parish record has been updated.',
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

  clearSearch() {
    this.district?.setValue(null);
  }

  get parishName() {
    return this.parishForm.get('parish_name');
  }

  get district() {
    return this.parishForm.get('district_id');
  }

}

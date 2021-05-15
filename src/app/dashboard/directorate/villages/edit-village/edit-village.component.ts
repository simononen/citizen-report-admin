import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { DistrictService } from '../../district/_services/district.service';
import { IVillage } from 'src/app/shared/interfaces/village/village';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { VillageService } from '../_services/village.service';

@Component({
  selector: 'app-edit-village',
  templateUrl: './edit-village.component.html',
  styleUrls: ['./edit-village.component.scss']
})
export class EditVillageComponent implements OnInit {

  villageForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';

  districtList!: any[];
  village!: IVillage;
  villageId!: number | string;

  filteredDistricts: any = '';

  routingSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _villageService: VillageService,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.villageId = this._decryptService.decrypt(params['id']);
    });

    this.getVillageById(this.villageId);
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

  setUpVillageForm(village: IVillage): void {
    this.villageForm = this.fb.group({
      'village_code': [village?.data?.attributes?.village_code ? village?.data?.attributes?.village_code : '', ''],
      'village_name': [village?.data?.attributes?.village_name ? village?.data?.attributes?.village_name : '', Validators.required],
      'district_id': [village?.data?.relationships ? village?.data?.relationships : '', Validators.required],
    });

    this.filteredDistricts = this.villageForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getVillageById(id: number | string) {
    this.isLoading = true;
    this._villageService.getVillageById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.village = res;
        this.setUpVillageForm(this.village);
        this.getAllDistricts('');
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  onSaveVillage(form: FormGroup) {
    this.isLoading = true;

    let villageData = {
      'data': {
        'type': 'villages',
        'attributes': {
          'village_code': form.controls.village_code.value,
          'village_name': form.controls.village_name.value,
          'village_ward': form.controls.village_name.value,
          'district_id': form.controls.district_id.value.id,
          'district_name': form.controls.district_id.value.district_name,
        }
      }
    }

    this._villageService.updateVillage(this.villageId, villageData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The village record has been updated.',
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

  get villageName() {
    return this.villageForm.get('village_name');
  }

  get district() {
    return this.villageForm.get('district_id');
  }

}

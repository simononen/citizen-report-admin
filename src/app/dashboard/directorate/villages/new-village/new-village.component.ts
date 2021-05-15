import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { DistrictService } from '../../district/_services/district.service';
import { IVillage } from 'src/app/shared/interfaces/village/village';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { VillageService } from '../_services/village.service';

@Component({
  selector: 'app-new-village',
  templateUrl: './new-village.component.html',
  styleUrls: ['./new-village.component.scss']
})
export class NewVillageComponent implements OnInit {

  villageForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  districts$!: Observable<IVillage[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
    private _villageService: VillageService,
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
        this.setUpvillageForm();
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  setUpvillageForm(): void {
    this.villageForm = this.fb.group({
      'village_code': [''],
      'village_name': ['', Validators.required],
      'district_id': ['', Validators.required],
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

  clearSearch() {
    this.district?.setValue(null);
  }

  onSaveVillage(form: FormGroup) {
    this.isLoading = true;

    let parishData = {
      'data': {
        'type': 'villages',
        'attributes': {
          'village_code': form.controls.village_code.value,
          'village_name': form.controls.village_name.value,
          'district_id': form.controls.district_id.value.id,
          'district_name': form.controls.district_id.value.district_name,
        }
      }
    }

    this._villageService.addVillage(parishData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The village record has been added.',
          'success'
        );
        this.villageForm.reset();
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

  get villageName() {
    return this.villageForm.get('village_name');
  }

  get district() {
    return this.villageForm.get('district_id');
  }
}

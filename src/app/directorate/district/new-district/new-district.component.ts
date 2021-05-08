import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-district',
  templateUrl: './new-district.component.html',
  styleUrls: ['./new-district.component.scss']
})
export class NewDistrictComponent implements OnInit {

  districtForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
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
    let districtData = {
      's_n': form.controls.s_n.value,
      'district_code': form.controls.district_code.value,
      'district_name': form.controls.district_name.value,
      'region': form.controls.region.value,
      'has_city': form.controls.has_city.value,
      'city': form.controls.city.value,
      'latitude': form.controls.latitude.value,
      'longitude': form.controls.longitude.value
    }
    console.log('Form Values ', districtData);
  }

  get districtName() {
    return this.districtForm.get('district_name');
  }

  get hasCity() {
    return this.districtForm.get('has_city');
  }

}

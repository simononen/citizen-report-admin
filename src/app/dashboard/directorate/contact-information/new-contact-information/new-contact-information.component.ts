import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { ContactInformationService } from '../_services/contact-information.service';
import { DistrictService } from '../../district/_services/district.service';
import { IContact } from 'src/app/shared/interfaces/contact/contact';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-contact-information',
  templateUrl: './new-contact-information.component.html',
  styleUrls: ['./new-contact-information.component.scss']
})
export class NewContactInformationComponent implements OnInit {

  contactInformationForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  contacts$!: Observable<IContact[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
    private _districtService: DistrictService,
    private _contactInformationService: ContactInformationService
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
        this.setUpContactInformationForm();
      },
      (error) => {

      }
    )
  }

  setUpContactInformationForm(): void {
    this.contactInformationForm = this.fb.group({
      'head_quarters': [''],
      'address': [''],
      'phone_number': [''],
      'website': [''],
      'district_id': ['', Validators.required],
    });

    this.filteredDistricts = this.contactInformationForm.get('district_id')?.valueChanges
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

  onSaveContact(form: FormGroup) {
    this.isLoading = true;

    let contactData = {
      'data': {
        'type': 'contacts',
        'attributes': {
          'head_quarters': form.controls.head_quarters.value,
          'address': form.controls.address.value,
          'phone_number': form.controls.phone_number.value,
          'website': form.controls.website.value,
          'district_id': form.controls.district_id.value,
        }
      }
    }

    this._contactInformationService.addContact(contactData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The parish record has been added.',
          'success'
        );
        this.contactInformationForm.reset();
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

  get district() {
    return this.contactInformationForm.get('district_id');
  }

}

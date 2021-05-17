import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { ContactInformationService } from '../_services/contact-information.service';
import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { DistrictService } from '../../district/_services/district.service';
import { IContact } from 'src/app/shared/interfaces/contact/contact';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contact-information',
  templateUrl: './edit-contact-information.component.html',
  styleUrls: ['./edit-contact-information.component.scss']
})
export class EditContactInformationComponent implements OnInit {

  contactForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';

  districtList!: any[];
  contact!: IContact;
  contactId!: number | string;

  filteredDistricts: any = '';

  routingSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private  _contactInformationService: ContactInformationService,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.contactId = this._decryptService.decrypt(params['id']);
    });

    this.getContactById(this.contactId);
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
        this.isLoading = false;
      }
    )
  }

  setUpContactForm(contact: IContact): void {
    this.contactForm = this.fb.group({
      'head_quarters': [contact?.data?.attributes?.head_quarters ? contact?.data?.attributes?.head_quarters : '', ''],
      'address': [contact?.data?.attributes?.address ? contact?.data?.attributes?.address : '', Validators.required],
      'phone_number': [contact?.data?.attributes?.phone_number ? contact?.data?.attributes?.phone_number : '', Validators.required],
      'website': [contact?.data?.attributes?.website ? contact?.data?.attributes?.website : '', Validators.required],
      'district_id': [contact?.data?.relationships ? contact?.data?.relationships : '', Validators.required],
    });

    this.filteredDistricts = this.contactForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getContactById(id: number | string) {
    this.isLoading = true;
    this._contactInformationService.getContactById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.contact = res;
        this.setUpContactForm(this.contact);
        this.getAllDistricts('');
      },
      (error) => {
        this.isLoading = false;
      }
    )
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

    this._contactInformationService.updateContact(this.contactId, contactData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The contact record has been updated.',
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

  get contactName() {
    return this.contactForm.get('contact_name');
  }

  get district() {
    return this.contactForm.get('district_id');
  }

}

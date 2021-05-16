import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { DistrictService } from '../../district/_services/district.service';
import { FavouritesService } from '../_services/favourites.service';
import { IFavourite } from 'src/app/shared/interfaces/favourites/favourite';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-favourites',
  templateUrl: './edit-favourites.component.html',
  styleUrls: ['./edit-favourites.component.scss']
})
export class EditFavouritesComponent implements OnInit {

  favouriteForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';

  districtList!: any[];
  favourite!: IFavourite;
  favouriteId!: number | string;

  filteredDistricts: any = '';

  routingSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _favouriteService: FavouritesService,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.favouriteId = this._decryptService.decrypt(params['id']);
    });

    this.getFavouriteById(this.favouriteId);
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

  setUpFavouriteForm(favourite: IFavourite): void {
    this.favouriteForm = this.fb.group({
      'name': [favourite?.data?.attributes?.name ? favourite?.data?.attributes?.name : '', ''],
      'description': [favourite?.data?.attributes?.description ? favourite?.data?.attributes?.description : '', Validators.required],
      'district_id': [favourite?.data?.relationships ? favourite?.data?.relationships : '', Validators.required],
    });

    this.filteredDistricts = this.favouriteForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getFavouriteById(id: number | string) {
    this.isLoading = true;
    this._favouriteService.getFavouriteById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.favourite = res;
        this.setUpFavouriteForm(this.favourite);
        this.getAllDistricts('');
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  onSaveFavourite(form: FormGroup) {
    this.isLoading = true;

    let favouriteData = {
      'data': {
        'type': 'counties',
        'attributes': {
          'name': form.controls.name.value,
          'description': form.controls.description.value,
          'district_id': form.controls.district_id.value.id,
        }
      }
    }

    this._favouriteService.updateFavourite(this.favouriteId, favouriteData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The favourite record has been updated.',
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

  get favouriteName() {
    return this.favouriteForm.get('name');
  }

  get district() {
    return this.favouriteForm.get('district_id');
  }
}

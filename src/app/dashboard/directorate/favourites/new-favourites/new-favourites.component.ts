import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { DistrictService } from '../../district/_services/district.service';
import { FavouritesService } from '../_services/favourites.service';
import { IFavourite } from 'src/app/shared/interfaces/favourites/favourite';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-favourites',
  templateUrl: './new-favourites.component.html',
  styleUrls: ['./new-favourites.component.scss']
})
export class NewFavouritesComponent implements OnInit {

  favouritesForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  favourites$!: Observable<IFavourite[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
    private _favouriteService: FavouritesService,
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
        this.setUpFavouritesForm();
      },
      (error) => {

      }
    )
  }

  setUpFavouritesForm(): void {
    this.favouritesForm = this.fb.group({
      'description': [''],
      'name': ['', Validators.required],
      'district_id': ['', Validators.required],
    });

    this.filteredDistricts = this.favouritesForm.get('district_id')?.valueChanges
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

  onSaveFavourite(form: FormGroup) {
    this.isLoading = true;

    let favouriteData = {
      'data': {
        'type': 'favourites',
        'attributes': {
          'description': form.controls.description.value,
          'name': form.controls.name.value,
          'district_id': form.controls.district_id.value.id
        }
      }
    }

    this._favouriteService.addFavourite(favouriteData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The favourite record has been added.',
          'success'
        );
        this.favouritesForm.reset();
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

  get favouriteName() {
    return this.favouritesForm.get('name');
  }

  get district() {
    return this.favouritesForm.get('district_id');
  }

}

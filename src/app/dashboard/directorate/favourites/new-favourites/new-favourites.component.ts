import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-new-favourites',
  templateUrl: './new-favourites.component.html',
  styleUrls: ['./new-favourites.component.scss']
})
export class NewFavouritesComponent implements OnInit {

  favouritesForm!: FormGroup;

  districtList = [
    { 'id': 1, 'name': 'abim', },
    { 'id': 1, 'name': 'adjumani', },
    { 'id': 1, 'name': 'agago', },
    { 'id': 1, 'name': 'alebtong', },
    { 'id': 1, 'name': 'amolatar', },
    { 'id': 1, 'name': 'amudat', },
    { 'id': 1, 'name': 'amuria', },
    { 'id': 1, 'name': 'amuru', },
    { 'id': 1, 'name': 'apac', },
    { 'id': 1, 'name': 'arua', },
    { 'id': 1, 'name': 'budaka', },
    { 'id': 1, 'name': 'bududa', },
    { 'id': 1, 'name': 'bugiri', },
    { 'id': 1, 'name': 'bugweri', },
    { 'id': 1, 'name': 'buhweju', },
    { 'id': 1, 'name': 'buikwe', },
    { 'id': 1, 'name': 'bukedea', },
    { 'id': 1, 'name': 'bukomansimbi', },
    { 'id': 1, 'name': 'bukwa', },
    { 'id': 1, 'name': 'bulambuli', },
    { 'id': 1, 'name': 'buliisa', },
    { 'id': 1, 'name': 'bundibugyo', },
    { 'id': 1, 'name': 'bunyangabu', },
    { 'id': 1, 'name': 'bushenyi', },
    { 'id': 1, 'name': 'busia', },
    { 'id': 1, 'name': 'butaleja', },
    { 'id': 1, 'name': 'butambala', },
    { 'id': 1, 'name': 'butebo', },
    { 'id': 1, 'name': 'buvuma', },
    { 'id': 1, 'name': 'buyende', },
    { 'id': 1, 'name': 'dokolo', },
    { 'id': 1, 'name': 'gomba', },
    { 'id': 1, 'name': 'gulu', },
    { 'id': 1, 'name': 'hoima', },
    { 'id': 1, 'name': 'ibanda', },
    { 'id': 1, 'name': 'iganga', },
    { 'id': 1, 'name': 'isingiro', },
    { 'id': 1, 'name': 'jinja', },
    { 'id': 1, 'name': 'kaabong', },
    { 'id': 1, 'name': 'kabale', },
    { 'id': 1, 'name': 'kabarole', },
    { 'id': 1, 'name': 'kaberamaido', },
    { 'id': 1, 'name': 'kagadi', },
    { 'id': 1, 'name': 'kakumiro', },
    { 'id': 1, 'name': 'kalangala', },
    { 'id': 1, 'name': 'kaliro', },
    { 'id': 1, 'name': 'kalungu', },
    { 'id': 1, 'name': 'kampala', },
    { 'id': 1, 'name': 'kamuli', },
    { 'id': 1, 'name': 'kamwenge', },
    { 'id': 1, 'name': 'kanungu', },
    { 'id': 1, 'name': 'kapchorwa', },
    { 'id': 1, 'name': 'kapelebyong', },
    { 'id': 1, 'name': 'karenga', },
    { 'id': 1, 'name': 'kasanda', },
    { 'id': 1, 'name': 'kasese', },
    { 'id': 1, 'name': 'katakwi', },
    { 'id': 1, 'name': 'kayunga', },
    { 'id': 1, 'name': 'kazo', },
    { 'id': 1, 'name': 'kibaale', },
    { 'id': 1, 'name': 'kiboga', },
    { 'id': 1, 'name': 'kibuku', },
    { 'id': 1, 'name': 'kibuube', },
    { 'id': 1, 'name': 'kiruhura', },
    { 'id': 1, 'name': 'kiryandongo', },
    { 'id': 1, 'name': 'kisoro', },
    { 'id': 1, 'name': 'kitagwenda', },
    { 'id': 1, 'name': 'kitgum', },
    { 'id': 1, 'name': 'koboko', },
    { 'id': 1, 'name': 'kole', },
    { 'id': 1, 'name': 'kotido', },
    { 'id': 1, 'name': 'kumi', },
    { 'id': 1, 'name': 'kwania', },
    { 'id': 1, 'name': 'kween', },
    { 'id': 1, 'name': 'kyankwanzi', },
    { 'id': 1, 'name': 'kyegegwa', },
    { 'id': 1, 'name': 'kyenjojo', },
    { 'id': 1, 'name': 'kyotera', },
    { 'id': 1, 'name': 'lamwo', },
    { 'id': 1, 'name': 'lira', },
    { 'id': 1, 'name': 'lusot', },
    { 'id': 1, 'name': 'luuka', },
    { 'id': 1, 'name': 'luweero', },
    { 'id': 1, 'name': 'lwengo', },
    { 'id': 1, 'name': 'lyantonde', },
    { 'id': 1, 'name': 'madi-okollo', },
    { 'id': 1, 'name': 'manafwa', },
    { 'id': 1, 'name': 'maracha', },
    { 'id': 1, 'name': 'masaka', },
    { 'id': 1, 'name': 'masindi', },
    { 'id': 1, 'name': 'mayuge', },
    { 'id': 1, 'name': 'mbale', },
    { 'id': 1, 'name': 'mbarara', },
    { 'id': 1, 'name': 'mitooma', },
    { 'id': 1, 'name': 'mityana', },
    { 'id': 1, 'name': 'moroto', },
    { 'id': 1, 'name': 'moyo', },
    { 'id': 1, 'name': 'mpigi', },
    { 'id': 1, 'name': 'mubende', },
    { 'id': 1, 'name': 'mukono', },
    { 'id': 1, 'name': 'nabilatuk', },
    { 'id': 1, 'name': 'nakapiripirit', },
    { 'id': 1, 'name': 'nakaseke', },
    { 'id': 1, 'name': 'nakasongola', },
    { 'id': 1, 'name': 'namayingo', },
    { 'id': 1, 'name': 'namisindwa', },
    { 'id': 1, 'name': 'namutumba', },
    { 'id': 1, 'name': 'napak', },
    { 'id': 1, 'name': 'nebbi', },
    { 'id': 1, 'name': 'ngora', },
    { 'id': 1, 'name': 'ntoroko', },
    { 'id': 1, 'name': 'ntungamo', },
    { 'id': 1, 'name': 'nwoya', },
    { 'id': 1, 'name': 'obongi', },
    { 'id': 1, 'name': 'omoro', },
    { 'id': 1, 'name': 'otuke', },
    { 'id': 1, 'name': 'oyam', },
    { 'id': 1, 'name': 'pader', },
    { 'id': 1, 'name': 'pakwach', },
    { 'id': 1, 'name': 'pallisa', },
    { 'id': 1, 'name': 'rakai', },
    { 'id': 1, 'name': 'rubanda', },
    { 'id': 1, 'name': 'rubirizi', },
    { 'id': 1, 'name': 'rukiga', },
    { 'id': 1, 'name': 'rukungiri', },
    { 'id': 1, 'name': 'rwampara', },
    { 'id': 1, 'name': 'sembabule', },
    { 'id': 1, 'name': 'serere', },
    { 'id': 1, 'name': 'sheema', },
    { 'id': 1, 'name': 'sironko', },
    { 'id': 1, 'name': 'soroti', },
    { 'id': 1, 'name': 'tororo', },
    { 'id': 1, 'name': 'wakiso', },
    { 'id': 1, 'name': 'yumbe', },
    { 'id': 1, 'name': 'zombo', },

  ];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
  ) {
   }

  ngOnInit(): void {
    this.setUpFavouritesForm();
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
    let name = value.name || value;
    return this.districtList.filter(option => option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onSaveFavourite(form: FormGroup) {
    let favouritesDate = {
      'description': form.controls.description.value,
      'name': form.controls.name.value,
      'district_id': form.controls.district_id.value,

    }
    console.log('Form Values ', favouritesDate);
  }

  getDistrictDetails(districtDetails: string) {
    console.log('District Details ', districtDetails);
  }

  displayState(state: any) {
    return state ? state.name : '';
  }

  get favouriteName() {
    return this.favouritesForm.get('name');
  }

  get district() {
    return this.favouritesForm.get('district_id');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { DistrictService } from '../../district/_services/district.service';
import { ILeader } from 'src/app/shared/interfaces/leader/leader';
import { LeadershipService } from '../_services/leadership.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-leadership',
  templateUrl: './edit-leadership.component.html',
  styleUrls: ['./edit-leadership.component.scss']
})
export class EditLeadershipComponent implements OnInit {

  leaderForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';

  districtList!: any[];
  leader!: ILeader;
  leaderId!: number | string;

  filteredDistricts: any = '';

  routingSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _leaderService: LeadershipService,
    private _decryptService: DecryptService,
    private _districtService: DistrictService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.leaderId = this._decryptService.decrypt(params['id']);
    });

    this.getLeaderById(this.leaderId);
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

  setUpLeaderForm(leader: ILeader): void {
    this.leaderForm = this.fb.group({
      'position': [leader?.data?.attributes?.position ? leader?.data?.attributes?.position : '', ''],
      'contact_details': [leader?.data?.attributes?.contact_details ? leader?.data?.attributes?.contact_details : '', Validators.required],
      'description': [leader?.data?.attributes?.description ? leader?.data?.attributes?.description : '', Validators.required],
      'district_id': [leader?.data?.relationships ? leader?.data?.relationships : '', Validators.required],
    });

    this.filteredDistricts = this.leaderForm.get('district_id')?.valueChanges
      .pipe(
        startWith(null),
        map(state => state ? this.filterDistricts(state) : this.districtList.slice())
      );
  }

  private filterDistricts(value: any): any[] {
    let name = value.district_name || value;
    return this.districtList.filter(option => option.district_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getLeaderById(id: number | string) {
    this.isLoading = true;
    this._leaderService.getLeaderById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.leader = res;
        this.setUpLeaderForm(this.leader);
        this.getAllDistricts('');
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  onSaveLeader(form: FormGroup) {
    this.isLoading = true;

    let leaderData = {
      'data': {
        'type': 'leaders',
        'attributes': {
          'position': form.controls.position.value,
          'contact_details': form.controls.contact_details.value,
          'description': form.controls.description.value,
          'district_id': form.controls.district_id.value.id,
        }
      }
    }

    this._leaderService.updateLeader(this.leaderId, leaderData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Updated!',
          'The leader record has been updated.',
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

  get leaderPosition() {
    return this.leaderForm.get('position');
  }

  get district() {
    return this.leaderForm.get('district_id');
  }

}

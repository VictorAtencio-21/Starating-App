/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileModalPage } from '../profile-modal/profile-modal.page';
import { UserCrudService } from '../../services/user-crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUser: Object = {};

  constructor(
    private modalCtrl: ModalController,
    public auth: UserCrudService,
    private actRoute: ActivatedRoute
    ) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.auth.getUserProfile(id).subscribe((res: any) => {
        this.currentUser = res.msg;
      });
    }

    async presentModal() {
      const modal = await this.modalCtrl.create({
        component: ProfileModalPage,
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.5
      });
      await modal.present();
    }

  ngOnInit() {
  }

}

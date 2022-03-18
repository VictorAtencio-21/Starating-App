import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileModalPage } from '../profile-modal/profile-modal.page';
import { UserCrudService } from '../../services/user-crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public json: UserCrudService
    ) {
      this.json.getUserJson('http://localhost:2000/getUsers').subscribe((res: any) => {
        console.log(res);
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

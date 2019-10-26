import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage} from '@angular/fire/storage';
import 'firebase/firestore';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})
export class UploadPhotoPage implements OnInit {
PhotoUrl = '' as any;
  photourl = '' as any;
  btnText = 'CHOOSE PHOTO' as any;
    imagePath: any;
  constructor(private camera:Camera, public storage: AngularFireStorage, private router:Router) { }

  ngOnInit() {
  }

   toGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      targetWidth: 800,
      targetHeight: 800,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      // allowEdit: true,
     }).then((imageData) => {

       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz?&%$#@';
       const stringlength = 16;
       let randomstring = '';
       for (let i = 0; i < stringlength; i++) {
         const rnum = Math.floor(Math.random() * chars.length);
         randomstring += chars.substring(rnum, rnum + 1);
         this.imagePath = imageData;
         this.PhotoUrl = 'data:image/jpeg;base64,' + imageData;
         this.storage.ref('pictures/' + randomstring).putString(this.PhotoUrl, 'data_url');
         this.btnText = 'PHOTO CHOSEN';
}
});
}
next(){
  this.router.navigate(['/carinfo'])
}
   }

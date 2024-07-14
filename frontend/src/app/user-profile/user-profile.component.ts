import {  Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

// services
import { ProfileServicesService } from './../services/user-profile-serviecs/profile.services.service';

// interface
import { userProfileInterface } from './../data-type';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit{
  userProfileData: any | userProfileInterface[];
  userProfileUpdaterForm!: FormGroup;
  imgSources: any;
  uploaded: any;
  loadder:boolean | undefined;

  constructor(
    private userProfile: ProfileServicesService,
    private FormBuilder: FormBuilder,
    private toast: NgToastService,
    private cookie: CookieService,
    private route: Router
  ) {}
  ngOnInit(): void {
this.loadder = false
    this.readUserProfile(); // calling read data function on page load

    // creating form group
    this.userProfileUpdaterForm = this.FormBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      contect: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      photo: [null],
    });
  }

  // read logined user's data api call to service
  readUserProfile() {
    this.userProfile.readUserProfile().subscribe((result: any) => {
      if (result.photo !== undefined) {
        this.imgSources = `data:photo/png;base64,${btoa(
          String.fromCharCode(...new Uint8Array(result.photo.data.data))
        )}`;
      } else {
        this.imgSources =
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_RhLhMFQptcSkzBWhnq13UqR12y7mXuSVw&usqp=CAU';
      }
      this.userProfileData = result;
    });
    
  }

  // update logined user's data api call to service
  updateUserProfile() {
    const formData: FormData = new FormData();

    formData.append('name', this.userProfileUpdaterForm.value.name.trim());
    formData.append('email', this.userProfileUpdaterForm.value.email.trim());
    formData.append('contect', this.userProfileUpdaterForm.value.contect.trim());

    if (this.uploaded !== undefined) {
      formData.append('photo', this?.uploaded);
    }
    this.userProfile.updateUserProfile(formData).subscribe((result: any) => {
      // this.userProfileData = result;
      this.readUserProfile();
      if (result != null) {
        this.toast.success({
          summary: 'Profile Updated Successfully.',
          duration: 2000,
        });
      } else {
        this.toast.error({
          summary: 'Profile is not Updated.',
          duration: 2000,
        });
      }
    });
  }

  // delete logined user api call to service
  deleteUserProfile() {
    console.log('you have press delete button.');
    this.userProfile.deleteUserProfileApi().subscribe((result: any) => {
      // console.log(result);
      if (result != null) {
        this.cookie.delete('jwtToken');
        this.toast.warning({
          summary: 'Profile Deleted Successfully.',
          duration: 2000,
        });
        this.route.navigate(['']);
      } else {
        this.toast.error({ summary: 'Profile is not Deleted', duration: 2000 });
      }
    });
  }

  imgUploader(e: any) {
    this.uploaded = e.target.files[0];
  }

  // form validation function
  get user() {
    return this.userProfileUpdaterForm.get('name');
  }
  get email() {
    return this.userProfileUpdaterForm.get('email');
  }
  get contect() {
    return this.userProfileUpdaterForm.get('contect');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
// services
import { CardServicesService } from './../../services/card-services/card-services.service';

// components
import { cardInterface } from 'src/app/data-type';
import { log } from 'console';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent implements OnInit {
  // variables
  createCardFormData!: FormGroup;
  cardProfileData: any | cardInterface[];
  imgSources: any;
  uploaded: any;
  constructor(
    private toast: NgToastService,
    private cardServices: CardServicesService,
    private FormBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
  //  FormGroup for card details with validator 
    this.createCardFormData = this.FormBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      category: ['', [Validators.required,
        Validators.pattern('^[a-z]*$'),]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(200),
        ],
      ],
      logo: [null],
      description: ['',[
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(500),
      ],
    ],
    linkdinLink:[''],
    facebookLink:[''],
    instagramLink:[''],
    websiteLink:['']
    });
  }
  
  // create card function  
  createDataProfile() {

    // form data of the create card
    const formData: FormData = new FormData();
    formData.append('title', this.createCardFormData.value.title.trim());
    formData.append('email', this.createCardFormData.value.email.trim());
    formData.append('category', this.createCardFormData.value.category.trim().toLowerCase());
    formData.append('phoneNumber', this.createCardFormData.value.phoneNumber);
    formData.append('address', this.createCardFormData.value.address.trim());
    formData.append('description', this.createCardFormData.value.description.trim());
    formData.append('linkdinLink', this.createCardFormData.value.linkdinLink.trim());
    formData.append('facebookLink', this.createCardFormData.value.facebookLink.trim());
    formData.append('instagramLink', this.createCardFormData.value.instagramLink.trim());
    formData.append('websiteLink', this.createCardFormData.value.websiteLink.trim());

    if (this.uploaded !== undefined) {
      formData.append('logo', this?.uploaded);
    }
    // console.log("inserted",formData);
    
    this.cardServices.createUserCard(formData).subscribe(
      (result: any) => {
        // console.log("inside sub...");
        
        this.toast.success({
          summary: 'Card created Successfully..',
          duration: 5000,
        });
        this.router.navigate(['/dashboard/mycard']);
      },
      (err) => {
        this.toast.error({
          summary: 'Oops.. Something went wrong, Try again..',
          duration: 5000,
        });
      }
    );
  }
  
  imgUploader(e: any) {
    this.uploaded = e.target.files[0];
  }

  // function for reactive form function
  get title() {
    return this.createCardFormData.get('title');
  }
  get email() {
    return this.createCardFormData.get('email');
  }  
  get category() {
    return this.createCardFormData.get('category');
  }  
  get phoneNumber() {
    return this.createCardFormData.get('phoneNumber');
  }  
  get address() {
    return this.createCardFormData.get('address');
  }  
  get description() {
    return this.createCardFormData.get('description');
  }
}

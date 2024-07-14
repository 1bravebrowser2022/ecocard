import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardServicesService } from './../../services/card-services/card-services.service';
import { cardInterface } from 'src/app/data-type';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserAuthService } from './../../services/userAuth/user-auth.service';
import { Value } from 'sass';

@Component({
  selector: 'app-update-del-card',
  templateUrl: './update-del-card.component.html',
  styleUrls: ['./update-del-card.component.css'],
})
export class UpdateDelCardComponent implements OnInit {
  // variables
  updateCardFormData!: FormGroup;
  cardProfileData!: any;
  imgSources: any;
  uploaded: any;
  cid: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardServices: CardServicesService,
    private FormBuilder: FormBuilder,
    private toast: NgToastService,
    public acService: UserAuthService
  ) {}

  // function for read specific card
  readUserSpecificCardDetail(cid: any) {
    this.cardServices.readUsersSpecificCard(cid).subscribe((result: any) => {
      this.cardProfileData = result;
      console.log(this.cardProfileData);
    });
  }

  // update card details
  updateDataProfile() {
    // console.log(this.createCardFormData.value);
    const formData: FormData = new FormData();

    formData.append('title', this.updateCardFormData.value.title.trim());
    formData.append('email', this.updateCardFormData.value.email.trim());
    formData.append(
      'category',
      this.updateCardFormData.value.category.trim().toLowerCase()
    );
    formData.append('phoneNumber', this.updateCardFormData.value.phoneNumber);
    formData.append('address', this.updateCardFormData.value.address.trim());
    formData.append(
      'description',
      this.updateCardFormData.value.description.trim()
    );
    formData.append(
      'instagramLink',
      this.updateCardFormData.value.instagramLink.trim()
    );
    formData.append('facebookLink',this.updateCardFormData.value.facebookLink.trim());
    formData.append('linkdinLink',this.updateCardFormData.value.linkdinLink.trim());
    formData.append('websiteLink',this.updateCardFormData.value.websiteLink.trim());
    console.log(this.uploaded);

    if (this.uploaded !== undefined) {
      formData.append('logo', this?.uploaded);
    }
    console.log(formData);

    this.cardServices
      .updateCardServices(formData, this.cid)
      .subscribe((result: any) => {
        // this.userProfileData = result;
        console.log(result);
        if (result != null) {
          this.toast.success({
            summary: 'Card is Updated Successfully.',
            duration: 2000,
          });
          this.router.navigate(['/dashboard/mycard']);
        } else {
          this.toast.error({
            summary: 'Oops.. Something went wrong, Try again..',
            duration: 2000,
          });
        }
      });

    // this.readUserSpecificCardDetail(this.cid);
  }

  // image capture from form
  imgUploader(e: any) {
    this.uploaded = e.target.files[0];
  }

  // delete card
  deleteDataProfile() {
    this.cardServices.deleteCardServices(this.cid).subscribe((result: any) => {
      this.cardProfileData = result;
      console.log(this.cardProfileData);
      if (result != null) {
        this.toast.success({
          summary: 'Card is Deleted Successfully.',
          duration: 2000,
        });
        this.router.navigate(['/dashboard/mycard']);
      } else {
        this.toast.error({
          summary: 'Oops.. Something went wrong, Try again..',
          duration: 2000,
        });
      }
    });
  }

  // reactive form validation...
  ngOnInit() {
    this.updateCardFormData = this.FormBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      category: ['', [Validators.required]],
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
          Validators.maxLength(60),
        ],
      ],
      logo: [null],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(60),
        ],
      ],
      instagramLink: [''],
      facebookLink:[''],
      linkdinLink:[''],
      websiteLink:['']
    });
    this.cid = this.route.snapshot.paramMap.get('cid');
    this.readUserSpecificCardDetail(this.cid);
  }

  // function for reactive validation
  get title() {
    return this.updateCardFormData.get('title');
  }
  get email() {
    return this.updateCardFormData.get('email');
  }
  get category() {
    return this.updateCardFormData.get('category');
  }
  get phoneNumber() {
    return this.updateCardFormData.get('phoneNumber');
  }
  get address() {
    return this.updateCardFormData.get('address');
  }
  get description() {
    return this.updateCardFormData.get('description');
  }
}

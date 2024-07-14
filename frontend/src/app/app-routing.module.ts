import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// compontents
import { CreateCardComponent } from './card/create-card/create-card.component';
import { LinkshareCardComponent } from './card/linkshare-card/linkshare-card.component';
import { ReceivedCardsComponent } from './card/received-cards/received-cards.component';
import { SerchCardComponent } from './card/serch-card/serch-card.component';
import { ShareCardComponent } from './card/share-card/share-card.component';
import { ShowcardComponent } from './card/showcard/showcard.component';
import { UpdateDelCardComponent } from './card/update-del-card/update-del-card.component';
import { YourcardsComponent } from './card/yourcards/yourcards.component';
import { GeofenceComponent } from './Geofence/geofence.component';
import { ListusersComponent } from './Geofence/listusers/listusers.component';
import { LoaderAnimationComponent } from './loader-animation/loader-animation.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAuthComponent } from './Authentication/user-auth/user-auth.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Authentication/reset-password/reset-password.component';
import { AuthGuard } from './services/userAuth/auth.guard';

//Routing...
const routes: Routes = [
  // main routing..
  {path:'',component:LandingPageComponent},
  {path:'home',component:HomePageComponent,canActivate :[AuthGuard]},
  {path:'auth',component:UserAuthComponent},
  {path:'forgotPassword', component:ForgotPasswordComponent},
  {path:'resetPassword', component:ResetPasswordComponent,canActivate :[AuthGuard]},
  {path: 'cardshare-link/:cid', component:LinkshareCardComponent,canActivate :[AuthGuard]},
  
  //Routing for dashboard....
  { 
    path:'dashboard',component:NavComponent,canActivate :[AuthGuard],
    children:[
      { path:'user-profile', component:UserProfileComponent},
      { path:'mycard', component:YourcardsComponent },
      { path:'showcard', component:ShowcardComponent },
      { path:'searchcard', component:SerchCardComponent },
      { path:'createcard', component:CreateCardComponent },
      { path:'receivedcard', component:ReceivedCardsComponent },
      { path:'updelcard/:cid', component:UpdateDelCardComponent },
      { path:'sharecard', component:ShareCardComponent },
      { path:'geofence/:cid', component:GeofenceComponent},
      { path:'geofence', component:GeofenceComponent},
      { path:'listusers', component:ListusersComponent },
      { path: 'loader-animation', component:LoaderAnimationComponent},
      // { path: '**',component:PagenotfoundComponent}
    ]
  },
  // { path: '**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

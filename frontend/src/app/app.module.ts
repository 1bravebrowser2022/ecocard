import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// thired -party modules
import { QRCodeModule } from 'angularx-qrcode';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';

import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgToastModule } from 'ng-angular-popup';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { YourcardsComponent } from './card/yourcards/yourcards.component';
import { ShowcardComponent } from './card/showcard/showcard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SerchCardComponent } from './card/serch-card/serch-card.component';
import { ShareCardComponent } from './card/share-card/share-card.component';
import { CreateCardComponent } from './card/create-card/create-card.component';
import { UpdateDelCardComponent } from './card/update-del-card/update-del-card.component';
import { ReceivedCardsComponent } from './card/received-cards/received-cards.component';
import { GeofenceComponent } from './Geofence/geofence.component';
import { ListusersComponent } from './Geofence/listusers/listusers.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderAnimationComponent } from './loader-animation/loader-animation.component';
import { ForgotPasswordComponent } from "./Authentication/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from './Authentication/reset-password/reset-password.component';
import { UserAuthComponent } from './Authentication/user-auth/user-auth.component';

// import { QRCodeModule } from 'angularx-qrcode';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LinkshareCardComponent } from './linkshare-card/linkshare-card/linkshare-card.component';
import { TokenInterceptorInterceptor } from "./interceptor/token-interceptor.interceptor";
import { NgxUiLoaderModule, NgxUiLoaderHttpModule} from 'ngx-ui-loader';
import { CookieService } from 'ngx-cookie-service';

// sercives
import { CardServicesService } from "./services/card-services/card-services.service";
import { RecivedCardsServicesService } from "./services/received-cards-services/recived-cards-services.service";
import { SearchCardsServicesService } from "./services/search-cards-services/search-cards-services.service";
import { ProfileServicesService } from "./services/user-profile-serviecs/profile.services.service";
// import { LoaderAnimationComponent } from './loader-animation/loader-animation.component';
// import { LinkshareCardComponent } from './card/linkshare-card/linkshare-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ViewReceivedCardComponent } from './card/view-received-card/view-received-card.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    NavComponent,
    UserProfileComponent,
    YourcardsComponent,
    ShowcardComponent,
    SerchCardComponent,
    ShareCardComponent,
    CreateCardComponent,
    UpdateDelCardComponent,
    ReceivedCardsComponent,
    GeofenceComponent,
    ListusersComponent,
    LoaderAnimationComponent,
    PagenotfoundComponent,
    LinkshareCardComponent,
    HomePageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,  
    UserAuthComponent, ViewReceivedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatExpansionModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
    NgToastModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),

    HttpClientModule,
    FormsModule
  ],
  providers: [CardServicesService,RecivedCardsServicesService,SearchCardsServicesService,ProfileServicesService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi: true
  },CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

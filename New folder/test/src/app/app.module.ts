import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { InterComponent } from './inter/inter.component';
import { OthersComponent } from './others/others.component';
import { CmpengComponent } from './cmpeng/cmpeng.component';
import { CeengComponent } from './ceeng/ceeng.component';
import { BtechComponent } from './btech/btech.component';
import { BtcseComponent } from './btcse/btcse.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SingupComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WelcomeComponent,
    DiplomaComponent,
    InterComponent,
    OthersComponent,
    CmpengComponent,
    CeengComponent,
    BtechComponent,
    BtcseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

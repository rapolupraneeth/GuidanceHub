import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { InterComponent } from './inter/inter.component';
import { OthersComponent } from './others/others.component';
import { CmpengComponent } from './cmpeng/cmpeng.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CeengComponent } from './ceeng/ceeng.component';
import { BtechComponent } from './btech/btech.component';
import { BtcseComponent } from './btcse/btcse.component';


const routes: Routes = [
  {path:"", redirectTo:"welcome",pathMatch: 'full' },
  {path:"signin", component:SigninComponent},
  {path:"signup",component:SingupComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"contact",component:ContactComponent},
  {path:"diploma",component:DiplomaComponent},
  {path:"inter",component:InterComponent},
  {path:"others",component:OthersComponent},
  {path:"cmpeng",component:CmpengComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"ceeng",component:CeengComponent},
  {path:"btech",component:BtechComponent},
  {path:"btcse",component:BtcseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

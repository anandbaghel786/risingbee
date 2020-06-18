import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { RisingBeanComponent } from './components/rising-bean/rising-bean.component';
import { DivComponent } from './components/div/div.component';


const routes: Routes = [
  { path: '', redirectTo: '/rising-bean', pathMatch: "full" },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rising-bean', component: RisingBeanComponent },
  { path: 'divcomp', component: DivComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

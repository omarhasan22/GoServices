import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { careerS } from './careerS/careerS.component';
import { AuthGuard } from '@app/_helpers';
import { ProfileByUserComponent } from './profile-by-user/profile-by-user.component';


//const profileModule = () => import('../profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'Providers/:career', component:careerS},
  {path:'Profile/:_id', component:ProfileByUserComponent},
  //{ path: 'Profile/:account', loadChildren: profileModule, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

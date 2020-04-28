import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import * as fromLogin from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent,
    RegisterPageComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducers, {
      metaReducers: fromLogin.metaReducers,
    }),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class LoginModule {}

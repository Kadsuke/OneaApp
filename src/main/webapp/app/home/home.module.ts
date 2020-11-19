import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidotV1SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SidotV1SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class SidotV1HomeModule {}

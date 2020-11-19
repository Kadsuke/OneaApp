import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SidotV1SharedModule } from 'app/shared/shared.module';
import { SidotV1CoreModule } from 'app/core/core.module';
import { SidotV1AppRoutingModule } from './app-routing.module';
import { SidotV1HomeModule } from './home/home.module';
import { SidotV1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SidotV1SharedModule,
    SidotV1CoreModule,
    SidotV1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SidotV1EntityModule,
    SidotV1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class SidotV1AppModule {}

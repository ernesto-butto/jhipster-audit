import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AuditSharedModule } from 'app/shared/shared.module';
import { AuditCoreModule } from 'app/core/core.module';
import { AuditAppRoutingModule } from './app-routing.module';
import { AuditHomeModule } from './home/home.module';
import { AuditEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AuditSharedModule,
    AuditCoreModule,
    AuditHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AuditEntityModule,
    AuditAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class AuditAppModule {}

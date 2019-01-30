import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from '../app/_container/header/header.component';
import { FooterComponent } from '../app/_container/footer/footer.component';
import { categoryComponent } from '../app/_container/category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { WorkComponent } from '../app/pages/work/work.component';
import { PageTest } from '../app/pages/page_test/page_test.component';
import { PurchasingComponent } from '../app/pages/purchasing/purchasing.component';
import { DetailComponent } from '../app/pages/detail/detail.component';
import { detailBarang } from '../app/pages/detail-barang/detail-barang.component';
import { pageservicesComponent } from '../app/pages/page_services/page_services.component';
import { ShopComponent } from '../app/pages/shop/shop.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { appService } from './services/app.service';

import { NgxGalleryModule } from 'ngx-gallery';

import { FormWizardModule } from 'angular2-wizard';
import { ArchwizardModule } from 'angular-archwizard';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DataTablesModule } from 'angular-datatables';

import { addbarangComponent } from '../app/pages/page_services/add-barang/add-barang.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    categoryComponent,
    FooterComponent,
    HomeComponent,
    WorkComponent,
    PageTest,
    PurchasingComponent,
    DetailComponent,
    pageservicesComponent,
    ShopComponent,
    detailBarang,
    addbarangComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxGalleryModule,
    HttpClientModule,
    FormWizardModule,
    ArchwizardModule,
    NgxPaginationModule,
    ChartsModule,
    DataTablesModule
   
  ],
  providers: [{
                provide: LocationStrategy,
                useClass: HashLocationStrategy
              },
                appService],

  bootstrap: [AppComponent]
})
export class AppModule { }

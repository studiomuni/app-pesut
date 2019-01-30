import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { WorkComponent } from '../app/pages/work/work.component';
import { PageTest } from '../app/pages/page_test/page_test.component';
import { DetailComponent } from '../app/pages/detail/detail.component';
import { PurchasingComponent } from '../app/pages/purchasing/purchasing.component';
import { pageservicesComponent } from '../app/pages/page_services/page_services.component';
import { ShopComponent } from '../app/pages/shop/shop.component';
import { detailBarang } from '../app/pages/detail-barang/detail-barang.component';

import { addbarangComponent } from '../app/pages/page_services/add-barang/add-barang.component';





const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'work', 
    component: WorkComponent 
  },
  { 
    path: 'test', 
    component: PageTest 
  },
  { 
    path: 'detail/:id', 
    component: DetailComponent 
  },
  { 
    path: 'purchasing/:id', 
    component: PurchasingComponent 
  },
  { 
    path: 'service', 
    component: pageservicesComponent 
  },
  { 
    path: 'shop', 
    component: ShopComponent 
  },
  { 
    path: 'detail-barang/:id', 
    component: detailBarang 
  },
  { 
    path: 'service/addbarang', 
    component: addbarangComponent 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';

import { ProductDetailComponent } from './product-detail-component';

import { ConvertToSpacesPipe } from '../shared/convert-spaces-pipe';

import { RouterModule } from '@angular/router';

import { ProductDetailGuard } from './product-detail-guard';

import { SharedModule } from '../shared/share-module';



@NgModule({

  declarations: [

    ProductListComponent,

    ProductDetailComponent,

    ConvertToSpacesPipe,

  ],

  imports: [

    RouterModule.forChild([

      { path: 'products', component: ProductListComponent },

      {

        path: 'products/:id',

        canActivate: [ProductDetailGuard],

        component: ProductDetailComponent

      }

    ]),

    SharedModule

  ]

})

export class ProductModule { }
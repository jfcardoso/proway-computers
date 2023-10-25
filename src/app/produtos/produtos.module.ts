import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutosComponent,  
    ProdutoDetalheComponent   
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }

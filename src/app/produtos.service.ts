import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // carregando a lista de produto
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getProductById(produtoID: number){
    return this.produtos.find(produto => produto.id == produtoID);
  }
}

import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() { }

  recuperarCarrinho(){
   this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoDoCarrinho(produtoID: number){
    this.itens = this.itens.filter(item => item.id !== produtoID);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    console.log('entrei em limparCarrinho')
    console.log('local Storage antes do comando clear')
    console.log(localStorage)
    console.log('itens antes do comando para limpar o vetor')
    console.log(this.itens)
    this.itens = [];
    console.log('itens depois do comando para limpar o vetor')
    console.log(this.itens)
    localStorage.clear;
    console.log('local Storage depois do comando clear')
    console.log(localStorage)
  }
}

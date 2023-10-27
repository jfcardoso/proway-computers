import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { NotificacoesService } from '../notificacoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  itensDoCarrinho: IProdutoCarrinho[] = [];
  totalCarrinho = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private notificaoService: NotificacoesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.itensDoCarrinho = this.carrinhoService.recuperarCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    this.totalCarrinho = this.itensDoCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  finalizarCompra(){
    this.notificaoService.notificar("Parabéns! Compra realizada com Sucesso.");  
    this.carrinhoService.limparCarrinho();       
    this.router.navigate(["produtos"]);
  }

  removerProdutoCarrinho(produtoID: number){
    this.itensDoCarrinho = this.itensDoCarrinho.filter(item => item.id !== produtoID);
    this.carrinhoService.removerProdutoDoCarrinho(produtoID);
    this.calcularTotal();
  }
}

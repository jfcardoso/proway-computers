import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacoesService } from 'src/app/notificacoes.service';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacoesService: NotificacoesService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoID = Number(routeParams.get("id"));
    this.produto = this.produtosService.getProductById(produtoID)    
  }

  addCard() {
    this.notificacoesService.notificar("Produto adicionado ao carrinho.")
  }

}

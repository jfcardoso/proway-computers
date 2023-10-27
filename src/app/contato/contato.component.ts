import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacoesService } from '../notificacoes.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.formBuilder.group({
    nome: ["", [Validators.minLength(4), Validators.required]],
    assunto: ["", [Validators.minLength(4), Validators.required]],
    telefone: ["", [Validators.minLength(11), Validators.required]],
    email: ["", [Validators.email, Validators.required]],
    mensagem: ["", [Validators.minLength(20), Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private msgEnviarForm: NotificacoesService
  ){}

  ngOnInit(): void {    
  }

  enviarFormulario(){
    this.msgEnviarForm.notificar("Mensagem enviada com sucesso!");
    this.formContato.reset();
  }

}

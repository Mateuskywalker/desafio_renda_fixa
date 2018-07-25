import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  public usuarios: any[] = [];
  public colunas: string[] = ['nome', 'email', 'telefone'];

  formulario: FormGroup;

  constructor(private formService: FormService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: this.fb.control('', [Validators.required, Validators.email]),
      email: this.fb.control('', [Validators.required]),
      telefone: this.fb.control('', [Validators.required]),
    });

    this.formService.get_records().subscribe(data => {
     for (let i = 0; i < data['result'].length; i++) {
        this.usuarios.push(data['result'][i]);
     }
    });
  }

  private chama_usuarios(): void {
    this.usuarios = [];
     this.formService.get_records().subscribe(data => {
     for (let i = 0; i < data['result'].length; i++) {
        this.usuarios.push(data['result'][i]);
     }
    });
  }

  cadastra() {
    if (this.formulario.value.nome !== '' && this.formulario.value.email !== '') {
      this.formService.insert_record(this.formulario.value.nome,
        this.formulario.value.email,
        this.formulario.value.telefone).subscribe(user => console.log(user));
    }

    this.formulario.controls['nome'].setValue("");
    this.formulario.controls['email'].setValue("");
    this.formulario.controls['telefone'].setValue("");

    setTimeout(() => {
      this.chama_usuarios();
    }, 100);
  }
}

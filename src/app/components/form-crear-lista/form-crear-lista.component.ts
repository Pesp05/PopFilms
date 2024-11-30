import { Component } from '@angular/core';
import { CrudListasService } from '../../services/crud-listas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-crear-lista',
  templateUrl: './form-crear-lista.component.html',
  styleUrl: './form-crear-lista.component.css'
})
export class FormCrearListaComponent {


  enviado: boolean = false;
  mostrarErrores: boolean = false;
  nombreLista: string = '';
  descripcionLista: string = '';

constructor(private listaServices: CrudListasService, private router: Router){}


  todosCamposCompletos(): boolean {
    return this.nombreLista !== '' && this.descripcionLista !== ''
  }
  validarFormulario() {
    console.log(this.nombreLista, this.descripcionLista);
    if(this.todosCamposCompletos()) {
      this.mostrarErrores = false;
      this.enviado = true;
      this.listaServices.createList(this.nombreLista, this.descripcionLista, 'es').subscribe();
      setTimeout(() => {
        this.router.navigate(['/createdLists']);
      }, 300);
    } else {
      this.mostrarErrores = true;
      this.enviado = false;
    }
  }
}

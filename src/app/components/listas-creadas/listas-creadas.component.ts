import { Component, OnInit } from '@angular/core';
import { CrudListasService } from '../../services/crud-listas.service';
import { ListaCreada } from '../../models/listas-creadas.interface';

@Component({
  selector: 'app-listas-creadas',
  templateUrl: './listas-creadas.component.html',
  styleUrl: './listas-creadas.component.css'
})
export class ListasCreadasComponent implements OnInit {


  listasCreadas: ListaCreada[] = [];
  constructor(private listaService: CrudListasService) {}

  ngOnInit() {
    this.cargarListas();
  }
  cargarListas() {
    this.listaService.getListasCreadas().subscribe((response) => {
      this.listasCreadas = response.results;
    });
  }
  eliminarLista(id: number): void {
    this.listaService.deleteList(id).subscribe();
    this.cargarListas();
  }
}

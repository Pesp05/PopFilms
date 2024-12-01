import { Component } from '@angular/core';
import { Genre } from '../../../models/genre-list-response.interface';
import { FiltroSeriesService } from '../../../services/filtro-series.service';

@Component({
  selector: 'app-filtro-serie',
  templateUrl: './filtro-serie.component.html',
  styleUrl: './filtro-serie.component.css'
})
export class FiltroSerieComponent {
  languageFilter: string = '';
  sortBy: string = '';
  fechaEstrenoMin: string = '';
  fechaEstrenoMax: string = '';
  rateMin: string = '';
  rateMax: string = '';
  listaGeneros: Genre[] = [];
  
  listaGenerosSeleccionados: Genre[] = [];
  constructor(private filtroSerieService: FiltroSeriesService) { }

  sendFilters() {
    window.location.href = `http://localhost:4200/series?language=${this.languageFilter}&sortBy=${this.sortBy}&genres=${this.listaGenerosSeleccionados.map(g => g.name).join(',')}&releaseDateMin=${this.fechaEstrenoMin}&releaseDateMax=${this.fechaEstrenoMax}&rateMin=${this.rateMin}&rateMax=${this.rateMax}`;
  }

  ngOnInit() {
    this.filtroSerieService.getGenres().subscribe((response) => {
      this.listaGeneros = response.genres;
    });
  }

  toggleSelection(genero: Genre) {
    const index = this.listaGenerosSeleccionados.findIndex(g => g.id === genero.id);
    if (index === -1) {
      this.listaGenerosSeleccionados.push(genero);
    } else {
      this.listaGenerosSeleccionados.splice(index, 1);
    }
  }

  isSelected(genero: Genre): boolean {
    return this.listaGenerosSeleccionados.some(g => g.id === genero.id);
  }

}

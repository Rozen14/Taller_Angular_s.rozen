import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie';
import { SerieService } from '../../service/serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie-list',
  imports: [CommonModule],
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
  standalone: true
})

export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  selectedSerie: any;
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons = this.calculateAverageSeasons();
    });
  }

  selectSerie(serie: any): void {
    console.log('Serie seleccionada: ', serie);
    this.selectedSerie = serie;
  }
  
  private calculateAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }  
}
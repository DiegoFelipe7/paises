import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../service/pais.service';
@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent {
  termino: String = '';
  estado: boolean = false;
  pais: Country[] = [];
  constructor(private paisService: PaisService) {}
  buscar() {
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.pais = paises;
      },
      (err) => {
        this.estado = true;
        this.pais = [];
        setTimeout(() => {
          this.estado = false;
        }, 3000);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { Anuncio } from './anuncio.model';


@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  //TODO - Implementar o uso do local storage.

  anuncios: Anuncio[] = [];

  create(anuncio: Anuncio) {
    const itemIndex = this.anuncios.length;
    anuncio.id = this.getnextId();
    console.log(anuncio);
    this.anuncios[itemIndex] = anuncio;
  }

  delete(anuncio: Anuncio) {
    this.anuncios.splice(this.anuncios.indexOf(anuncio), 1);
  }

  update(anuncio: Anuncio) {
    const itemIndex = this.anuncios.findIndex(item => item.id === anuncio.id);
    console.log(itemIndex);
    this.anuncios[itemIndex] = anuncio;
  }

  getall(): Anuncio[] {
    console.log('anuncioservice:getall');
    console.log(this.anuncios);
    return this.anuncios;
  }

  reorderAnuncios(anuncio: Anuncio) {
    console.log('Zur Info:', anuncio);
    this.anuncios = this.anuncios
      .map(uc => uc.id === anuncio.id ? anuncio : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.anuncios.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.anuncios[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.anuncios.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;

  }

  gerarRelatorio(filtro: any = {}): Anuncio[] {
    this.anuncios.push({
      id: 1,
      nome: "Petshop",
      cliente: "João",
      inicio: new Date("2020/05/23"),
      termino: new Date("2020/05/24"),
      investimento: 20
    },
    
    {
      id: 2,
      nome: "Taberna",
      cliente: "José",
      inicio: new Date("2020/05/23"),
      termino: new Date("2020/05/27"),
      investimento: 100
    },

    {
      id: 3,
      nome: "Sorveteria",
      cliente: "Pedro",
      inicio: new Date("2020/06/21"),
      termino: new Date("2020/06/30"),
      investimento: 200
    },

    {
      id: 4,
      nome: "Barbearia",
      cliente: "Paulo",
      inicio: new Date(),
      termino: new Date(),
      investimento: 40
    },

    {
      id: 5,
      nome: "Papelaria",
      cliente: "Paulo",
      inicio: new Date(),
      termino: new Date(),
      investimento: 50
    }


    );

    if (filtro.inicio && filtro.termino && filtro.cliente) {
      return this.anuncios.filter((anuncio) => {
        return anuncio.cliente == filtro.cliente && anuncio.inicio >= filtro.inicio && anuncio.termino <= filtro.termino;
      });
    }
    
    else if (filtro.inicio && filtro.termino && !filtro.cliente) {
      return this.anuncios.filter((anuncio) => {
        return anuncio.inicio >= filtro.inicio && anuncio.termino <= filtro.termino;
      });
    }
  
    else if (!filtro.inicio && !filtro.termino && filtro.cliente) {
      return this.anuncios.filter((anuncio) => {
        return anuncio.cliente == filtro.cliente;
      });
    }

    return this.anuncios;
  }
}

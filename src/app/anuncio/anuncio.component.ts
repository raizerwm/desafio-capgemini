import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../share/anuncio.model';
import { AnuncioService } from '../share/anuncio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css'],
})

export class AnuncioComponent implements OnInit {

  anuncios: Anuncio[]; // Array<string>
  usercont: Anuncio;

  constructor(private ucs: AnuncioService, private router: Router) {
  }

  editAnuncio(anuncio: Anuncio) {
    console.log(anuncio);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', anuncio.id.toString());
    this.router.navigate(['edit']);
    // this.ucs.update(anuncio);
  }

  deleteAnuncio(anuncio: Anuncio) {
    console.log(anuncio);
    this.ucs.delete(anuncio);
  }

  ngOnInit() {
    console.log('anuncio:init');
    this.anuncios = this.ucs.gerarRelatorio();
    console.log(this.anuncios);
  }
}

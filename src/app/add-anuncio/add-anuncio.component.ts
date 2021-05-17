import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Anuncio } from '../share/anuncio.model';
import { AnuncioService } from '../share/anuncio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-anuncio',
  templateUrl: './add-anuncio.component.html',
  styleUrls: ['./add-anuncio.component.css']
})

export class AddAnuncioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: AnuncioService) { }
  addForm: FormGroup;
  @Output()
  createAnuncio = new EventEmitter<Anuncio>();

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      cliente: ['', Validators.required],
      inicio: ['', Validators.required],
      termino: ['', Validators.required],
      investimento: ['', Validators.required]
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control && control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.userService.create(this.addForm.value);

    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Anuncio } from '../share/anuncio.model';
import { AnuncioService } from '../share/anuncio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-anuncio',
  templateUrl: './edit-anuncio.component.html',
  styleUrls: ['./edit-anuncio.component.css']
})
export class EditAnuncioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: AnuncioService) { }
  addForm: FormGroup;
  anuncio: Anuncio;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      cliente: ['', Validators.required],
      inicio: ['', Validators.required],
      termino: ['', Validators.required],
      investimento: ['', Validators.required]
    });
    const data = this.userService.getUserById(+userId);
    this.addForm.setValue(data);
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.userService.update(this.addForm.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}

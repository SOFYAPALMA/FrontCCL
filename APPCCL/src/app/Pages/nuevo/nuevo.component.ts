import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { Router } from '@angular/router';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';           
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';  
import { NuuevoService } from '../../Services/nuevo.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
  standalone: true,
  imports: [ 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule 
  ],
})

export class NuevoComponent implements OnInit {
  subscription: Subscription = new Subscription();
  authForm!: UntypedFormGroup;
 
  submitted = false;
  loading = false;
  error = '';
  hide = true;  


  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private nuevoService: NuuevoService
  ) {}

  ngOnInit() {

    this.authForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.email]],
      cantidad: ['', Validators.required], 
    });
  }


  get f() { return this.authForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';

   
    if (this.authForm.invalid) {
      this.error = 'Error en la creacion de nuevo producto';
      this.loading = false;
      return;
    } else {  
      // this.nuevoService.nuevoProducto(this.authForm.value).subscribe({
      //   next: (response: any) => {
      //     console.log('Login exitoso', response);
      //     localStorage.setItem('currentUser', JSON.stringify(response));
      //     this.router.navigate(['/inicio']);
      //   },
      //   error: () => {
      //     this.error = 'Usuario y/o contraseña incorrectos';
      //     this.loading = false;
      //   }
      // });   
    }
  }

  Guardar() {
    console.log("Guardar");
    this.router.navigate(['/inicio']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ComponentsService } from "../../../app/components/components.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-newsupervisor',
  templateUrl: './newsupervisor.component.html',
  styleUrls: ['./newsupervisor.component.scss']
})
export class NewsupervisorComponent implements OnInit {

  form: FormGroup;
  constructor(
     private readonly formBuilder: FormBuilder,
     private readonly componentsService: ComponentsService
    ) { 
      this.form = this.formBuilder.group({
        Nombre: '',
        Correo: '',
        Password:''
      })
    }


  ngOnInit(): void {
  }

  crearsuper() {
    if (this.form.valid) {
        const Nombre =this.form.get('Nombre')?.value
        const Correo =this.form.get('Correo')?.value
        const Password =this.form.get('Password')?.value       
        const param={
          name:Nombre,
          email:Correo,
          password:Password
        };
        this.componentsService.crearSupervisor(param).subscribe((response) => {
          alert("creado con exito")
      console.log(response);     
    })}
    
}

}

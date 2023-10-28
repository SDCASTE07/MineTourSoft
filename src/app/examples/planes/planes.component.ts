import { Component, OnInit } from '@angular/core';
import { ComponentsService } from "app/components/components.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  form: FormGroup;
  constructor(
     private readonly formBuilder: FormBuilder,
     private readonly componentsService: ComponentsService
    ) { 
      this.form = this.formBuilder.group({
        plan: '',
        precio: '',
      })
    }

  ngOnInit(): void {
  } 

  crearplan() {
    console.log("entro")
    if (this.form.valid) {
        const plan =this.form.get('plan').value;
        const precio =this.form.get('precio').value  
                  
        const param={
          categoria:plan,
          precio:precio
        };
        this.componentsService.crearplan(param).subscribe((response) => {
      console.log(response);     
    },(err)=>{
      alert("no se pudo crear")
  })}
    
}

}

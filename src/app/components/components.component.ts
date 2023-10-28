import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {ComponentsService} from "app/components/components.service"
import { param } from 'jquery';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    form: FormGroup;
    precios={};
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( 
        private renderer : Renderer2,
        private readonly formBuilder: FormBuilder,
        private readonly componentsService : ComponentsService
        ) {
            this.form = this.formBuilder.group({
                Nombre: '',
                Apellido: '',
                Cedula: '',
                Email: '',
                Telefono: '',
                visitantes: null,
                reserva: ''
              });
        }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {     
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
        this.listarPlanes()
    }

    guardarReserva(){             
        if (this.form.valid) {
            // Obtener los valores del formulario
            const nombre = this.form.get('Nombre').value;
            const apellido = this.form.get('Apellido').value;
            const cedula = this.form.get('Cedula').value;
            const email = this.form.get('Email').value;
            const telefono = this.form.get('Telefono').value;
            const visitantes = this.form.get('visitantes').value;
            const reserva = this.form.get('reserva').value;
      
            // Crear el objeto "body" con los datos
            const body = {
              nombre: nombre,
              apellido: apellido,
              cedula: cedula,
              email: email,
              telefono: telefono,
              numeroVisitantes: visitantes,
              fechaReserva: reserva
            };
        this.componentsService.gurdarReserva(body).subscribe((rest)=>{
            console.log(rest)
        },(err)=>{
            console.log(err)
        })
     }
   }

   listarPlanes(){
    this.componentsService.listarPlanes().subscribe((rest)=>{
        console.log(rest.response);
        this.precios=rest.response;
    })
   }

}

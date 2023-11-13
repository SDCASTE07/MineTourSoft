import { Component, OnInit } from '@angular/core';
import { ComponentsService } from "../../../app/components/components.service"

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  reservas: any = {};
  constructor(
    private readonly componentsService: ComponentsService
  ) { }

  ngOnInit(): void {
    this.ListarReserva()
  }


  ListarReserva() {
    this.componentsService.listar().subscribe((rest) => {     
      this.reservas =rest.response
    })
  }

}


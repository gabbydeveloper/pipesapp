import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Gabby';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Santiago';
    this.gender = 'male';
  }

  //i18n Plural
  public clientes: string[] = ['María', 'Pedro', 'Fernando', 'Melisa', 'Gabby', 'Santiago'];
  public clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clientes.shift();
  }


}

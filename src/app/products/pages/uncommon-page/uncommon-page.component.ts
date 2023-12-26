import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //Select Pipe
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

  //Plural Pipe
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

  //KeyValue Pipe
  public person = {
    name: 'Gabby',
    age: 45,
    address: 'Quito, Ecuador'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );


}

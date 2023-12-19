import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18h Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // I18nPluralPipe
  public clients: string[] = [
    'Mario',
    'pedro',
    'fernando',
    'melissa',
    'eduadro',
    'natalia',
  ];
  public clientsMap = {
    '=0': 'No hay clientes esperando.',
    '=1': 'Hay un cliente esperando.',
    '=2': 'Hay dos clientes esperando.',
    other: 'Hay # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValuePipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  //AsyncPipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}

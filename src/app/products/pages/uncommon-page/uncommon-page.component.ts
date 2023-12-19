import { Component } from '@angular/core';

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
    'other': 'Hay # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }
}

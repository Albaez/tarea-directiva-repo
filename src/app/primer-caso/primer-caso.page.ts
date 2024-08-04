import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'primer-caso',
  templateUrl: './primer-caso.page.html',
  styleUrls: ['./primer-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonItem, CommonModule, FormsModule]
})
export class PrimerCasoPage implements OnInit {

  contador = 0;

  incrementarContador() {
    this.contador++;
  }

  constructor() { }

  ngOnInit() {
  }

}

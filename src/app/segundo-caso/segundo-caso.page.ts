import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.page.html',
  styleUrls: ['./segundo-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, CommonModule, FormsModule]
})
export class SegundoCasoPage implements OnInit {
  
  animales: string[] = ['Guacamaya', 'Perro', 'Tortuga', 'Jirafa', 'Gato'];
  constructor() { 

    
  }

  ngOnInit() {
  }

}

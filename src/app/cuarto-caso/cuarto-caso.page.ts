import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-cuarto-caso',
  templateUrl: './cuarto-caso.page.html',
  styleUrls: ['./cuarto-caso.page.scss'],
  standalone: true,
  imports: [IonContent, NgClass, IonHeader, IonItem, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, CommonModule, FormsModule]
})

export class CuartoCasoPage implements OnInit {
  nota: number = Math.floor(Math.random() * 101); 
  cssClass: string ='';

  

  constructor() {
    this.cssClass = this.nota >= 65 ? 'aprobado' : 'reprobado';
  }

  ngOnInit() {
    
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-quinto-caso',
  templateUrl: './quinto-caso.page.html',
  styleUrls: ['./quinto-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, CommonModule, FormsModule]
})
export class QuintoCasoPage implements OnInit {

  colorTexto: string ='#2aff2b';

  constructor() { }

  ngOnInit() {
  }

}

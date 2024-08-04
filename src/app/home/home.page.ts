import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonRouterLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PrimerCasoPage } from "../primer-caso/primer-caso.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonLabel, IonRouterLink, IonList, CommonModule, FormsModule, PrimerCasoPage],
})
export class HomePage{


  constructor() {}
  }


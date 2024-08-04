import { CommonModule, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sexto-caso',
  templateUrl: './sexto-caso.page.html',
  styleUrls: ['./sexto-caso.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, NgSwitch]
})
export class SextoCasoPage implements OnInit {

  colorButton = 'primary'; 


toggleColorButton() {
  this.colorButton = this.colorButton === 'primary' ? 'dark' : 'primary';
}

  constructor() { }

  ngOnInit() {
  }

}

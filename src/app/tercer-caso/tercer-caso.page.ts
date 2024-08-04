import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tercer-caso',
  templateUrl: './tercer-caso.page.html',
  styleUrls: ['./tercer-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, CommonModule, FormsModule]
})
export class TercerCasoPage implements OnInit {

  dni: string = '';
  showDNI: boolean = false;

  showFunction(): void {
    if(this.dni.length > 14){
      this.showDNI = true;
    }else {
      this.showDNI = false;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}

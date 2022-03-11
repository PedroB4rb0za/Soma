import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numeroSortear = null;
  sorteando = false;


  sortear(){
    this.sorteando = true;
    this.numeroSortear = Math.floor(Math.random()*6+1);
  }


}




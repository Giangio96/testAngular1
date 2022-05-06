import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../modul/userInt';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  

  @Input() cardUser !: User[];

  @Output() cUserbtn = new EventEmitter<string>();

  onDelete(id:string){
    this.cUserbtn.emit(id)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}

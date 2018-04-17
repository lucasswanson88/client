import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from '../Models/trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  @Input() trainer: Trainer; 
  
  constructor() { }

  ngOnInit() {
  }

}

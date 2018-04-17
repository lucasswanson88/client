import { Injectable } from '@angular/core';
import { MOCKTRAINERS } from '../mock-trainers';
import { Trainer } from '../Models/trainer';

@Injectable()
export class TrainerService {

  getTrainers(): Trainer[] {
    return MOCKTRAINERS;
  } 

  constructor() { 
    
  }

}

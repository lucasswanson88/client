import { Component, OnInit } from '@angular/core';
import { TrainerService } from './Services/trainer.service';
import { Trainer } from './Models/trainer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    showAlert: boolean = false;

    title = 'app';
    trainerList: Trainer[];

    constructor( 
        private trainerService: TrainerService
    ) {  }

    ngOnInit(): void {
        this.trainerList = this.trainerService.getTrainers();
    }
    buttonClick() {
        this.showAlert = !this.showAlert;
    }
}

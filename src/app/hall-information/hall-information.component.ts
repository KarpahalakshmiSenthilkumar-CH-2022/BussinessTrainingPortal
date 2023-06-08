import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hall-information',
  templateUrl: './hall-information.component.html',
  styleUrls: ['./hall-information.component.css']
})
export class HallInformationComponent {

  @Input() public parentData:any;
  @Output() public childEvent = new EventEmitter();
  public Training = [
      {trainingid:"101", hallname:"Blue Pearl"},
      {trainingid:"102", hallname:"Red Pearl"},
      {trainingid:"103", hallname:"Sea Delight"},
      {trainingid:"104", hallname:"Ocean View"},
      {trainingid:"105", hallname:"Blue Fin"},
      {trainingid:"106", hallname:"Golden Plaza"},
  ]
  public i:any;

  fireEvent(trainingid: any){
    for(this.i=0;this.i<10;this.i++){
      if(this.Training[this.i].trainingid == trainingid){
        this.childEvent.emit(this.Training[this.i].hallname);
      }
    }
  }
}

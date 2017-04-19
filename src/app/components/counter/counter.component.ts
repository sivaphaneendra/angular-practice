import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter',
    moduleId: module.id,
    templateUrl: 'counter.component.html'
})

export class CounterComponent{

  @Input()   
  count:number = 0;

  @Output()
  change = new EventEmitter();

  increment = function(){
    this.count ++;
    this.change.emit(this.count);
  }

  decrement = function(){
    this.count --;
    this.change.emit(this.count);
  }
}
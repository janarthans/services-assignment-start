import { EventEmitter } from "@angular/core";

export class CounterService {
    counter : number = 0;

    counterChanged : EventEmitter<number> = new EventEmitter<number>();
}
import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";


@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    
    constructor(private counterService : CounterService) {}
    addToActiveUser(index : number) {
        this.activeUsers.push(this.inactiveUsers[index]);
        this.inactiveUsers.splice(index, 1);
        this.counterService.counter = ++this.counterService.counter;
        this.counterService.counterChanged.emit(this.counterService.counter);
    }

    addToInactiveUser(index : number) {
        this.inactiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);
        this.counterService.counter = ++this.counterService.counter;
        this.counterService.counterChanged.emit(this.counterService.counter);
    }    
}
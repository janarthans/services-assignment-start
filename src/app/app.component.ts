import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
  counter : number = 0;

  onSetToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
    this.userService.addToInactiveUser(id);
  }

  onSetToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
    this.userService.addToActiveUser(id);
  }

  constructor(private userService : UserService, private counterService : CounterService) { 
    this.counterService.counterChanged.subscribe(
      (counter : number) => (this.counter = counter)
    );
   }
}

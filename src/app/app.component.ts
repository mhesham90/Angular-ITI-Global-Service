import { Component } from '@angular/core';
import { UserDataService } from "./user-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user ;

  constructor(private userDataService: UserDataService){

  }

  ngOnInit() {
    this.userDataService.userData.subscribe((user)=>this.user=user)
  }
}

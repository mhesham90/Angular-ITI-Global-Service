import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../user-data.service";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  user ;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.userData.subscribe((user)=>this.user=user)
  }

  changeData() {
    this.userDataService.changeUserData({name:'Hesham',age:28})
  }
}

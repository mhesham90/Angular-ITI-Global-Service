import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../user-data.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  user ;
  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.userData.subscribe((user)=>this.user=user)
  }

  changeData() {
    this.userDataService.changeUserData({name:'mohamed',age:27})
  }

}

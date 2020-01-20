import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() currentUser:UserModel;
  @Output() logOutMsgEmit = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit() {
  }

  logout(){
    this.logOutMsgEmit.emit('logout');
  }

}

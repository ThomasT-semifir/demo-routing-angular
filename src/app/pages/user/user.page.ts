import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserListPage implements OnInit {

  users: any =[{
    id: 1,
    name: "Toto"
  },{
    id: 2,
    name: "Tata"
  }
]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showUserId(){
    this.router.navigate(['']);
  }

}

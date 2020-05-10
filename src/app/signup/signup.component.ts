import { Component, OnInit } from '@angular/core';
import { MovieServiceService, Accounts } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
message:string;
constructor(public movieservice: MovieServiceService,private router: Router) { }


  ngOnInit(): void {
  }
  onSubmit(adduser:Accounts):any{
    console.log(adduser);
     this.movieservice.addUser(adduser).subscribe(data => {
      this.message=data});
      this.router.navigate(['Book-ticket']);
     }

}

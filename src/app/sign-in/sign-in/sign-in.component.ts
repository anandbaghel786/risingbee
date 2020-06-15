import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: any = {};
  myfile: any = {};
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signUp(this.user.username, this.user.password).then(res => {
      alert("User created successfully")
    })
  }

  upload(e) {
    e.target.files[0].name = "jj.jpg"
    console.log(e.target.files);
  }

}

import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  isauth: boolean;
  constructor(private authservice:AuthService) {
    var firebaseConfig = {
      apiKey: "AIzaSyBCTTwJbCGCSS4t8LELpVzSkx2B8hYQJS4",
      authDomain: "angularapp-b6db8.firebaseapp.com",
      projectId: "angularapp-b6db8",
      storageBucket: "angularapp-b6db8.appspot.com",
      messagingSenderId: "368217624938",
      appId: "1:368217624938:web:3a6e10ece9551fae125513",
      measurementId: "G-JZSMQ8W2PK"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
  }
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if (user) {
          this.isauth=true
        }
        else {
          this.isauth=false
        }
      }
    )
  }
  signout(){
  this.authservice.signOutUser()
  }
}

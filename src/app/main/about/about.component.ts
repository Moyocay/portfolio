import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  myRouter: Router;
  
  constructor(private router: Router) {
    this.myRouter = router;
   }

   goToContact(){
    window.scrollTo(0,document.body.scrollHeight);
   }
}

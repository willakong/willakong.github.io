import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Willa Kong';

  constructor(private router: Router){ }

  // Display the header when it's not the home page
  public displayHeader(): boolean {
    const currRoute: string = this.router.url;
    return (currRoute !== '/' && currRoute !== '/home');
  }
}

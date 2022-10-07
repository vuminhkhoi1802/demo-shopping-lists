import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo-shopping-lists';
  showSplash: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;
    }, 2000);
  }
}

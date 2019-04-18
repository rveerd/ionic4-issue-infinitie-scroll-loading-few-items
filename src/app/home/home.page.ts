import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: string[] = [];

  ngOnInit() {
    this.loadMore();
  }

  loadMore(event?) {
    setTimeout(_ => {
      this.items.push('Apples', 'Bananas', 'Cherries');
      if (event)
        event.target.complete();
    }, 500);
  }
}

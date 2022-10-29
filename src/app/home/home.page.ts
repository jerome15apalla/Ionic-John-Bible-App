import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToJohn() {
    this.route.navigate(['/john-verses']);
  }
  goToChapters() {
    this.route.navigate(['/search-chapter']);
  }
  goToSearch() {
    this.route.navigate(['/search-verses']);
  }
}

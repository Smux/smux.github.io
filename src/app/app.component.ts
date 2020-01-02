import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weddinginv';

  scrollToRegistration() {
    // resets the hash navigation so that it will be triggered again
    location.hash = '#';
    location.hash = '#registration';
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-angular-app';
}

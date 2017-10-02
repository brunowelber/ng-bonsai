import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
  	{
  		title: 'one', 
  		children: [{title: 'four', children: [{title: 'six'}, {title: 'seven'}]}, {title: 'five'}]
  	},
  	{title: 'two'},
  	{title: 'three'},
  ]
}

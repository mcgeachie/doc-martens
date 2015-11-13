import {Component} from 'angular2/angular2';

@Component({
  selector: 'title',
  template: `
    <h1>{{title}}</h1>
    <h2>{{strapline}}</h2>
  `,
  styleUrls: [
    '/components/title/styles.css'
  ]
})
export class Title {
  public title = "Movies Data Management System";
  public strapline = "A place for editors to create content rich data objects for films on the telly and that";
}

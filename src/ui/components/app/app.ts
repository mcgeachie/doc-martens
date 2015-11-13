import {bootstrap, Component} from 'angular2/angular2';
import {Title} from '../title/title';

@Component({
    selector: 'my-app',
    template: `
      <title></title>
      <h2>Cheeky Nandos</h2>
    `,
    directives: [Title],
    styleUrls: [
      '/components/app/styles.css'
    ]
})
class AppComponent { };

bootstrap(AppComponent);

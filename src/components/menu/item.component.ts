import {Component, Input} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2/angularfire2";
import {Dish} from '../../model/Dish.interface.ts'

@Component({
  selector: 'menu-item',
  styles: [ require('./menu.component.scss')],
  template: `
    <h3> menu dish item </h3>
    <div>{{dish.name}}  for {{dish.price}}</div>
  `
})

export class MenuItem {
  @Input() dish: Dish;
}
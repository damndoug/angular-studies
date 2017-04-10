import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private _cuisines: FirebaseListObservable<any[]>;
  private _restaurants: Observable<any[]>;

  constructor(private _af: AngularFire) {}

  ngOnInit() {
    
    this._cuisines = this._af.database.list('/cuisines')
    this._restaurants = this._af.database.list('/restaurants', {

      query: {
        orderByChild: 'rating',
        equalTo: 5
      }
    }).map(restaurants => {

        restaurants.map(restaurant => {

          restaurant.cuisineType = this._af.database.object('/cuisines/' + restaurant.cuisine);
          restaurant.featureType = [];



          for (var feature in restaurant.features) {

            restaurant.featureType.push(
              this._af.database.object('/features/' + feature)
            )
          }
        })

        return restaurants

      })
  }

  add(){

  }

}

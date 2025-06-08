import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewPlaceComponent } from "./components/new-place/new-place.component";
import { PlaceMapComponent } from './components/place-map/place-map.component';
import { PlaceListComponent } from "./components/place-list/place-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewPlaceComponent, PlaceMapComponent, PlaceListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'places';


}
import { Component,OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../interfaces/place.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-map',
  templateUrl: './place-map.component.html',
  styleUrls: ['./place-map.component.css']
})
export class PlaceMapComponent implements OnInit {

  latitude = 40;
  longitude = -3;

  places$: Observable<Place[]>;

  constructor(private placesService: PlacesService) {
    this.places$ = this.placesService.getPlaces();
  }

  ngOnInit(): void {
  }

}

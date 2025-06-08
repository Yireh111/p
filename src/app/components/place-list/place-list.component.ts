import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../interfaces/place.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-place-list',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})

export class PlaceListComponent {

  private placesService = inject(PlacesService);

  places$: Observable<Place[]> = this.placesService.getPlaces();

  // Si quieres un valor inicial mientras carga, puedes usar async pipe en el HTML
  defaultPlaces: Place[] = [
    {
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      latitude: 40,
      longitude: -3,
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }
  ];

  async onClickDelete(place: Place): Promise<void> {
    try {
      const response = await this.placesService.deletePlace(place);
      console.log('Deleted:', response);
    } catch (error) {
      console.error('Error deleting place:', error);
    }
  }
}



import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule ,FormControl, FormGroup} from '@angular/forms';
import{ PlacesService } from '../../services/places.service';
 
@Component({
  selector: 'app-new-place',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent {
  private placesService = inject(PlacesService);

  formulario = new FormGroup({
    name: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl()
  });

async onSubmit() {
  const formValue = this.formulario.value;
  const place = {
    name: formValue.name ?? '',
    latitude: formValue.latitude !== null && formValue.latitude !== '' ? Number(formValue.latitude) : 0,
    longitude: formValue.longitude !== null && formValue.longitude !== '' ? Number(formValue.longitude) : 0,
    description: formValue.description ?? '',
    image: formValue.image ?? ''
  };
  console.log(place);
  const response = await this.placesService.addPlace(place);
  console.log(response);
}
}















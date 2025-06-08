import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc, CollectionReference,DocumentData } from '@angular/fire/firestore';
import { Place } from '../interfaces/place.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
 
  private placesCollection: CollectionReference<DocumentData>;


  constructor(private firestore: Firestore) { 

  this.placesCollection = collection(this.firestore, 'places');
  }

     addPlace(place: Place) {
      const placeRef = collection(this.firestore, 'places');
      return addDoc(placeRef, place);
     }

     getPlaces(): Observable<Place[]> {
      const placeRef = collection(this.firestore, 'places');
      return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>; 

}

  deletePlace(place: Place){
const placeDocRef = doc(this.firestore, `places/${place.id}`);
return deleteDoc(placeDocRef);

  }

  }
  
  
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';  // <-- importar aquí

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "gdi-places-app-e6c65",
        appId: "1:435121480759:web:741884ab889966f1554bb2",
        storageBucket: "gdi-places-app-e6c65.firebasestorage.app",
        apiKey: "AIzaSyAc2eP0OU5mQspIoA5qVDkhfjEWzjMjHec",
        authDomain: "gdi-places-app-e6c65.firebaseapp.com",
        messagingSenderId: "435121480759",
      })
    ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),  // <-- agregar el proveedor de Storage aquí
  ],
};





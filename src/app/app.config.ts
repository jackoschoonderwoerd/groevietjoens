import { ApplicationConfig, EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../environments/environments.prod';

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
    // provideAuth(() => getAuth())
]);


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};

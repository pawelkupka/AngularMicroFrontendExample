import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MicrofrontendService } from './microfrontends/microfrontend.service';

export function initializeApp(mfService: MicrofrontendService): () => Promise<void> {
  console.log("initializeApp()");
  return () => mfService.initialise();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

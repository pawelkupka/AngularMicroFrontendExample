import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../utils/route-utils';
import { Microfrontend } from './microfrontend.model';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[] = [];

  constructor(private router: Router) { }

  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  loadConfig(): Microfrontend[] {
    return [
      {
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'module1',
        exposedModule: 'Module1Module',
        displayName: 'Module1',
        routePath: 'module1',
        ngModuleName: 'Module1Module',
      },
      {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'module2',
        exposedModule: 'Module2Module',
        displayName: 'Module2',
        routePath: 'module2',
        ngModuleName: 'Module2Module',
      }
    ];
  }
}

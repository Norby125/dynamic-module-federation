import { loadRemoteModule } from '@angular-architects/module-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'remote1',
        loadComponent: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'remote1',
                exposedModule: './Component'
              }).then((m) => m.AppComponent)
    },
];

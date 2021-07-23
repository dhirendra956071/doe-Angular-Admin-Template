import { Routes } from '@angular/router'

//Route for content layout with sidebar, navbar and footer.
export const Full_ROUTES: Routes = [
    { 
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { 
        path: 'components',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    },
    { 
        path: 'ng-components',
        loadChildren: () => import('../../ng-components/ng-components.module').then(m => m.NgComponentsModule)
    },
    { 
        path: 'icons',
        loadChildren: () => import('../../icons/icons.module').then(m => m.IconsModule)
    }
];

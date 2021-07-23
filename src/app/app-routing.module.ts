import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullContentLayoutComponent } from './layouts/full-content-layout/full-content-layout.component';
import { Full_ROUTES } from './shared/routes/full_content_routes';
import { CONTENT_ROUTES } from './shared/routes/content_routes';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';


const routes: Routes = [
  { path: '',   redirectTo: '/dashboard/e-commerce', pathMatch: 'full' }, // redirect to `first-component`
  { path: '', component: FullContentLayoutComponent, data: { title: 'full Views'}, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views'}, children: CONTENT_ROUTES },
  // { path: '**', component:  },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

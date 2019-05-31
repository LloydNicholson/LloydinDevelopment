import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home-routing.module').then(mod => mod.HomeRoutingModule) },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects-routing.module').then(mod => mod.ProjectsRoutingModule)
  },
  {
    path: 'pixel-art',
    loadChildren: () => import('./pixel-art/pixel-art-routing.module').then(mod => mod.PixelArtRoutingModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio-routing.module').then(mod => mod.PortfolioRoutingModule)
  },
  { path: 'posts', loadChildren: () => import('./posts/posts-routing.module').then(mod => mod.PostsRoutingModule) },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

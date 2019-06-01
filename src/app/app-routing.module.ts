import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'pixel-art',
    loadChildren: () => import('./pixel-art/pixel-art.module').then(mod => mod.PixelArtModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(mod => mod.PortfolioModule)
  },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule) },
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

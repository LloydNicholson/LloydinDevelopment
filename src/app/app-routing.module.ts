import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CompletedCoursesComponent } from './completed-courses/completed-courses.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { animation: { page: 'rootPage' } } },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    data: { animation: { page: 'homePage' } },
    // canLoad: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule),
    data: { animation: { page: 'projectsPage' } },
    // canLoad: [AuthGuard]
  },
  {
    path: 'pixel-art',
    loadChildren: () => import('./pixel-art/pixel-art.module').then(mod => mod.PixelArtModule),
    data: { animation: { page: 'pixelArtPage' } },
    // canLoad: [AuthGuard]
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(mod => mod.PortfolioModule),
    data: { animation: { page: 'portfolioPage' } },
    // canLoad: [AuthGuard]
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule),
    data: { animation: { page: 'postsPage' } },
    // canLoad: [AuthGuard]
  },
  { path: 'auth', component: AuthComponent },
  { path: 'completed-courses', component: CompletedCoursesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

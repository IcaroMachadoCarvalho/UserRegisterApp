import { Routes } from '@angular/router';
import { homeGuard } from './core/guards/home.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
        title: 'Login'
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/sign-up/sign-up.component').then(m => m.SignUpComponent),
        title: 'SignUp'
    },
    {
        path:"forgot-password",
        loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
        title: 'Forgot Password'
    },
    {
        path:"home",
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
        canActivate: [homeGuard] 
    },
    {
        path: "**",
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: 'Not Found'
    }
];

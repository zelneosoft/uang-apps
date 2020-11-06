import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { ToolbarMainComponent } from './layout/toolbar-main/toolbar-main.component';
import { AuthService } from './service/auth.service';
import { ToolbarPageComponent } from './layout/toolbar-page/toolbar-page.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: ToolbarMainComponent,
        children: [
            {
                path: '',
                loadChildren: './page/home/home.module#HomeModule',
                canActivate: [AuthService]
            }
        ]
    },
    {
        path: 'profile',
        component: ToolbarPageComponent,
        children: [
            {
                path: '',
                loadChildren: './page/profile/profile.module#ProfileModule',
                canActivate: [AuthService]
            }
        ]
    },
    { path: '**',   redirectTo: 'home' }

];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class RoutingModule { }

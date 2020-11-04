import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { ToolbarMainComponent } from './layout/toolbar-main/toolbar-main.component';

const routes: Routes = [
    {
        path: 'login',
        component: BlankComponent,
        children: [
            {
                path: '',
                loadChildren: './auth/auth.module#AuthModule'
            }
        ]
    },
    {
        path: 'dashboard',
        component: ToolbarMainComponent,
        children: [
            {
                path: '',
                loadChildren: './auth/auth.module#AuthModule'
            }
        ]
    },
    { path: '**',   redirectTo: 'login' }

];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutingModule { }

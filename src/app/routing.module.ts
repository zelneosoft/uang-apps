import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarMainComponent } from './layout/toolbar-main/toolbar-main.component';
import { AuthService } from './service/auth.service';
import { AnonymousService } from './service/anonymous.service';
import { ToolbarPageComponent } from './layout/toolbar-page/toolbar-page.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule',
        pathMatch: 'full',
        canActivate: [AnonymousService]
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
        path: 'cash-in',
        // component: ToolbarPageComponent,
        data: { title: 'Pemasukan' },
        children: [
            {
                path: '',
                loadChildren: './page/cash-in/cash-in.module#CashInModule',
                canActivate: [AuthService]
            }
        ]
    },
    {
        path: 'cash-out',
        // component: ToolbarPageComponent,
        data: { title: 'Pengeluaran' },
        children: [
            {
                path: '',
                loadChildren: './page/cash-out/cash-out.module#CashOutModule',
                canActivate: [AuthService]
            }
        ]
    },
    {
        path: 'profile',
        component: ToolbarPageComponent,
        data: { title: 'Profil' },
        children: [
            {
                path: '',
                loadChildren: './page/profile/profile.module#ProfileModule',
                canActivate: [AuthService]
            }
        ]
    },
    {
        path: 'setting',
        component: ToolbarPageComponent,
        data: { title: 'Pengaturan' },
        children: [
            {
                path: '',
                loadChildren: './page/setting/setting.module#SettingModule',
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

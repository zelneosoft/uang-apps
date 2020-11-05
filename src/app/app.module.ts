import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BlankComponent } from './layout/blank/blank.component';
import { ToolbarMainComponent } from './layout/toolbar-main/toolbar-main.component';
import { ToolbarPageComponent } from './layout/toolbar-page/toolbar-page.component';
import { RoutingModule } from './routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './page/home/home.module';
import { BottomMenuComponent } from './layout/bottom-menu/bottom-menu.component';
import { AuthService } from './service/auth.service';
import { ApiService } from './service/api.service';
import { UserService } from './service/user.service';
import { ProfileModule } from './page/profile/profile.module';

@NgModule({
    declarations: [
        AppComponent,
        BlankComponent,
        ToolbarMainComponent,
        ToolbarPageComponent,
        BottomMenuComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        HttpClientModule,
        RoutingModule,
        AuthModule,
        HomeModule,
        ProfileModule
    ],
    providers: [
        AuthService,
        ApiService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

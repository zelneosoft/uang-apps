import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { HttpConfigInterceptor } from './service/INTERCEPTOR';
import { ErrorComponent } from './error/error.component';
import { ErrorDialogService } from './service/error-dialog.service';
import { SettingModule } from './page/setting/setting.module';

@NgModule({
    declarations: [
        AppComponent,
        BlankComponent,
        ToolbarMainComponent,
        ToolbarPageComponent,
        BottomMenuComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        RoutingModule,
        AuthModule,
        HomeModule,
        ProfileModule,
        SettingModule
    ],
    providers: [
        AuthService,
        ApiService,
        UserService,
        ErrorDialogService,
        {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

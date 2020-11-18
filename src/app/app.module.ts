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
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddTransactionComponent } from './page/add-transaction/add-transaction.component';
import { CashInModule } from './page/cash-in/cash-in.module';
import { CashOutModule } from './page/cash-out/cash-out.module';
import { ReportModule } from './page/report/report.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        BlankComponent,
        ToolbarMainComponent,
        ToolbarPageComponent,
        BottomMenuComponent,
        ErrorComponent,
        AddTransactionComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        RoutingModule,
        FormsModule,
        AuthModule,
        HomeModule,
        CashInModule,
        CashOutModule,
        ProfileModule,
        SettingModule,
        ReportModule,
        MatSnackBarModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        AuthService,
        ApiService,
        UserService,
        ErrorDialogService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

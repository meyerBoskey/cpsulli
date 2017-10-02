import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {routing} from "./app.routing";
import {AuthService} from './auth/auth.service';
import {ErrorComponent} from './errors/error.component';
import {ErrorService} from "./errors/error.service";
import {MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        HeaderComponent,
        AuthenticationComponent
    ],
    imports: [BrowserModule, routing, HttpModule, MessageModule],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}

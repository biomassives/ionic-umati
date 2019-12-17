import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CertsPage } from '../pages/certs/certs';
import { ProjectsPage } from '../pages/projects/projects';
import { GroupPage } from '../pages/group/group';
import { SavingsPage } from '../pages/savings/savings';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    GroupPage,
    SavingsPage,
    ProjectsPage,
    CertsPage,
    LoginPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GroupPage,
    SavingsPage,
    ProjectsPage,
    CertsPage,
    LoginPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

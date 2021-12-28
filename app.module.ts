import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { MoonComponent } from './pages/destination/moon/moon.component';
import { MarsComponent } from './pages/destination/mars/mars.component';
import { EuropaComponent } from './pages/destination/europa/europa.component';
import { TitanComponent } from './pages/destination/titan/titan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NavbarComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

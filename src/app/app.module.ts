import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from './about-me/about-me.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ImageActionComponent } from './image-action/image-action.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { DontArgueComponent } from './dont-argue/dont-argue.component';
import { ImageDescriptionComponent } from './image-description/image-description.component';
import { ChallangeComponent } from './challange/challange.component';
import { ChallangeBuyPlanComponent } from './challange-buy-plan/challange-buy-plan.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CountDownComponent,
    ImageActionComponent,
    NewsFeedComponent,
    DontArgueComponent,
    ImageDescriptionComponent,
    ChallangeComponent,
    ChallangeBuyPlanComponent,
    ContactComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

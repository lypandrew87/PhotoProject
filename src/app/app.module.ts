import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {HttpModule} from '@angular/http';
import {ContactService} from './services/contact-service.service'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent } from './components/carousel/carousel.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import { ReviewComponent } from './components/review/review.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoHeadingComponent } from './components/video-heading/video-heading.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
    PortfolioComponent,
    ReviewComponent,
    NavbarComponent,
    VideoHeadingComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'api',
        component: ContactComponent
      },
      {
        path: '',
        component: ContactComponent
      }
    ]
  )
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

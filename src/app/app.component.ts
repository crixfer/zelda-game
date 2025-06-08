import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MainComponent } from './shared/main/main.component';
import { FeaturesCardsComponent } from './components/features-cards/features-cards.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CarouselComponent,
    MainComponent,
    FeaturesCardsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zelda-game';
}

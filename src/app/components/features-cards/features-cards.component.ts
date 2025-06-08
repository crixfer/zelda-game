import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

export interface Card {
  cardTitle: string;
  cardInfo: string;
  cardImage: string;
  cardPrice: number;
  buttonColor: string;
}

@Component({
  selector: 'app-features-cards',
  imports: [NgStyle],
  templateUrl: './features-cards.component.html',
  styleUrl: './features-cards.component.scss',
})
export class FeaturesCardsComponent {
  cards: Card[] = [
    {
      cardImage: '/assets/link.png',
      cardTitle: 'Coraje',
      cardInfo:
        'Link es el valiente protagonista de la saga The Legend of Zelda. Es un guerrero silencioso y decidido, elegido por el destino para proteger el reino de Hyrule.',
      cardPrice: 10,
      buttonColor: '#4CAF50', // Verde
    },
    {
      cardImage: '/assets/zelda.webp',
      cardTitle: 'Sabiduría',
      cardInfo:
        'Zelda es la sabia y valiente princesa del reino de Hyrule en la saga The Legend of Zelda. Más que una figura real, es clave en la lucha contra el mal. ',
      cardPrice: 20,
      buttonColor: '#EB2424', // Rojo
    },
    {
      cardImage: '/assets/ganondorf.avif',
      cardTitle: 'Poder',
      cardInfo:
        'Ganondorf es el principal antagonista de The Legend of Zelda, un poderoso y ambicioso hechicero rey del pueblo Gerudo. Portador de la Trifuerza del Poder.',
      cardPrice: 50,
      buttonColor: '#884ADA', // Morado
    },
  ];
}

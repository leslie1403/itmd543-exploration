import { Component } from '@angular/core';

interface Venue {
  name: string;
  capacity: string;
  description: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-venues',
  standalone: true,
  templateUrl: './venues.html',
  styleUrl: './venues.css',
})
export class VenuesComponent {
  venues: Venue[] = [
    {
      name: 'Hermann Hall Ballroom',
      capacity: 'Up to 300 guests',
      description:
        'Ideal for banquets, formal events, and large receptions with full AV support. This room can be split in half with curtains, and since it comes with no furniture, we are able to adjust to a variety of setups.',
      imageUrl: 'assets/venues/hh-ball.jpg',
    },
    {
      name: 'Exposition Center',
      capacity: 'Up to 300 guests',
      description:
        'Flexible space since there is no built-in AV or furniture. It is well suited for student events, fairs, and networking events. However space is open with no doors and connects to the Gallery Lounge.',
      imageUrl: 'assets/venues/expo.jpg',
    },
     {
      name: 'Gallery Lounge',
      capacity: 'Up to 300 guests',
      description:
        'Flexible space since there is no built-in AV or furniture. It is well suited for student events, fairs, and networking events. However space is open with no doors and connects to the Exposition Center.',
      imageUrl: 'assets/venues/gallery.jpg',
    },
    {
      name: 'Hermann Hall Auditorium',
      capacity: '800 seats',
      description:
        'Tiered seating, stage, and built-in projection for lectures and panels. This is our largest auditorium on campus.',
        imageUrl: 'assets/venues/hh-aud.png',
    },
  ];
}

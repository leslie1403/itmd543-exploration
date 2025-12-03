import { Component } from '@angular/core';

interface ServiceItem {
  name: string;
  description?: string;
  imageUrl?: string;
}

interface ServiceCategory {
  id: 'equipment' | 'av' | 'catering';
  label: string;
  summary: string;
  items: ServiceItem[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  categories: ServiceCategory[] = [
    {
      id: 'equipment',
      label: 'Equipment',
      summary: 'This is the furniture that either comes with a venue, or can be requested for a venue. Tables, chairs, staging, and room layout essentials.',
      items: [
        {
          name: '6\' Rectangular Table',
          description: 'Standard table for registration, information tables, or catering setups.',
          imageUrl: 'assets/services/6ft-rect.png',
        },
        {
          name: '5\' Round Table',
          description: 'Ideal for 6-8 guests at banquets or socials. Please request how many seats you will like per table. Rounds have either a black top or a gray top.',
          imageUrl: '/assets/services/5ft-round.png',
        },
        {
          name: '5\' Round with Linen',
          description: 'Round tables can be requested with linens and are recommended if there will be food present.',
          imageUrl: '/assets/services/round-w-linen.png',
        },
        {
          name: 'Black Foldable Chair',
          description: 'These chairs are only available in Hermann Hall. They are more compact and lightweight.',
          imageUrl: '/assets/services/black-fold-chair.png',
        },
        {
          name: 'Black Padded Chair',
          description: 'These chairs are Only available in MTCC, specifically in MT Ball, MT Aud, and Top of the Stairs.',
          imageUrl: '/assets/services/black-pad-chair.png',
        },
        {
          name: 'Green Padded Chair',
          description: 'These chairs are only available in the lower level of Hermann Hall.',
          imageUrl: '/assets/services/green-pad-chairs.png',
        },
      ],
    },
    {
      id: 'av',
      label: 'Audio & Visual',
      summary: 'We are able to support both built-in audio and visual equipment, along with setting up more! This includes more microphones, speakers, projection, and lighting support.',
      items: [
        {
          name: 'Gooseneck Microphone',
          description: 'Fixed mic at the podium for lectures and speeches.',
          imageUrl: '/assets/services/gooseneck.png',
        },
        {
          name: 'Wireless Handheld Microphone',
          description: 'Perfect for Q&A or MCs who need to move around.',
          imageUrl: '/assets/services/wireless-mic.png',
        },
        {
          name: 'Wired Handheld Microphone',
          description: 'Main PA system for music playback and speeches.',
          imageUrl: '/assets/services/wired-mic.png',
        },
        {
          name: 'Table Top Stand',
          description: 'Standard presentation setup for slides and videos.',
          imageUrl: '/assets/services/tabletop-stand.png',
        },
        {
          name: 'Floor Stand',
          description: 'Even wash lighting for the stage area.',
          imageUrl: '/assets/services/floor-stand.png',
        },
        {
          name: 'Confidence Monitor',
          description: 'Even wash lighting for the stage area.',
          imageUrl: '/assets/services/confidence-monitor.png',
        },
      ],
    },
    {
      id: 'catering',
      label: 'Catering',
      summary: 'Our in-house catering company, Chartwells, offers a variety of food and beverage options. They can be tailored to your event based on the amount and type of package requested.',
      items: [
        {
          name: 'Coffee & Tea Service',
          description: 'Beverage station with a specific assortment of coffee, tea, and condiments.',
          imageUrl: 'assets/services/coffee.png',
        },
        {
          name: 'Buffet Package',
          description: 'Entrées, sides, and salads for receptions or banquets.',
          imageUrl: 'assets/services/buffet.png',
        },
        {
          name: 'Dessert Package',
          description: 'This is a small assorment of cookies, brownies, or dessert bites for a sweet finish.',
          imageUrl: 'assets/services/desserts.png',
        },
        {
          name: 'Beverage Station',
          description: 'Self serve, only non-alcoholic beverages, with an assortment of juices, sodas, and water.',
          imageUrl: 'assets/services/beverage.png',
        },
      ],
    },
  ];

  selectedCategoryId: ServiceCategory['id'] | null = null;

  get selectedCategory(): ServiceCategory | null {
    return (
      this.categories.find((c) => c.id === this.selectedCategoryId) ?? null
    );
  }

  selectCategory(id: ServiceCategory['id']) {
    this.selectedCategoryId = id;
  }
}

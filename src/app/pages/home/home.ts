import { Component } from '@angular/core';

type EventType = 'Workshop' | 'Social Gathering' | 'Conference' | 'Ceremony';
type AudienceType = 'Students' | 'Faculty and Staff' | 'External';

interface EventItem {
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  type: EventType;
  audience: AudienceType;
  imageUrl?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  events: EventItem[] = [
    {
      name: 'Spring Career Fair',
      date: 'February 10, 2026',
      time: '12:00 PM – 3:00 PM',
      venue: 'Hermann Hall Expo and Gallery',
      description: 'Industry employers visit Illinois Tech to offer opportunitues aspiring students. Perfect way to network!',
      type: 'Conference',
      audience: 'Students',
      imageUrl: 'assets/events/career-fair.jpg',
    },
    {
      name: 'ChiCyberCon',
      date: 'February 23, 2026',
      time: '11:00 AM – 5:00 PM',
      venue: 'Hermann Hall Ballroom',
      description: 'Cybersecurity conference that aims to spread awareness and research of the best cybersecurity practices.',
      type: 'Conference',
      audience: 'External',
      imageUrl: 'assets/events/chicybercon.jpg',
    },
    {
      name: 'Staff Awards 2026',
      date: 'January 28, 2026',
      time: '10:00 AM – 1:00 PM',
      venue: 'Hermann Hall Auditorium',
      description: 'Come together to celebrate our faculty and staff. Awards are given to those who have achieved a milestone!',
      type: 'Ceremony',
      audience: 'Faculty and Staff',
      imageUrl: 'assets/events/staffAwards.jpg',
    },
  ];
}

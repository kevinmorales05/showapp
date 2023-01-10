export interface CardProps {
    cost: number;
    type: string;
    description: string;
    artist: string;
    city: string;
    date: string;
    img: string;
    id: string;
  }

export interface event {
  cost:number;
  type: string;
  description: string;
  artist: string;
  city: string;
  date: string;
  img: string;
  id: string;
}

export interface category {
  id: number;
  name: string;
  description: string;
  icon: string;
  iconType: string;
}

export interface ticketProps {
  id: number;
  name: string;
  artist: string;
  date: string;
  hour: string;
  status: 'Active' | 'in Progress' | 'Finalized';
  img: string;
  link: string | undefined;
  type: 'online' | 'physical';
  address: string | undefined;
  city: string | undefined;

}
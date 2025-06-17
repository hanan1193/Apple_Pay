import HouseIcon from '@mui/icons-material/House';
import type { CardData } from '../types';
import appleCard from '/appleCard.png';
import shipping from '/shipping.png';
import PersonIcon from '@mui/icons-material/Person';

const cardItems: CardData[] = [
  {
    title: 'Contant',
    cardTitle: 'Apple Card',
    cardSubtitle: '10880 Malibu Point Malibu Cal...',
    details: '•••• 1234',
    icon:
    <img
    src={appleCard}
    style={{ width: 40, height: 33 }}
     />
  },
  {
    title: 'Shipping',
    cardTitle: 'Contact',
    cardSubtitle: 'astark@starkindustries.com',
    details: '(123) 456-7890',
    icon:< PersonIcon/>
  },
  {
    title: 'Shipping',
    cardTitle: 'Shipping',
    cardSubtitle: 'Anthony Stark',
    details: '10880 Malibu Point\nMalibu CA 90263',
    icon: <HouseIcon />,
  },
  {
    title: 'Shipping Method',
    cardTitle: 'Shipping',
    cardSubtitle: 'Arrives 5–7 days',
    price: '$0.00',
     icon:
    <img
    src={shipping }
    style={{ width: 38, height: 30 }}
     />
  },
];

export default cardItems;
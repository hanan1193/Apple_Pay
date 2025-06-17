export interface SectionTitleProps {
  name: string;
}
export interface InfoCardProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  price?: string;
  darkMode?: boolean;
}

export interface CardData {
  title: string;
  cardTitle: string;
  cardSubtitle?: string;
  details?: string;
  icon: React.ReactNode;
  price?: string;
}

export interface CardItemProps {
  data: CardData;
  dark?: boolean;
}

export interface CardSectionProps {
  items: CardData[];
  dark?: boolean;
}
export interface SideLabelProps {
  themeType: 'Light' | 'Dark';
  label: string;
}
export interface PaymentCardProps {
  mode: 'light' | 'dark';
  method: 'sideButton' | 'touchID';
  imageSrc: string;
}

export interface ApplePayScreen1Props {
  mode?: 'light' | 'dark';
}

export interface ApplePayScreen2Props {
  mode?: 'light' | 'dark';
}

export  interface ContactInfoProps {
  email: string;
  phone: string;
}
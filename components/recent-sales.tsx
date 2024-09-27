import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface SaleData {
  name: string;
  email: string;
  amount: string;
  avatar: string;
  initials: string;
}

const salesData: SaleData[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "/avatars/01.png",
    initials: "OM"
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "/avatars/02.png",
    initials: "JL"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "/avatars/03.png",
    initials: "IN"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "/avatars/04.png",
    initials: "WK"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "/avatars/05.png",
    initials: "SD"
  }
];

const SaleItem: React.FC<SaleData> = ({ name, email, amount, avatar, initials }) => (
  <div className="flex items-center">
    <Avatar className="h-9 w-9">
      <AvatarImage src={avatar} alt={`${name}'s avatar`} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
    <div className="ml-4 space-y-1">
      <p className="text-sm font-medium leading-none">{name}</p>
      <p className="text-sm text-muted-foreground">{email}</p>
    </div>
    <div className="ml-auto font-medium">{amount}</div>
  </div>
);

export const RecentSales: React.FC = () => {
  return (
    <div className="space-y-8">
      {salesData.map((sale, index) => (
        <SaleItem key={index} {...sale} />
      ))}
    </div>
  );
}

export default RecentSales;
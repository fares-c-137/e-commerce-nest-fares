export interface Item {
  id: string;
  name: string;
  price: number;
  manufacturerId?: string;
  groupId?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

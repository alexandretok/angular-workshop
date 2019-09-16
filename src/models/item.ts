import { ItemStatus } from './item-status';

export interface Item {
  label: string;
  value: number;
  status: ItemStatus
};
export interface IBoardItem {
  id: number;
  name: string;
  visibled: boolean;
  revealed?: boolean;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  balance: number;
}

export interface IHistory {
  id: number;
  date: string;
  coefficient: number;
  betAmount: number;
  totalWinAmount: number;
  status: string
}
export interface IMiniGame {
  name: string;
  path: string;
  active: boolean;
}

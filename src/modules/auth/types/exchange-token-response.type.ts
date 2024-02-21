import { UserInfo } from 'src/types/login.type';

export type ExchangeTokenResponse = {
  staffProfile: UserInfo;
  accessToken: string;
};

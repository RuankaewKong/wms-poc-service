import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequest {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class LoginResponse {
  status: number;
  message: string;
  email: string;
}

import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { OAuth2Client, TokenPayload } from 'google-auth-library';

@Injectable()
export class GoogleOauth {
  private readonly logger: Logger = new Logger(GoogleOauth.name);

  async verifyIdToken(idToken: string): Promise<TokenPayload> {
    const client = new OAuth2Client();

    try {
      const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: process.env.CLIENT_ID,
        // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      if (!payload) throw new UnauthorizedException();
      return payload;
    } catch (error) {
      this.logger.error(error);
      throw new UnauthorizedException();
    }
  }
}

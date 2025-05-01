declare module "bun" {
  interface Env {
    // APP

    readonly API_READ: string;
    readonly TBDB_POSTER_PATH: string;
    readonly TMDB_ACCESS_TOKEN: string;
    readonly TMDB_API_KEY: string;

    readonly DATABASE_URL: string;
    readonly PG_HOST: string;
    readonly PG_PASSWORD: string;
    readonly PG_PORT: number;
    readonly PG_USER: string;

    readonly CUID_FINGERPRINT: string;

    readonly CRYPTO_IV: string;
    readonly CRYPTO_KEY: string;
    readonly CRYPTO_METHOD: string;

    readonly JWT_AUDIENCE: string;
    readonly JWT_ISSUER: string;
    readonly JWT_SECRET: string;

    readonly AUTH_SECRET: string;
    readonly AUTH_URL: string;

    readonly AUTH_AUTHENTIK_AUTHORIZATION: string;
    readonly AUTH_AUTHENTIK_ID: string;
    readonly AUTH_AUTHENTIK_ISSUER: string;
    readonly AUTH_AUTHENTIK_JWKS: string;
    readonly AUTH_AUTHENTIK_SECRET: string;
    readonly AUTH_AUTHENTIK_TOKEN: string;

    readonly PROD: boolean;
  }
}

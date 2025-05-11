declare module "bun" {
  interface Env {
    readonly TMDB_ACCESS_TOKEN: string;
    readonly TMDB_API_KEY: string;
    readonly TMDB_BASE_URL: string;
    readonly TMDB_POSTER_PATH: string;

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

    readonly REDIS_URL: string;
  }
}

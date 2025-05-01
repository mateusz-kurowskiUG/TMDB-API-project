import _ from "lodash";

export const validateEnvs = () => {
  const {
    API_READ,
    AUTH_AUTHENTIK_AUTHORIZATION,
    AUTH_AUTHENTIK_ID,
    AUTH_AUTHENTIK_ISSUER,
    AUTH_AUTHENTIK_JWKS,
    AUTH_AUTHENTIK_SECRET,
    AUTH_AUTHENTIK_TOKEN,
    AUTH_SECRET,
    AUTH_URL,
    CRYPTO_IV,
    CRYPTO_KEY,
    CRYPTO_METHOD,
    CUID_FINGERPRINT,
    DATABASE_URL,
    JWT_AUDIENCE,
    JWT_ISSUER,
    JWT_SECRET,
    PG_HOST,
    PG_PASSWORD,
    PG_PORT,
    PG_USER,
    TBDB_POSTER_PATH,
    TMDB_ACCESS_TOKEN,
    TMDB_API_KEY,
  } = process.env;

  const vars = {
    API_READ,
    AUTH_AUTHENTIK_AUTHORIZATION,
    AUTH_AUTHENTIK_ID,
    AUTH_AUTHENTIK_ISSUER,
    AUTH_AUTHENTIK_JWKS,
    AUTH_AUTHENTIK_SECRET,
    AUTH_AUTHENTIK_TOKEN,
    AUTH_SECRET,
    AUTH_URL,
    CRYPTO_IV,
    CRYPTO_KEY,
    CRYPTO_METHOD,
    CUID_FINGERPRINT,
    DATABASE_URL,
    JWT_AUDIENCE,
    JWT_ISSUER,
    JWT_SECRET,
    PG_HOST,
    PG_PASSWORD,
    PG_PORT,
    PG_USER,
    TBDB_POSTER_PATH,
    TMDB_ACCESS_TOKEN,
    TMDB_API_KEY,
  };

  const varsMissing = _.pickBy(vars, (el: string | number) => !el);

  const entries = Object.entries(varsMissing);

  entries.forEach(([k, v]) => {
    console.error(`MISSING ${k}: ${v}`);
  });
  if (entries.length) process.exit(1);
};

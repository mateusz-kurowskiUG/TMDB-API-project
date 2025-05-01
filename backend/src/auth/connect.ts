import { Context, Hono, Next } from "hono";
import { createMiddleware } from "hono/factory";
import { Bindings } from "hono/types";
import * as passport from "passport";
import OAuth2Strategy from "passport-oauth2";

passport.initialize({});

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: process.env.AUTH_AUTHENTIK_AUTHORIZATION,
      tokenURL: process.env.AUTH_AUTHENTIK_TOKEN,
      clientID: process.env.AUTH_AUTHENTIK_ID,
      clientSecret: process.env.AUTH_AUTHENTIK_SECRET,
      callbackURL: process.env.AUTH_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });

      console.log(profile);
      // return cb(err, user);
      return cb();
    }
  )
);

export const authMiddleware = createMiddleware<{ Bindings: Bindings }>(
  async (c, next) => {
    passport.authenticate("oauth2", { failureRedirect: "/api/login" });
    await next();
  }
);

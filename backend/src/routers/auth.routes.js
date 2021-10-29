/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const authRouter = new Router();

let refreshTokens = [];

authRouter.post(
  '/api/register',
  passport.authenticate('register', { session: false }),
  async ({ user }, res) => {
    res.json({
      user,
      message: 'Register works'
    });
  }
);

authRouter.post(
  '/api/login',
  passport.authenticate('login', { session: false }),
  async ({ user }, res) => {
    const data = { _id: user._id, email: user.email };
    try {
      const token = jwt.sign(
        { user: data },
        process.env.SESSION_SECRET,
        { expiresIn: '1m' }
      );

      const refreshToken = jwt.sign(
        { user: data },
        process.env.SESSION_SECRET
      );

      refreshTokens.push(refreshToken);

      return res.json({
        token,
        refreshToken
      });
    } catch (error) {
      res.status(500);
      return res.send(error);
    }
  }
);

authRouter.get(
  '/api/unprotected',
  ({ user }, res) => res.send({
    user,
    message: 'Unprotected route works'
  })
);

authRouter.get(
  '/api/protected',
  passport.authenticate('jwt', { session: false }),
  ({ user }, res) => res.json({
    user,
    message: 'Protected route works'
  })
);

authRouter.post(
  '/api/refreshToken',
  ({ body: { refreshToken } }, res) => {
    if (!refreshToken) {
      return res.sendStatus(401);
    }

    if (!refreshTokens.includes(refreshToken)) {
      return res.sendStatus(403);
    }

    return jwt.verify(refreshToken, process.env.SESSION_SECRET, (err, { user }) => {
      if (err) {
        return res.sendStatus(403);
      }

      const data = { _id: user._id, email: user.email };

      const token = jwt.sign(
        { user: data },
        process.env.SESSION_SECRET,
        { expiresIn: '10m' }
      );

      return res.json({
        token
      });
    });
  }
);

authRouter.post(
  '/api/logout',
  ({ body: { refreshToken } }, res) => {
    refreshTokens = refreshTokens.filter((current) => current !== refreshToken);
    res.send('Logout successful');
  }
);

module.exports = authRouter;

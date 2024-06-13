// routes/auth.routes.js
import { Router } from 'express'
import passport from '../middlewares/passport.js'

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home or to the desired page.
    res.redirect('/')
  }
)

export { router as authRouter }

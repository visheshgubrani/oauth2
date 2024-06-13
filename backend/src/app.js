import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import session from 'express-session'
import { userRouter } from './routes/user.routes.js'
import passport from './middlewares/passport.js'

const app = express()

app.use(cors())

app.use(
  session({
    secret: 'hehehe',
    resave: false,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

app.use('/api/users', userRouter)
app.use('/auth', authRouter)

export { app }

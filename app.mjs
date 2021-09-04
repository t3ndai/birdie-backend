import express from 'express'
import eventsRouter from './routes/events-router.mjs'
import apicache from 'apicache'
import cors from 'cors'

// Configure app
const app = express()
app.options('*', cors())
app.use(cors())
const cache = apicache.middleware

app.use('/events', cache('5 minutes'), eventsRouter)

export default app 
import * as express from 'express';
import { events } from '../services/sql.mjs';

const eventsRouter = express.Router() 


/* 
* Get all events 
*/
async function getEvents(_, res) {
    try {
        const data = await events.get()
        res
        .status(200)
        .json(data)
    } catch (err) {
        res
           .status(500)
    }
    
}

eventsRouter.get('/', getEvents)

export default eventsRouter
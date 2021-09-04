import db from './db.mjs'
import util from 'util'
import { serialize } from 'jsonapi-fractal'

const query = util.promisify(db.query).bind(db)

/* 
* Gets events from db paginated 
*/
async function getEvents() {

    try {
        const results = await query(`
        SELECT * 
        FROM events
        WHERE event_type = "mood_observation"
        ORDER BY timestamp DESC 
        LIMIT 1000;`)
        const events = results.map(result => {
            const resultMap = new Map(Object.entries(result))
            const event = resultMap.get('payload') 
            return JSON.parse(event)
        })
        const serializedData = serialize(events, 'events')
        return serializedData  
    } catch(err) {
        return err 
    }
} 

export const events = {
    get: getEvents
}

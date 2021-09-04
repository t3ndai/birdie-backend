import request from 'supertest'
import app from '../app.mjs'
import expect from 'expect.js'

describe('GET /events', () => {
    it('get events', () => {
        request(app)
          .get('/events')
          .expect(200)
          .end((_, res) => {
              expect(res.body.data[0].type).to.be('events')
          })
    })
})

const createApp = require('./app.js')
const app = createApp()
const supertest = require('supertest')
const request = supertest(app)



test('GET /', async () =>{
    const response = await request.get('/')
        .expect(200)
        .expect("Content-Type", "text/html")
        
        expect(response.text).toEqual("<html><body><h1>UN altra scritta di test!</h1></body></html>")
});
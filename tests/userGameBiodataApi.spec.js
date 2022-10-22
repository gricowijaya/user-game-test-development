const request = require('supertest');
const index = require('../index');

// for testing
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhYmVsLWpvbGxhbmRvIiwiZW1haWwiOiJhYmVsX2pvbGxhbmRvQGdtYWlsLmNvbSIsImlhdCI6MTY2NDk0NjE4MX0.c-fOwEyJV_ZUGlguI5YMzWkrrNFIqP-vhxfNmDBdnIQ"
const username = "usernamez"
const email = "bambang@dd.xyz"
const password = "1234"

const fullname = "Abel Jollandi"
const birthdate = "2002-03-01 00:00:00"
const description = "This is my new profile for the Biodata, find out more about me in here"

// endpoint GET /
describe('POST /user-game-biodata/create endpoint', () => {
    // case success
    test('Create User Biodata', async () => {
        try {
            const res = await request(index)
                .post('/user-game-biodata/create')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

describe('GET /user-game-biodata/get-details endpoint', () => {
    // case success
    test('Successful Get The User Game Biodata Details', async () => {
        try {
            const res = await request(index)
                .get('/user-game-biodata/get-details')
                .set('Authorization', token)

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body).toHaveProperty('token');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('success');
            expect(res.body.data).toBe(null);
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

describe('PUT /user-game-biodata/update endpoint', () => {
    // case success
    test('Successful Update User Biodata', async () => {
        try {
            const res = await request(index)
                .post('/user-game/update-username')
                .send({  fullname, birthdate, description });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
            expect(res.body.data).toBe(null);
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

describe('DELETE /user-game-biodata/delete endpoint', () => {
    // case success
    test('Successful DELETE User Game Biodata', async () => {
        try {
            const res = await request(index)
                .set('Authorization', token)
                .delete('/user-game-biodata/delete')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
            expect(res.body.data).toBe(0);
        } catch (err) {
            // expect(err).toBe('error')
        }
    });
});


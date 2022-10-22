const request = require('supertest');
const index = require('../index');

// for testing
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhYmVsLWpvbGxhbmRvIiwiZW1haWwiOiJhYmVsX2pvbGxhbmRvQGdtYWlsLmNvbSIsImlhdCI6MTY2NDk0NjE4MX0.c-fOwEyJV_ZUGlguI5YMzWkrrNFIqP-vhxfNmDBdnIQ"
const username = "usernamez"
const email = "bambang@dd.xyz"
const password = "1234"

// endpoint GET /
describe('POST /user-game-history/create endpoint', () => {
    // case success
    test('Get All User Data Failed', async () => {
        try {
            const activity_description = "USER_IS_LOGIN";

            const res = await request(index)
                .post('/user-game-history/create')
                .set('Authorization', token)
                .send(activity_description);

            expect(res.statusCode).toBe(401);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe("you're not authorized!");
            expect(res.body.data).toBe(null);
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

// endpoint GET /
describe('GET /user-game-history/get-history endpoint', () => {
    // case success
    test('Get All User Data Failed', async () => {
        try {
            const activity_description = "USER_IS_LOGIN";

            const res = await request(index)
                .post('/user-game-history/create')
                .set('Authorization', token)
                .send(activity_description);

            expect(res.statusCode).toBe(401);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe("you're not authorized!");
            expect(res.body.data).toBe(null);
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

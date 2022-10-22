const request = require('supertest');
const index = require('../index');

// for testing
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhYmVsLWpvbGxhbmRvIiwiZW1haWwiOiJhYmVsX2pvbGxhbmRvQGdtYWlsLmNvbSIsImlhdCI6MTY2NDk0NjE4MX0.c-fOwEyJV_ZUGlguI5YMzWkrrNFIqP-vhxfNmDBdnIQ"
const username = "usernamez"
const email = "bambang@dd.xyz"
const password = "1234"

// endpoint GET /
describe('GET /user-game/get-all endpoint', () => {
    // case success
    test('Get All User Data Success', async () => {
        try {
            const res = await request(index)
                .get('/user-game/get-all')

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

describe('GET /user-game/details endpoint', () => {
    // case success
    test('Successful Get The User Details', async () => {
        try {
            const res = await request(index)
                .get('/user-game/details')
                .set('Authorization', token)

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body).toHaveProperty('token');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('success');
            expect(res.body.data).toBe({
                username: "usernamez",
                email: "bambang@dd.xyz",
                createdAt: "2022-10-04T13:40:53.561Z"
            });

        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

describe('POST /user-game/update-username endpoint', () => {
    // case success
    test('Successful Update Username', async () => {
        try {
            const newUsername = "new-user-agung"
            const res = await request(index)
                .post('/user-game/update-username')
                .send({  newUsername });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
            expect(res.body.data).toBe(newUsername);
        } catch (err) {
            expect(err).toBe('error');;
        }
    });

    test('Failed Update Username', async () => {
        try {
            const res = await request(index)
                .post('/user-game/update-username')
                .send({  newUsername });

            expect(res.statusCode).toBe(400);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('failed to change username, you still use the old username!');
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

describe('DELETE /user-game/delete endpoint', () => {
    // case success
    test('Successful DELETE User', async () => {
        try {
            const res = await request(index)
                .set('Authorization', token)
                .delete('/user-game/delete')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
            expect(res.body.data).toBe(1);
        } catch (err) {
            // expect(err).toBe('error')
        }
    });
});


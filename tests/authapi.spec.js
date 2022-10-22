const request = require('supertest');
const index = require('../index');

// for testing
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhYmVsLWpvbGxhbmRvIiwiZW1haWwiOiJhYmVsX2pvbGxhbmRvQGdtYWlsLmNvbSIsImlhdCI6MTY2NDk0NjE4MX0.c-fOwEyJV_ZUGlguI5YMzWkrrNFIqP-vhxfNmDBdnIQ"
const username = "usernamez"
const email = "bambang@dd.xyz"
const password = "1234"

// endpoint GET /
describe('GET /auth/register endpoint', () => {
    test('Failed Username Already Used', async () => {
        try {
            const res = await request(index)
                .post('/auth/register')
                .send({ username, email, password });

            expect(res.statusCode).toBe(409);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('username already used!');
        } catch (err) {
            expect(err).toBe('error');;
        }
    });

    // case success
    test('Register Success', async () => {
        try {
            const res = await request(index)
                .post('/auth/register')
                .send({ username, email, password });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
            expect(res.body.data).toStrictEqual({ username, email });
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

describe('GET /auth/login endpoint', () => {
    // case success
    test('Successful Login ', async () => {
        try {
            const res = await request(index)
                .post('/auth/login')
                .send({ username, password });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body).toHaveProperty('token');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
        } catch (err) {
            expect(err).toBe('error');;
        }
    });

    test('Failed Username Already Used', async () => {
        try {
            const res = await request(index)
                .post('/auth/register')
                .send({ username, email, password });

            expect(res.statusCode).toBe(409);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('email or password doesn\'t match!');
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

describe('GET /auth/whoami endpoint', () => {
    // case success
    test('Successful Identification', async () => {
        try {
            const res = await request(index)
                .post('/auth/whoami')
                .set('Authorization', token)

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body).toHaveProperty('token');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success');
        } catch (err) {
            expect(err).toBe('error');;
        }
    });

});

describe('GET /auth/change-password endpoint', () => {
    // case success
    test('Successful Change Password', async () => {
        try {
            const res = await request(index)
                .post('/auth/change-password')
                .set('Authorization', token)

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body).toHaveProperty('token');
            expect(res.body.status).toBe(true);
            expect(res.body.data).toStrictEqual(1);
        } catch (err) {
            expect(err).toBe('error');;
        }
    });
});

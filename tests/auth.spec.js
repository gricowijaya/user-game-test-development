const { UserGame } = require('../models');
const controllers = require('../controllers/index');
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

const jwt = require('jsonwebtoken');

const {
    JWT_SIGNATURE_KEY
} = process.env;

describe('controllers.auth.register function', () => {
    // case success
    test('res.json called with {...basicResponse, data: {username: username, email: email}}',  async () => {
        try { 
            const req = mockRequest({ username: "ningtyas", email: "ningtyas@gmail.com", password: "1234" });
            const res = mockResponse();


            await controllers.auth.register(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    username: req.body.username,
                    email: req.body.email
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});

describe('controllers.auth.login function', () => {
    // case success
    test('res.json called with {...basicResponse, data: {token}}',  async () => {
        try { 
            const req = mockRequest({ username: "abel-jollandi", password: "1234" });
            const res = mockResponse();

            const user = await UserGame.findOne({ where: { username: req.body.username } });

            payload = {
                id: user.id,
                username: user.username,
                email: user.email,
            };

            const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

            await controllers.auth.login(req,res)
            expect(res.status).toBeCalledWith(201);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    token
                }
            });

            done();
        } catch (err) { 
            
        }
   });
});

describe('controllers.auth.changePassword function', () => {
    // case success
    test('res.status called with 200',  async () => {
        try { 
            const req = mockRequest({ old_password: "1234", new_password: "1233", confirm_new_password: "1233" });
            const res = mockResponse();

            await controllers.auth.changePassword(req,res)

            expect(res.status).toBeCalledWith(202);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: update 
            });

            done();
        } catch (err) { 
            
        }
   });
});


const request = require('supertest');
const index = require('../index');


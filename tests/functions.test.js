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

// beforeAll((done) => {
//   request(app)
//     .post('/login')
//     .send({
//       username: user,
//       password: pw,
//     })
//     .end((err, response) => {
//       token = response.body.token; // save the token!
//       done();
//     });
// });

describe('controllers.auth.register function', () => {
    // case success
    test('res.json called with {...basicResponse, data: {username: username, email: email}}',  async () => {
        const req = mockRequest({ username: "abel-jollando", email: "abel_jollando@gmail.com", password: "1234" });
        const res = mockResponse();

        await controllers.auth.register(req, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            status: true,
            message: 'success',
            data: { 
                username: req.body.username,
                email: req.body.email
            }
        });

        done();
    });
});

// describe('controllers.auth.login function', () => {
//     // case success
//     test('res.json return jwt token for login user',  async () => {
//         const req = mockRequest({ username: "abel-jollandi", password: "1234" });
//         // const res = mockResponse();

//         // const response = await controllers.auth.login(req, res);

//         expect(res.status).toBeCalledWith(200);
//         expect(res.json).toBeCalledWith({
//             status: true,
//             message: 'success'
//             // data: { 
//             //     token: res.token
//             // }
//         });

//         done();
//     });
// });


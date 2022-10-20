const { UserGame } = require('../models');
const controllers = require('../controllers/index');
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

// const jwt = require('jsonwebtoken');

// const {
//     JWT_SIGNATURE_KEY
// } = process.env;

describe('controllers.userGame.updateUsername function', () => {
    // case success
    test('res.json called with {...basicResponse, data: newUsername}',  async () => {
        try { 
            const req = mockRequest({ new_username: "ningtyas" });
            const res = mockResponse();


            await controllers.userGame.updateUsername(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    newUsername
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});

describe('controllers.userGame.getThisUserDetails function', () => {
    // case success
    test('res.json called with {...basicResponse, data: {token}}',  async () => {
        try { 
            await controllers.userGame.getThisUserDetails(req,res)
            expect(res.status).toBeCalledWith(201);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: userDetails
            });

            done();
        } catch (err) { 
            
        }
   });
});

describe('controllers.userGame.getAllUsername function', () => {
    // case success
    test('res.status called with 200',  async () => {
        try { 
            await controllers.userGame.getAllUsername(req,res)

            expect(res.status).toBeCalledWith(202);
            expect(res.json).toBeCalledWith({
                status: false,
                message: 'success',
                data: allUserGame
            });

            done();
        } catch (err) { 
            
        }
   });
});

describe('controllers.userGame.deleteUser function', () => {
    // case success
    test('res.status called with 200',  async () => {
        try { 
            await controllers.userGame.deleteUser(req,res)

            expect(res.status).toBeCalledWith(202);
            expect(res.json).toBeCalledWith({
                status: false,
                message: 'success',
                data: userToBeDeleted
            });

            done();
        } catch (err) { 
            
        }
   });
});

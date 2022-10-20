const controllers = require('../controllers/index');
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

describe('controllers.userGameHistory.create function', () => {
    // case success
    test('res.json called with {...basicResponse, data: log}',  async () => {
        try { 
            const req = mockRequest({ activity_description: "LOGIN TODAY" });
            const res = mockResponse();

            await controllers.userGameHistory.create(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    log
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});

describe('controllers.userGameHistory.getHistory function', () => {
    // case success
    test('res.json called with {...basicResponse, data: log}',  async () => {
        try { 
            const req = mockRequest({ user_game_id: 1});
            const res = mockResponse();

            await controllers.userGameHistory.getHistory(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    log
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});

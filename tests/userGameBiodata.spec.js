const controllers = require('../controllers/index');
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

describe('controllers.userGameBiodata.createBiodata function', () => {
    // case success
    test('res.json called with {...basicResponse, data: createUserBiodata}',  async () => {
        try { 
            const req = mockRequest({ fullname: "Tyas Ning", birthdate: "2002-09-10", description: "New Gamer" });
            const res = mockResponse();

            await controllers.userGameBiodata.createBiodata(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    createUserBiodata
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});

describe('controllers.userGameBiodata.getBiodataDetails function', () => {
    // case success
    test('res.json called with {...basicResponse, data: biodata}',  async () => {
        try { 
            const req = mockRequest({});
            const res = mockResponse();

            await controllers.userGameBiodata.getBiodataDetails(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    biodata
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});

describe('controllers.userGameBiodata.updateBiodata function', () => {
    // case success
    test('res.json called with {...basicResponse, data: updateUserBiodata}',  async () => {
        try { 
            const req = mockRequest({ fullname: "Ning Tyas", birthdate: "2002-09-10", description: "New Gamer" });
            const res = mockResponse();

            await controllers.userGameBiodata.updateBiodata(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    updateuserBiodata
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});

describe('controllers.userGameBiodata.deleteBiodata function', () => {
    // case success
    test('res.json called with {...basicResponse, data: biodataToBeDeleted}',  async () => {
        try { 
            const req = mockRequest({ user_game_id: 1});
            const res = mockResponse();

            await controllers.userGameBiodata.deleteBiodata(req, res);

            expect(res.status).toBe(200);
            expect(res.json).toBeCalledWith({
                status: true,
                message: 'success',
                data: { 
                    biodataToBeDeleted
                }
            });

            done();
        } catch (err) { 
            
        }
    });
});


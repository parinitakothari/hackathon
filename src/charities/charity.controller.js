var typeorm = require("typeorm");
var EntitySchema = typeorm.EntitySchema;

function CharityController () {
    
    const createCharity = async (req, res) => {
        try {
            conn = typeorm.getConnection();
            charityRepo = await conn.getRepository("Charity");
            result = await charityRepo.create(req.body);
            charity = await charityRepo.save(result);
            return res.status(200).json(charity);
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }
    }

    const getAllCharities = async (req, res) => {
        
        try {
            conn = typeorm.getConnection();
            charityRepo = await conn.getRepository("Charity");
            charities = await charityRepo.find();            
            return res.status(200).json(charities);
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }

    }

    const getCharityById = async (req, res) => {

        const { id } = req.params;

        try {
            conn = typeorm.getConnection();
            charityRepo = await conn.getRepository("Charity");
            charity = await charityRepo.find({ id: parseInt(id) });
            return res.status(200).json(charity);
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }
    }

    const getCharityFundsById = async (req, res) => {

        const { id } = req.params;

        try {
            conn = typeorm.getConnection();
            charityRepo = await conn.getRepository("Charity");
            charityfunds = await charityRepo.find({ where : { id: parseInt(id)}, select : ['funds'] });
            //charityfunds = await charityRepo.createQueryBuilder("charity").select(["charity.funds"]);
            return res.status(200).json({ "funds": charityfunds[0].funds });
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }
    }

    const updateCharity = async (req, res) => {
        
        const { id } = req.params;

        try {
            conn = typeorm.getConnection();
            charityRepo = await conn.getRepository("Charity");
            charity = await charityRepo.update(parseInt(id), req.body);
            return res.status(200).json(charity);
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }
    }

    const deleteCharity = async (req, res) => {
        const { id } = req.params;

        try {
            conn = typeorm.getConnection();
            charityRepo = await conn.getRepository("Charity");
            charity = await charityRepo.delete(parseInt(id));
            return res.status(200).json(charity);
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }
    }

    return {
        createCharity,
        getAllCharities,
        getCharityById,
        getCharityFundsById,
        updateCharity,
        deleteCharity
    };
}

module.exports = CharityController;
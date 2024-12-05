const prisma = require('../util/prismaclients');

async function addTags(req, res) {
    try {
        const data = req.body;
        const note = await prisma.tag.create({data});
        res.status(200).json({message : 'Tags added successfully !'})

    } catch (error) {
        res.status(500).json({message : 'A problem has occured while adding tags'})
    }
}

module.exports = {
    addTags
}
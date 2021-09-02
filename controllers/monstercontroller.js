const Express = require('express');
const EagerLoadingError = require('sequelize/lib/errors/eager-loading-error');
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
// Import Log Model
const { LogModel } = require('../models');

/* Create Monster */
router.post('/create', validateJWT, async (req, res) => { //reguires validate-jwt middleware?
    const { description, creature, image, campaign, hitpoints, armorclass, speed, rating } = req.body.log;
    const { id } = req.user;
    const logEntry = {
        creature,
        image,
        campaign,
        hitpoints,
        armorclass,
        speed,
        rating,
        description, 
        owner: id
    }
    try {
        const newLog = await LogModel.create(logEntry);
        res.status(200).json(newLog);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

//Update
router.put('/update/:entryId', validateJWT, async (req, res) => {
    const { description, creature, image, campaign, hitpoints, armorclass, speed, rating } = req.body.log;
    const userId = req.user.id;
    const logId = req.params.entryId

    const query = {
        where: {
            id: logId,
            owner: userId
        }
    };

    const updateLog = {
        creature: creature,
        image: image,
        campaign: campaign,
        hitpoints: hitpoints,
        armorclass: armorclass,
        speed: speed,
        rating: rating,
        description: description,
     
    };

    try {
        const update = await LogModel.update(updateLog, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err});
    }
});



// Delete a monster
router.delete("/delete/:id", validateJWT, async (req, res) => {
    const userId = req.user.id;
    const monsterId = req.params.id;

    try {
        const query = {
            where: {
                id: monsterId,
                user_id: userId
            }
        };

        await LogModel.destroy(query);
        res.status(200).json({ message: "Monster has been deleted!" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});


module.exports = router;


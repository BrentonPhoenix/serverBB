const Express = require('express');
//const {EagerLoadingError}= require('sequelize/lib/errors/eager-loading-error');
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
// Import Log Model
const { MonsterModel } = require('../models');

/* Create Monster */
router.post('/create', validateJWT, async (req, res) => { //reguires validate-jwt middleware?
    const { description, creature, image, campaign, hitpoints, armorclass, speed, rating } = req.body.monster;
    const { id } = req.user;
    const MonsterEntry = {
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
        const newMonster = await MonsterModel.create(MonsterEntry);
        res.status(200).json(newMonster);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

//Update
router.put('/update/:entryId', validateJWT, async (req, res) => {
    const { description, creature, image, campaign, hitpoints, armorclass, speed, rating } = req.body.monster;
    const userId = req.user.id;
    const monsterId = req.params.entryId

    const query = {
        where: {
            id: monsterId,
            owner: userId
        }
    };

    const updateMonster = {
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
        const update = await MonsterModel.update(updateMonster, query);
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
                owner: userId
            }
        };

        await MonsterModel.destroy(query);
        res.status(200).json({ message: "Monster has been deleted!" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});


// Get all Monsters /my-monster endpoint
router.get("/", validateJWT, async(req, res)=>{
    let {id} = req.user;
    try{
        const monsterLogs = await MonsterModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(monsterLogs);
    } catch (err) {
        res.status(500).json({error: err});
    }
});



module.exports = router;


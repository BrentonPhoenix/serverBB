const { Router } = require("express");

// Get all Monsters /my-monster endpoint
router.get("/my-monster", validateJWT, async(req, res)=>{
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






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
const Path = require("../models/index.js").Path;

const createPath = async (req, res) => {
    try {
        const { lat, lng } = req.body;

        await Path.create({
            lat,
            lng
        });
        res.status(200).send({ message: "Path inserted" });
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" });
    }
};

const updatePath = async (req, res) => {
    try {
        const { id } = req.params;
        let lat = req.body.lat
        let lng = req.body.lng

        const path = await Path.findOne({
            where: {
                id
            }
        });
        if (!path) {
            res.status(400).send({ message: "path does not exist" });
        }
        else {
            const updatedPath = await path.update({
                ...path,
                lat: lat,
                lng: lng,
            });
            res.status(200).send({ updatedPath, message: "path has been updated" });

        }
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" })
    }
}

const getAllPaths = async (req, res) => {
    try {
        const paths = await Path.findAll();
        res.status(200).send(paths);
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Server error" })
    }
};

const deletePath = async (req, res) => {
    const pathId = req.params.id;
    try {
        Path.findOne({
            where: {
                id: pathId,
            },
        }).then((result) => {
            if (result) {
                result.destroy();
                res.status(200).send({
                    message: "Path deleted",
                });
            } else
                res.status(404).send({
                    message: "Could not find path",
                });
        });
    } catch (e) {
        res.status(500).send({ message: "Server error" });
    }
};

module.exports = {
    createPath,
    updatePath,
    getAllPaths,
    deletePath
};
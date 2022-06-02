const Polygon = require("../models/index").Polygon;
const Path = require("../models/index").Path;

const createPolygon = async (req, res) => {
    if (req.body.name && req.body.strokeColor && req.body.fillColor && req.body.fillOpacity && req.body.paths) {
        const name = req.body.polygonText;
        const strokeColor = req.body.strokeColor;
        const fillColor = req.body.fillColor;
        const fillOpacity = req.body.fillOpacity;

        const polygon = new Polygon();
        polygon.name = name;
        polygon.strokeColor = strokeColor;
        polygon.fillColor = fillColor;
        polygon.fillOpacity = fillOpacity;
        polygon.projectId = req.params.projectId;

        await polygon.save();

        const paths = req.body.paths;
        for (let i = 0; i < paths.length; i++) {
            let path = new Path();
            path.lat = paths[i].lat;
            path.lng = paths[i].lng;
            path.polygonId = polygon.id;
            await path.save();
        }
        res.status(201).json({ message: "Polygon with paths added" });
    } else {
        res.status(400).json({ message: "Invalid polygon option payload" });
    }
};

const deletePolygon = async (req, res) => {
    let polygonId = req.params.id;
    try {
        Polygon.findOne({
            where: {
                id: polygonId,
            },
        }).then((result) => {
            if (result) {
                result.destroy();
                res.status(202).json({ message: "Polygon deleted" });
            } else {
                res.status(404).json({
                    message: "The polygon you're trying to delete doesnt' exist",
                });
            }
        });
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
};

const getAllPathsForPolygon = async (req, res) => {
    try {
        let polygon_id = req.params.polygon_id;
        const polygon = await Polygon.findOne({ where: { id: polygon_id } });
        const paths = await Path.findAll({
            where: {
                polygonId: polygon_id
            }
        })
        if (paths.length > 0) {
            res.status(200).send({ polygon, paths });
        } else
            res.status(404).json({ message: "polygon has 0 paths" });

    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" });
    }
};

const getAllPolygonsInProject = async (req, res) => {
    try {
        let project_id = req.params.project_id;
        const polygons = await Polygon.findAll({
            raw: true, where: {
                projectId: project_id
            }
        }).then(async (polygonsFound) => {
            for (let i = 0; i < polygonsFound.length; i++) {
                polygonsFound[i].paths = await getAllPathsPolygon(polygonsFound[i].id)
            }
            return polygonsFound;
        });

        res.status(200).send(polygons);
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" });
    }
}

const getAllPathsPolygon = async (id) => {
    const paths = await Path.findAll({
        where: {
            polygonId: id
        },
        raw: true
    })

    return paths
};


module.exports = {
    createPolygon,
    deletePolygon,
    getAllPathsForPolygon,
    getAllPolygonsInProject: getAllPolygonsInProject
}
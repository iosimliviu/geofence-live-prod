const Project = require("../models/index.js").Project;

const createProject = async (req, res) => {
    try {
        const { zoom, name, centerLat, centerLng } = req.body;

        await Project.create({
            zoom,
            name,
            centerLat,
            centerLng
        });
        res.status(200).send({ message: "Project inserted" });
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" });
    }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        let zoom = req.body.zoom;
        let name = req.body.name
        let centerLat = req.body.centerLat
        let centerLng = req.body.centerLng

        const project = await Project.findOne({
            where: {
                id
            }
        });
        if (!project) {
            res.status(400).send({ message: "project does not exist" });
        }
        else {
            const updatedProject = await project.update({
                ...project,
                zoom: zoom,
                name: name,
                centerLat: centerLat,
                centerLng: centerLng,
            });
            res.status(200).send({ updatedProject, message: "project has been updated" });

        }
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" })
    }
}

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).send(projects);
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Server error" })
    }
};

const deleteProject = async (req, res) => {
    const projectId = req.params.id;
    try {
        Project.findOne({
            where: {
                id: projectId,
            },
        }).then((result) => {
            if (result) {
                result.destroy();
                res.status(200).send({
                    message: "Project deleted",
                });
            } else
                res.status(404).send({
                    message: "Could not find project",
                });
        });
    } catch (e) {
        res.status(500).send({ message: "Server error" });
    }
};

module.exports = {
    createProject,
    updateProject,
    getAllProjects,
    deleteProject
};
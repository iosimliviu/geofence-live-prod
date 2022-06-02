const UserProject = require("../models/index").UserProject;

const createUserProject = async (req, res) => {
    try {
        const { userId, projectId } = req.body;


        if (await UserProject.findOne({ where: { userId, projectId }, raw: true })) {
            res.status(200).send({ message: "there is already a user project with this userId and projectId" });
        }
        else {
            await UserProject.create({
                userId,
                projectId
            });
            res.status(200).send({ message: "UserProject inserted" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" });
    }
};


const getUserProjectsForUser = async (req, res) => {
    let user_id = req.params.user_id;
    let userProject = await UserProject.findAll({
        where: {
            userId: user_id
        }
    });
    if (!userProject) {
        res.status(400).send({ message: "UserProject does not exist" });
    } else
        res.status(404).json(userProject);
}

const getAllUserProjects = async (req, res) => {
    try {
        const userProjects = await UserProject.findAll();
        res.status(200).send(userProjects);
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" });
    }
}


module.exports = {
    getUserProjectsForUser,
    createUserProject,
    getAllUserProjects
};
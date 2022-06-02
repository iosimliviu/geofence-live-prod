const Notification = require("../models/index.js").Notification;

const createNotification = async (req, res) => {
    try {
        const { notifyText } = req.body;

        await Notification.create({
            notifyText
        });
        res.status(200).send({ message: "Notification inserted" });
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" });
    }
};

const updateNotification = async (req, res) => {
    try {
        const { id } = req.params;
        let notifyText = req.body.notifyText;

        const notification = await Notification.findOne({
            where: {
                id
            }
        });
        if (!notification) {
            res.status(400).send({ message: "notification does not exist" });
        }
        else {
            const updatedNotification = await notification.update({
                ...notification,
                notifyText: notifyText,
            });
            res.status(200).send({ updatedNotification, message: "notification has been updated" });

        }
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "server error" })
    }
}

const getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll();
        res.status(200).send(notifications);
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Server error" })
    }
};

const deleteNotification = async (req, res) => {
    const notificationId = req.params.id;
    try {
        Notification.findOne({
            where: {
                id: notificationId,
            },
        }).then((result) => {
            if (result) {
                result.destroy();
                res.status(200).send({
                    message: "Notification deleted",
                });
            } else
                res.status(404).send({
                    message: "Could not find notification",
                });
        });
    } catch (e) {
        res.status(500).send({ message: "Server error" });
    }
};

module.exports = {
    createNotification,
    updateNotification,
    getAllNotifications,
    deleteNotification
};
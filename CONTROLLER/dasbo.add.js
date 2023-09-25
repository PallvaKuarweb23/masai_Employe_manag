const { DashboardModel } = require("../MODEL/dashboard.mod");


async function dashboardpost(req, res) {
    try {
        const { First_Name, Last_Name, Email, Department, Salary } = req.body;

        // Check if any of the required fields are blank
        if (!First_Name || !Last_Name || !Email || !Department || Salary === undefined) {
            return res.status(400).json({ "msg": "All fields are required." });
        }

        const employee = new DashboardModel({
            First_Name,
            Last_Name,
            Email,
            Department,
            Salary
        });

        await employee.save();

        res.status(200).json({ "msg": "Employee is added", employee });
    } catch (err) {
        res.status(401).json({ "msg": err.message });
    }
}

module.exports = {
    dashboardpost
};

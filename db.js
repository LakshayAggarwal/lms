const Sequelize = require('sequelize')

const DB = new Sequelize('lmsDb', 'root', 'root', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        min: 0,
        max: 5
    },
    storage: './lms.db'
})

const Course = DB.define('courses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Batch = DB.define('batches', {
    name: {
        name: Sequelize.STRING,
        allowNull: false
    }
})

const Subject = DB.define('subjects', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Teacher = DB.define('teachers', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Lecture = DB.define('lectures', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Student = DB.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

DB.sync()
    .then(() => {
        force: true
        console.log('database has been synced')
    })
    .catch((err) => {
        console.log("error syncing database " + err)
    })

module.exports = {
    Course,
    Batch,
    Subject,
    Teacher,
    Lecture,
    Student
}
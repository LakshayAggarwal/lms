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

/**
 *  Database Models
 * 
 */
const Course = DB.define('courses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Batch = DB.define('batches', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Subject = DB.define('subjects', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Teacher = DB.define('teachers', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Lecture = DB.define('lectures', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Student = DB.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

/** 
 * Relationships 
 */

// One to many Courses:Batches
Course.hasMany(Batch)
Batch.belongsTo(Course)

// One to many Batches:Lectures
Batch.hasMany(Lecture)
Lecture.belongsTo(Batch)

// One to many Courses:Subjects
Course.hasMany(Subject)
Subject.belongsTo(Course)

// One to many Subjects:Teachers
Subject.hasMany(Teacher)
Teacher.belongsTo(Subject)

// One to One Lectures:Teachers
Lecture.belongsTo(Teacher)

// One to many Subject:Lectures
Subject.hasMany(Lecture)
Lecture.belongsTo(Subject)

// many to many Batches:Teachers

// many to many Students:Batches
Batch.belongsToMany(Student, {
    through: 'batch-student',
    timestamps: false
})
Student.belongsToMany(Batch, {
    through: 'batch-student',
    timestamps: false
})


/**
 * Database Sync
 */
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
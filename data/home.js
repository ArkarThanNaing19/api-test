const {tasks} = require('./tasks')

module.exports = {

    home : [
        {
            day1 : {
                id: 1,
                is_current: false,
                progress: 100,
                is_enable: false,
                tasks: tasks
            }
        },
        {
            day2 : {
                id: 2,
                is_current: false,
                progress: 100,
                is_enable: false,
                tasks: tasks
            }
        },
        {
            day3 : {
                id: 3,
                is_current: false,
                progress: 80,
                is_enable: false,
                tasks: tasks
            }
        }
    ]

}

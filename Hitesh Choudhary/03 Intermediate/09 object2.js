var user = {
    firstName: "Pranay",
    lastName: "Gupta",
    role: "Procrastinator",
    loginCount: 69,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

// var courseList = true;
// console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("Complete JS course");
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());

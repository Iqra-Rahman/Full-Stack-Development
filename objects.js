let course = {
    name: " learn css in 3 hrs ",
    lessons: 15,
    creator: "Iqra Rahman",
    length: 182,
    level: 2,
    isFree: true,
    tags: ["html", "css", "web development"]
}

console.log(course.name, course.length)
console.log(course["tags"], course["isFree"])

const  {name, lessons, length, level, isFree, tags, creator}  = course
console.log(`the name of the course is ${name} which have ${lessons} lessons, created by ${creator}. the course is of ${length} minutes
    and its level is ${level}. is the course free? : ${isFree}. the tags for this course are: ${tags}`)
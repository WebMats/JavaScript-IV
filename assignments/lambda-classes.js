// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(InstructorAttr) {
        super(InstructorAttr)
        this.specialty = InstructorAttr.specialty;
        this.favLanguage = InstructorAttr.favLanguage;
        this.catchPhrase = InstructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    addGrade(student) {
        const newGrade = Math.floor((Math.random()*4-3)*20); 
        student.grade = student.grade + newGrade;
    }
}
const chad = new Instructor({
    name: 'Chad',
    location: 'Evanston',
    age: 45,
    gender: 'male',
    favLanguage: 'SQL',
    specialty: 'Databases',
    catchPhrase: `tour de force`
  });

  const lauren = new Instructor({
    name: 'Lauren',
    location: 'Seattle',
    age: 23,
    gender: 'female',
    favLanguage: 'TypeScript',
    specialty: 'Testing',
    catchPhrase: `You rock!`
  });



class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        })
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
        if (this.grade > 70) {
            return `You may now call yourself a Lambda Grad!`
        } else {
            return ` :/ seems like you need to do better on your next projects to graduate...`
        }
    }
}
const james = new Student({
    name: "James",
    location: "NYC",
    age: 25,
    gender: "male",
    previousBackground: "PhD student",
    className: "FSW16",
    favSubjects: ["JS Frameworks", "GraphQL", "Jest" ,"CI servers", "Docker"],
    grade: 98
})
const lumi = new Student({
    name: "Lumi",
    location: "Sacramento",
    age: 24,
    gender: "female",
    previousBackground: "nurse",
    className: "FSW16",
    favSubjects: ["Neo4j", "Clojure", "AWS", "PWAs"],
    grade: 100
})



class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr)
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}
const elizabeth = new ProjectManager({
    name: "Elizabeth",
    location: "Salt Lake City",
    age: 26,
    gender: "female",
    gradClassName: "FSW13",
    favInstructor: "Lauren"
})
const ben = new ProjectManager({
    name: "Ben",
    location: "Los Angeles",
    age: 33,
    gender: "male",
    gradClassName: "FSW12",
    favInstructor: "Chad"
})


//CONSOLE LOGS
console.log(chad.speak());
console.log(lauren.demo('Jest'));
console.log(chad.grade(james, "Javascript"));
james.listsSubjects();
console.log(lumi.PRAssignment("Redux"))
console.log(james.sprintChallenge("Node"));
console.log(elizabeth.standUp("fsw16_eli"));
console.log(ben.debugsCode(lumi, "MongoDB"));
chad.addGrade(lumi);
lauren.addGrade(james);
elizabeth.addGrade(lumi);
ben.addGrade(james);
console.log(lumi.graduate());
console.log(james.graduate());
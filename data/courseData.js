import { ProjectStatus } from '@/public/enums/ProjectStatus';

import csePhoto from '../card-screenshots/cse-background.jpg';
import laundryScheduler from '../card-screenshots/laundry-scheduler.png';

export var courseData = [
  {
    semesterName: "Spring 2023",
    courses: [
      {
        title: "Software Engineering IV",
        courseNumber: "Soft 261",
        instructors: [
          "Dr. Brady Garvin",
          "Dr. Robert Dyer"
        ],
        description: "Software Engineering IV covered topics such as product management, scrum / agile development, common industry meetings for software development, release planning, and open-source contributions. We studied building diagrams and visual elements in respect to visual design principles such as Gestalt rules to efficiently communicate a message to developers, users, or stakeholders. For the final project, we were tasked to contribute and release two features for the Pitivi video-editing platform.",
        outcomes: [
          "I am confident in planning and coordinating meetings for standups, project status, retrospectives, sprint planning, and feature releases.",
          "I have become more confident working with a team under scrum developemnt practices.",
          "I have become condifent when working with a sprint planning board to show project / issue status.",
          "I have learned common practices when contributing to open-source code",
          "I have become moree efficient with collaborative development.",
          "I have improved my visual design skills.",
          "I have become more confident in working with Python."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/soft/#:~:text=261-,Software%20Engineering%20IV,-Prerequisites%3A%C2%A0A%20grade",
        projects: [
          {
            title: "Pitivi Aspect Ratio Features",
            displayImg: csePhoto,
            context: "For the first half of Soft 261, we were tasked to work with classmates to add a feature to Pitivi using Python and release it, practicing Scrum development and common industry meetings such as sprint updates.",
            concept: "The feature we added to Pitivi provides the user options to reset the aspect ratio. The user is able to reset the aspect ratio by fixing its position on a corner or the center of the visual element by the following methods:",
            conceptStepList: [
              "Fixed Width: Maintain the width of a visual element and shrink or grow the height to achieve the original aspect ratio.",
              "Fixed Height: Maintain the height of a visual element and shrink or grow the width to achieve the original aspect ratio.",
            ],
            outcomes: [
              "I have learned the process of open-source feature releases.",
              "I have gotten practice with Scrum development on a software team",
              "I have practiced communicating with stakeholders to gather / negotiate requirements and provide updates.",
              "I have practiced coding in Python and building GUIs with Python libraries."
            ],
            status: ProjectStatus.Finished,
            supportingImgs: [],
          },
          {
            title: "Pitivi Clip Loop Feature",
            displayImg: csePhoto,
            context: "For the second half of Soft 261, we were tasked to work with classmates to research then add a feature to Pitivi and release it, continuing to practice Scrum development and common industry meetings such as sprint updates.",
            concept: "The feature that we researched for addition to Pitivi would allow users to loop any clip on the timeline, including audio, visual, empty clips, or properties of clips. This feature is substantial as it allows users to spend less time looping a clip with effects, improving the editing experience.",
            outcomes: [
              "I have become confident researching prospective features for a product in respect to similar, popular projects.",
              "I have become confident in the process of open-source feature releases.",
              "I have become confident with Scrum development on a software team",
              "I have become confident when communicating with stakeholders to gather / negotiate requirements and provide updates.",
              "I have become confident coding in Python and building GUIs with Python libraries."
            ],
            status: ProjectStatus.Finished,
            supportingImgs: [],
          }
        ]
      },
      {
        title: "Programming Language Concepts",
        courseNumber: "CSCE 322",
        instructors: [
          "Dr. Dung Hoang Tran"
        ],
        description: "Programming Language Concepts covered topics such as RegEx, parsing / analyzing strings or collections, grammars, and high-level programming language concepts.",
        outcomes: [
          "I learned how to define grammars, check if a string is a part of that grammar, and generate valid strings from the grammar.",
          "I learned how different types of programming languages are used and basic concepts about their use cases.",
          "I learned how to design lexers and parsers."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/csce/#:~:text=322-,Programming%20Language%20Concepts,-Prerequisites%3A%C2%A0A%20grade",
      },
      {
        title: "Computer Systems Engineering",
        courseNumber: "CSCE 231",
        instructors: [
          "Dr. Christopher Bohn"
        ],
        description: "Computer Systems Engineering covered low-level computing topics such as bitwise arithmetic, manipulating bits, machine language, I/0, embedded systems, memory management, and hardware-software interaction. The course also taught programming in C and Assembly.",
        outcomes: [
          "I learned how to recreate common library arithmetic through manipulating the bits of numerical inputs.",
          "I learned how to create embedded systems by programming an Arduino Uno for a variety of applications.",
          "I learned basic machine-code osftware vulnerabilities and re-created these attacks in a safe environment.",
          "I learned how to manage memory when working with low-level code.",
          "I have gained confidence in working with C and Assembly."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/csce/#:~:text=Computer%20Systems%20Engineering",
        projects: []
      },
      {
        title: "Technical Comunication I",
        courseNumber: "JGEN 200",
        instructors: [
          "Laura Madeline Wiseman"
        ],
        description: "Technical Communication I is a course that prepares student for activities they may perform in the industry such as writing memos, holding meetings, practicing proper communication and coordination with students on a project, preparing a research proposal, and conducting research for a project with acquired stakeholders.",
        outcomes: [
          "I have bceome confident in framing a project proposal with appeal to investors / stakeholders.",
          "I have become more confident in my collaboration skills for a project.",
          "I have learned the compnenents necessary for documents such as memos, project proposals, research status updates, and research results."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/jgen/#:~:text=Technical%20Communication%20I",
        projects: []
      }
    ]
  },
  {
    semesterName: "Fall 2022",
    courses: [
      {
        title: "Software Engineering III",
        courseNumber: "Soft 260",
        instructors: [
          "Dr. Brady Garvin",
          "Dr. Rahul Purandare"
        ],
        description: "Software Engineering III covered topics such as formal verification of code with Dafny, exploring common function patters such as recursion and different graph-searches. We studied worst-case and best-case scenarios of algorithms inclusive of recurion and graph search. The final project for the corse involved extending a game created by the professors called 'Boost Board Mobile' where we were taksed to implement a graph search to track how close a user is to winning or losing a game.",
        outcomes: [
          "I learned how to prevent bugs in my code by using formal verification tools.",
          "I have become more confident using react-redux through some web dev assignments throughout the course.",
          "I have learned the benefits of using graph-search to optimize operations on collections and node systems.",
          "I have become very aware of performance pain-points in my style of coding and now give more thought into the types of algorithms I implement.",
          "I have acquied more tools for analyzing the performance of my code."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/soft/#:~:text=260-,Software%20Engineering%20III,-Prerequisites%3A%C2%A0A%20grade",
        projects: [
          {
            title: "Boost Board Mobile",
            displayImg: csePhoto,
            context: "This was the final project for Software Engineering III to test student understanding of react-redux, performance, and graph-search applications.",
            concept: "This project involved students working in groups to determine which user is closest to winning and by how much through implementation of different graph-search functions and node management.",
            outcomes: [
              "I have developed stronger development collaboration skills.",
              "I have acquired the ability to apply graph-search algorithms in a real-life scenario.",
              "I have become more self-aware when writing code to prevent bad performance.",
              "I have acquired more experience in React.js, React-Redux, HTML, CSS, and JS."
            ],
            status: ProjectStatus.Finished,
            githubLink: "https://github.com/CodeCricut/laundry-scheduler",
            supportingImgs: [],
          }
        ]
      },
      {
        title: "Human-Computer Interaction",
        courseNumber: "CSCE 378",
        instructors: [
          "Dr. Alisha Bevins"
        ],
        description: "Human-Computer Interaction focused on designing and testing user interfaces for accessibility and usability. These testing methods include frameworking, mocking, user interviews through each step of the design process, gathering metrics on user interaction with a system, and deriving action items / requirements from user interaction with an interface. The final project of this course included designing a web app that had been heavily tested by users.",
        outcomes: [
          "I practiced conducting effective interviews with customers to acquire helpful feedback.",
          "I learned to test on wireframes and mock interfaces before writing code to reduce development costs.",
          "I practiced deriving requirements from analyzing how users interact with an interface.",
          "I practiced gathering metrics from a user interview to derive a more effetive user interface."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/csce/#:~:text=378-,Human%2DComputer%20Interaction,-Prerequisites%3A%C2%A0A%20grade",
        projects: [
          {
            title: "UNL Laundry Scheduler",
            displayImg: laundryScheduler,
            context: "This is a Buddy Systems project started in a Human-Computer Interaction course and evolved to a project sponsored by UNL Housing that would later be abandoned.",
            concept: "This product would allow users to schedule a load of laundry ( either single or reoccuring occurrence ), view laundry status, and recieve push notifications about laundry.",
            outcomes: [
              "I have developed stronger development collaboration skills.",
              "I have gained more confidence in speaking to stakeholders and negotiating requirements",
              "I have become more efficient in leading user interaction testing to verify wireframes and proposed UI elements",
              "I have acquired more experience in React.js, HTML, Sass (CSS)."
            ],
            status: ProjectStatus.Abandoned,
            projectLink: "",
            githubLink: "https://github.com/CodeCricut/laundry-scheduler",
            supportingImgs: [],
          }
        ]
      }
    ]
  },
  {
    semesterName: "Spring 2022",
    courses: [
      {
        title: "Software Engineering II",
        courseNumber: "Soft 161",
        semester: "Spring 2021",
        instructors: [
          "Dr. Christopher Bohn",
          "Dr. Shruti Bolman"
        ],
        description: "Soft 161 extended concepts learned in Soft 160 by teaching database systems, mutli-layer programming, and event-driven programming.",
        outcomes: [
          "I was exposed to good database design and learned basic concepts of persistent data storage.",
          "I learned how to separate code into different layers, allowing for better maintainabaility and efficiency.",
          "I learned how to drive programs with events and more types of user interaction.",
          "I more gained experience with texting complex software systems to promote safety."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/soft/#:~:text=161-,Software%20Engineering%20II,-Prerequisites%3A%C2%A0A%20grade",
        projects: [
          {
            title: "UNL Travel Planning App",
            displayImg: csePhoto,
            context: "This project was the capstone / final project for the course. We built the project using Java and Python on a virtual machine running Ubuntu alongside four classmates. This project implemented using MariaDB for data storage and Kivy for the frontend.",
            concept: "This app is designed to help a user plan a trip, including scheduling venues, airplanes, and activities for the trip. Our app was capable of storing user data and mocked integration with external airline / venue systems.",
            outcomes: [
              "I learned how to build a multi-layer application.",
              "I gained experience making user-facing frontend design decisions.",
              "I learned how to design a frontend system using GUIs.",
              "I extended my understanding of Java, Python, and SQL.",
              "I extended my collaboration abilities by working with other students."
            ],
            status: ProjectStatus.Finished,
          }
        ],
      },
      {
        title: "Honors Introduction to Discrete Structures",
        courseNumber: "CSCE 235H",
        instructors: [
          "Dr. Berthe Choueiry"
        ],
        description: "Intro to discrete structures covered operations and proofs on data collections such as matricies, recursions, sets, graphs, etc. The course also covered a variety of boolean properties with research applications.",
        outcomes: [
          "I gained a greater understanding of how to implement and measure the time of recursion problems.",
          "I have gained confidence in working with boolean properties and laws.",
          "I have gained confidence in working with set properties and laws.",
          "I am now able to use set and boolean laws to reduce the amount of operations applied to collections and conditionals."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/csce/#:~:text=Honors%3A%20Introduction%20to%20Discrete%20Structures",
      }
    ]
  },
  {
    semesterName: "Fall 2021",
    courses: [
      {
        title: "Software Engineering I",
        courseNumber: "Soft 160",
        instructors: [
          "Dr. Christopher Bohn",
          "Dr. Suzanne Person"
        ],
        description: "Soft 160 is an introductory course into the Software Engineering program, teaching collaborative programming fundamentals and the basics of coding.",
        outcomes: [
          "I developed basic problem-solving skills within the context of computing and collaborative work",
          "I gained experience working on a project with real-life applications.",
          "I developed common techniques for debugging, testing, and writing code.",
          "I learned how to make code maintainable with a variety of coding artifacts such as documentation or requirements."
        ],
        courseLink: "https://catalog.unl.edu/undergraduate/courses/soft/#:~:text=160-,Software%20Engineering%20I,-Prerequisites%3A%C2%A0MATH",
        projects: [
          {
            title: "UNL Controlled Burn Planner",
            displayImg: csePhoto,
            context: "This project was the capstone / final project for the course. We built the project using Java on a virtual machine running Ubuntu alongside four classmates.",
            concept: "This project hooked into the Open-Source Weather API to gather configurations from a user in command-line and data about the weather in a specific location to determine if a controlled burn was viable by regulative standards.",
            outcomes: [
              "I learned basic software collaboration skills by working with classmates as a development group.",
              "I improved my ability to decompose requirements into tasks and issues.",
              "I became more efficient in building unit and integration testing suites.",
              "I acquired real-world experience in applying object-oriented programming with Java."
            ],
            status: ProjectStatus.Finished
          }
        ],
      }
    ]
  },
];

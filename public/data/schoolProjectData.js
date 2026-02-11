import { ProjectStatus } from 'public/enums/projectStatus';
import laundryScheduler from 'public/card-screenshots/laundry-scheduler-cover-image.png';

export const schoolProjectData = [
  {
    title: "Pitivi Aspect Ratio Features",
    shortTitle: "Pitivi Aspect Ratio",
    context: "For the first half of Soft 261, we were tasked to work with classmates to add a feature to Pitivi using Python and release it, practicing Scrum development and common industry meetings such as sprint updates.",
    concept: "The feature we added to Pitivi provides the user options to reset the aspect ratio. The user is able to reset the aspect ratio by fixing its position on a corner or the center of the visual element by the following methods:",
    conceptStepList: [
      "Fixed Width: Maintain the width of a visual element and shrink or grow the height to achieve the original aspect ratio.",
      "Fixed Height: Maintain the height of a visual element and shrink or grow the width to achieve the original aspect ratio.",
    ],
    status: ProjectStatus.FINISHED,
    technologies: ["Python", "GTK", "Pitivi", "GitLab", "Scrum", "Agile"],
    supportingImgs: [],
  },
  {
    title: "Pitivi Clip Loop Feature",
    shortTitle: "Pitivi Clip Loop",
    context: "For the second half of Soft 261, we were tasked to work with classmates to research then add a feature to Pitivi and release it, continuing to practice Scrum development and common industry meetings such as sprint updates.",
    concept: "The feature that we researched for addition to Pitivi would allow users to loop any clip on the timeline, including audio, visual, empty clips, or properties of clips. This feature is substantial as it allows users to spend less time looping a clip with effects, improving the editing experience.",
    status: ProjectStatus.FINISHED,
    technologies: ["Python", "GTK", "Pitivi", "GitLab", "Scrum", "Agile"],
    supportingImgs: [],
  },
  {
    title: "Boost Board Mobile",
    shortTitle: "Boost Board",
    context: "This was the final project for Software Engineering III to test student understanding of react-redux, performance, and graph-search applications.",
    concept: "This project involved students working in groups to determine which user is closest to winning and by how much through implementation of different graph-search functions and node management.",
    status: ProjectStatus.FINISHED,
    githubLink: "https://github.com/CodeCricut/laundry-scheduler",
    technologies: ["React.js", "React-Redux", "HTML", "Sass (CSS)", "JavaScript", "GitLab", "Graph-Search"],
    supportingImgs: [],
  },
  {
    title: "UNL Laundry Scheduler",
    shortTitle: "Laundry Scheduler",
    context: "This is a Buddy Systems project started in a Human-Computer Interaction course and evolved to a project sponsored by UNL Housing. This product would allow users to schedule a load of laundry ( either single load or reoccurring ), view laundry status, and receive push notifications about laundry.",
    technologies: ["React.js", "HTML", "Sass (CSS)", "JavaScript", "Figma", "TypeScript", "Smart Socket API", "Material UI"],
    status: ProjectStatus.ABANDONED,
    projectLink: "",
    repoLink: "https://github.com/CodeCricut/laundry-scheduler",
    supportingImgs: [laundryScheduler],
  },
  {
    title: "UNL Travel Planning App",
    shortTitle: "Travel Planner",
    context: "This project was the capstone / final project for the course. We built the project using Java and Python on a virtual machine running Ubuntu alongside four classmates. This project implemented using MariaDB for data storage and Kivy for the frontend.",
    concept: "This app is designed to help a user plan a trip, including scheduling venues, airplanes, and activities for the trip. Our app was capable of storing user data and mocked integration with external airline / venue systems.",
    technologies: ["Java", "Python", "Kivy", "MariaDB", "GitLab"],
    status: ProjectStatus.FINISHED,
    supportingImgs: [],
  },
  {
    title: "UNL Controlled Burn Planner",
    shortTitle: "Controlled Burn",
    context: "This project was the capstone / final project for the course. We built the project using Java on a virtual machine running Ubuntu alongside four classmates.",
    concept: "This project hooked into the Open-Source Weather API to gather configurations from a user in command-line and data about the weather in a specific location to determine if a controlled burn was viable by regulative standards.",
    technologies: ["Java", "GitLab", "GUI"],
    status: ProjectStatus.FINISHED,
    supportingImgs: [],
  }
]
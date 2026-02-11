import { ProjectStatus } from "@/ProjectStatus";

import axelWilson from "public/card-screenshots/axel-wilson-cover-image.webp";
import buddySystems from "public/card-screenshots/buddy-systems-cover-image.webp";
import cookiePantry from "public/card-screenshots/cookie-pantry.webp";
import microsoftCookies from "public/card-screenshots/microsoft-cookies.webp";
import laundryScheduler from 'public/card-screenshots/laundry-scheduler-cover-image.webp';
import cse from "public/card-screenshots/cse-background.webp";

export const projectData = [
  {
    title: "Cookie Jar",
    description:
      "This Google Extension provides users easy control over their cookies, providing them the ability to view, search, manipulate, import, export, and store cookies on Google's storage system.",
    status: ProjectStatus.FINISHED,
    projectLink: "https://bit.ly/freemycookies",
    repoLink: "https://github.com/buddysystems/CookieJar",
    supportingImgs: [cookiePantry, microsoftCookies],
  },
  {
    title: "BuddySystems Site",
    description:
      "Conceived following the 2022 Cornhacks, this website is designed to showcase the members of Buddy Systems and the work we do together.",
    technologies: ["React.js", "HTML", "Sass (CSS)", "JavaScript"],
    status: ProjectStatus.ABANDONED,
    projectLink: "https://buddysystems.github.io",
    repoLink: "https://github.com/buddysystems/buddysystems.github.io",
    supportingImgs: [buddySystems],
  },
  {
    title: "Axel Wilson's Music Maker",
    description:
      'This application provides users a unique way to search for music recommendations, allowing them to search for music by generating a "path" of recommendations.',
    status: ProjectStatus.IN_PROGRESS,
    repoLink: "https://github.com/ckildare/RetroPlaylistGenerator",
    supportingImgs: [axelWilson],
  },
  {
    title: "UNL Laundry Scheduler",
    description:
      "This is a Buddy Systems project started in a Human-Computer Interaction course and evolved to a project sponsored by UNL Housing. This product would allow users to schedule a load of laundry ( either single load or reoccurring ), view laundry status, and receive push notifications about laundry.",
    repoLink: "https://github.com/CodeCricut/laundry-scheduler",
    supportingImgs: [laundryScheduler],
  },
  {
    title: "Pitivi Aspect Ratio Features",
    description:
      "Added a feature to the Pitivi open-source project providing the user options to reset and manipulate the aspect ratio of visual elements through a variety of methods.",
    supportingImgs: [cse],
  },
  {
    title: "Pitivi Clip Loop Feature",
    description:
      "Added a feature to the Pitivi open-source project allowing users to loop any clip on the project's timeline, including audio, visual, empty clips, or properties of clips. This feature is substantial as it allows users to spend less time looping a clip with effects, improving the editing experience.",
    supportingImgs: [cse],
  },
  {
    title: "Boost Board Mobile",
    description:
      "Worked in a group of classmates to predict the remaining duration of a Boost Board Mobile game through the implementation of different graph-search functions and node management.",
    supportingImgs: [cse],
  },
  {
    title: "UNL Travel Planning App",
    description:
      "This app is designed to help a user plan a trip, including scheduling venues, airplanes, and activities for the trip. Capabilities included storing user data and mocked integration with external airline / venue systems.",
    supportingImgs: [cse],
  },
  {
    title: "UNL Controlled Burn Planner",
    description:
      "Integrated with the Open-Source Weather API to gather configurations from a user in command-line and data about the weather in a specific location to determine if a controlled burn was viable by regulative standards.",
    supportingImgs: [cse],
  },
];

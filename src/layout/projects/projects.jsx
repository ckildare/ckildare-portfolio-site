import { ProjectStatus } from '@/ProjectStatus'

import axelWilson from 'public/card-screenshots/axel-wilson-cover-image.png';
import buddySystems from 'public/card-screenshots/buddy-systems-cover-image.png';
import cookiePantry from 'public/card-screenshots/cookie-pantry.png';
import microsoftCookies from 'public/card-screenshots/microsoft-cookies.png';

export const projectData = [
  {
    title: "Cookie Jar",
    description: "This Google Extension provides users easy control over their cookies, providing them the ability to view, search, manipulate, import, export, and store cookies on Google's storage system.",
    status: ProjectStatus.FINISHED,
    projectLink: "https://bit.ly/freemycookies",
    repoLink: "https://github.com/buddysystems/CookieJar",
    supportingImgs: [cookiePantry, microsoftCookies],
  },
  {
    title: "BuddySystems Site",
    description: "Conceived following the 2022 Cornhacks, this website is designed to showcase the members of Buddy Systems and the work we do together.",
    technologies: ["React.js", "HTML", "Sass (CSS)", "JavaScript"],
    status: ProjectStatus.ABANDONED,
    projectLink: "https://buddysystems.github.io",
    repoLink: "https://github.com/buddysystems/buddysystems.github.io",
    supportingImgs: [buddySystems],
  },
  {
    title: "Axel Wilson's Music Maker",
    description: "This application provides users a unique way to search for music recommendations, allowing them to search for music by generating a \"path\" of recommendations.",
    status: ProjectStatus.IN_PROGRESS,
    repoLink: "https://github.com/ckildare/RetroPlaylistGenerator",
    supportingImgs: [axelWilson],
  },
]
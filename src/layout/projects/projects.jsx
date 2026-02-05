import { ProjectStatus } from 'public/enums/projectStatus';

import axelWilson from 'public/card-screenshots/axel-wilson-cover-image.png';
import buddySystems from 'public/card-screenshots/buddy-systems-cover-image.png';
import deprecatedPortfolioSite from 'public/card-screenshots/portfolio-site-cover-image.png';
import cookiePantry from 'public/card-screenshots/cookie-pantry.png';
import microsoftCookies from 'public/card-screenshots/microsoft-cookies.png';

export const projectData = [
  {
    title: "Current Portfolio Site",
    shortTitle: "Portfolio Site",
    context: "This is the upgrade to my previous portfolio site. This version of my website has some better styling and presentation of my work. I plan to continually hydrate this website with more information as I progress through my career!",
    technologies: ["React.js", "Next.js", "HTML", "Sass (CSS)", "JavaScript", "Vercel", "Vercel Analytics"],
    status: ProjectStatus.FINISHED,
    projectLink: "https://connorkildare.com",
    repolink: "https://github.com/ckildare/ckildare.github.io",
    supportingImgs: [],
  },
  {
    title: "Cookie Jar",
    shortTitle: "Cookie Jar",
    context: "This is a Buddy Systems project completed in the summer of 2022 that allowed us to learn how to hook into the Google API and manage our cookies.",
    concept: "This product would allow users to view, search, manipulate, import, export, and store cookies on Google's storage system where cookies can only be accessed by the user.",
    technologies: ["HTML", "Sass (CSS)", "JavaScript", "Google API", "Google Storage", "Google Extension", "Memory Management"],
    status: ProjectStatus.FINISHED,
    projectLink: "https://bit.ly/freemycookies",
    repoLink: "https://github.com/buddysystems/CookieJar",
    supportingImgs: [cookiePantry, microsoftCookies],
  },
  {
    title: "BuddySystems Site",
    shortTitle: "Buddy Systems",
    context: "This site was designed after the 2022 Cornhacks event, where my team members and I formed \"Buddy Systems\" to organize the work we do together as a group. This website is designed to showcase the members of Buddy Systems and the work we do together.",
    technologies: ["React.js", "HTML", "Sass (CSS)", "JavaScript"],
    status: ProjectStatus.ABANDONED,
    projectLink: "https://buddysystems.github.io",
    repoLink: "https://github.com/buddysystems/buddysystems.github.io",
    supportingImgs: [buddySystems],
  },
  {
    title: "Axel Wilson's Music Maker",
    shortTitle: "AWMM",
    context: "I helped build Axel Wilson's Music Maker ( AWMM ) during the 2022 Cornhacks hackathon using the theme, \“Retro\”.",
    concept: "AWMM is a dynamic web application that utilizes Spotify's web API that allows users to search for a song and receive a playlist of similar songs based on the searched song. The user can then select songs from the playlist to continue the process of receiving more recommended songs based on the selected songs.",
    technologies: ["React.js", "HTML", "Sass (CSS)", "JavaScript", "Python", "GraphQL", "Spotipy API", "Heroku"],
    status: ProjectStatus.IN_PROGRESS,
    repoLink: "https://github.com/ckildare/RetroPlaylistGenerator",
    supportingImgs: [axelWilson],
  },
  {
    title: "Deprecated Portfolio Site",
    shortTitle: "Deprecated Site",
    context: "My first portfolio site was built to practice my frontend development skills and show internships as an example of the work I would be able to do.",
    concept: "This site included information on projects that I had completed, a short about me section, a link to my resume, and a few contact links. Although it was small, it was effective in communicating my experiences.",
    technologies: ["HTML", "Sass (CSS)", "Bootstrap", "JavaScript", "GitHub Pages", "Google Analytics", "Google Domains"],
    status: ProjectStatus.FINISHED,
    repoLink: "https://github.com/ckildare/deprecated-portfolio-site",
    supportingImgs: [deprecatedPortfolioSite],
  }
]
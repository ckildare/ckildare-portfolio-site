import {
  SiHtml5,
  SiSass,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiBootstrap,
  SiMui,
  SiMongodb,
  SiPostman,
  SiJira,
  SiAmazonwebservices,
  SiGooglecloud,
  SiRabbitmq,
  SiDatadog,
  SiNewrelic,
  SiGithub,
  SiMysql,
} from "react-icons/si";

import { VscAzureDevops } from "react-icons/vsc";
import { TbApiApp , TbBrandCSharp, TbBrandReactNative  } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

export const technologies = [
  { name: "HTML / CSS", icon: SiHtml5 },
  { name: "Sass", icon: SiSass },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "SQL", icon: SiMysql },
  { name: "C#", icon: TbBrandCSharp },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "EF Core", icon: TbBrandCSharp },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Go", icon: SiGo },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Material UI", icon: SiMui },
];

export const tools = [
  { name: "Jira", icon: SiJira },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SSMS", icon: DiMsqlServer },
  { name: "Postman", icon: SiPostman },
  { name: "REST API", icon: TbApiApp },
  { name: "Google Cloud Run", icon: SiGooglecloud },
  { name: "Azure DevOps", icon: VscAzureDevops },
  { name: "Datadog", icon: SiDatadog },
  { name: "New Relic", icon: SiNewrelic },
  { name: "RabbitMQ", icon: SiRabbitmq },
  { name: "GitHub", icon: SiGithub },
];
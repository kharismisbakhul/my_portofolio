import { SiNextdotjs, SiTailwindcss, SiReact, SiStrapi, SiPostgresql, SiNodedotjs, SiTypescript, SiGithub, SiLaravel, SiMongodb, SiExpress, SiRedis, SiSocketdotio, SiCodeigniter, SiJquery, SiBootstrap, SiPhpmyadmin, SiMysql, SiDocker, SiJson, SiJavascript } from "react-icons/si";
import { FaNetworkWired, FaMobileAlt } from "react-icons/fa"; // For generic API/Web service, REST APIs and PWA

const getStackIcon = (stack: string) => {
  switch (stack.toLowerCase()) {
    case "next.js":
      return SiNextdotjs;
    case "tailwind css":
      return SiTailwindcss;
    case "react.js":
      return SiReact;
    case "strapi":
      return SiStrapi;
    case "postgresql":
      return SiPostgresql;
    case "node.js":
      return SiNodedotjs;
    case "typescript":
      return SiTypescript;
    case "github":
      return SiGithub;
    case "websocket":
      return SiSocketdotio;
    case "redis":
      return SiRedis;
    case "laravel":
      return SiLaravel;
    case "mongodb":
      return SiMongodb;
    case "express.js":
      return SiExpress;
    case "code igniter":
      return SiCodeigniter;
    case "ajax":
      return SiJavascript;
    case "json":
      return SiJson;
    case "model-view-controller (mvc)":
    case "application programming interfaces (api)":
    case "web services api":
    case "rest apis":
      return FaNetworkWired;
    case "jquery":
      return SiJquery;
    case "bootstrap (framework)":
      return SiBootstrap;
    case "phpmyadmin":
      return SiPhpmyadmin;
    case "mysql":
      return SiMysql;
    case "docker":
      return SiDocker;
    case "progressive web applications (pwas)":
      return FaMobileAlt;
    default:
      return null;
  }
};

export default getStackIcon;

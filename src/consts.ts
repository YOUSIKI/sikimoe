import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Siki.moe",
  DESCRIPTION: "Welcome to Siki.moe, a personal portfolio and blog.",
  AUTHOR: "YouSiki",
}

// Career Page
export const CAREER: Page = {
  TITLE: "Career",
  DESCRIPTION: "Places I have studied and worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Publications Page
export const PUBLICATIONS: Page = {
  TITLE: "Publications",
  DESCRIPTION: "Publications I have contributed to.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all contents by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Publications",
    HREF: "/publications",
  },
  {
    TEXT: "Career",
    HREF: "/career",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "you.siki@outlook.com",
    HREF: "mailto:you.siki@outlook.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "yousiki",
    HREF: "https://github.com/yousiki/"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "yousiki",
    HREF: "https://www.linkedin.com/in/yousiki/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "__yousiki__",
    HREF: "https://x.com/__yousiki__/",
  },
]


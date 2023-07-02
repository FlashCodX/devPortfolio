import "server-only";

import data from "../../data/projects.json";

type Project = {
  id: string;
  name: string;
  url: string;
  images: {};
  description: string;
  tags: string[];
  featured: boolean;
};

type BreakPoint = {};

type Image = {
  url: string;
  alt: string;
};

export default function getProjects() {
  const projects = data.data;
  return projects;
}

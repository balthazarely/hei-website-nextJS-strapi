import { SimpleGrid, Box } from "@chakra-ui/react";
import ProjectGridItem from "./ProjectGridItem";

export default function ProjectGrid({ projects, filter }) {
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((proj) => proj.type === filter);

  return (
    <>
      {filter}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {filteredProjects.map((project) => (
          <ProjectGridItem project={project} filter={filter} />
        ))}
      </SimpleGrid>
    </>
  );
}

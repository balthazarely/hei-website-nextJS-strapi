import Link from "next/link";
import { useState } from "react";
import { API_URL } from "../utils/urls";
import { Flex } from "@chakra-ui/react";
import SectionHero from "../components/layout/SectionHero";
import ProjectGrid from "../components/layout/ProjectGrid";
import ProjectFilter from "../components/layout/ProjectFilter";

export default function Portfolio({ portfolio_projects }) {
  const [filter, setFilter] = useState("All");

  const handeleFilterChange = (type) => {
    setFilter(type);
  };
  return (
    <>
      <SectionHero pageTitle="Portfolio" />
      <ProjectFilter handeleFilterChange={handeleFilterChange} />
      <ProjectGrid projects={portfolio_projects} filter={filter} />
      {/* <Flex w={"full"} h={"100vh"} pt={100}>
   {portfolio_projects.map((project) => (
        <Link href={`portfolio/${project.slug}`} key={project.id}>
          <h4>{project.name}</h4>
        </Link>
      ))}
    </Flex> */}
    </>
  );
}

export async function getStaticProps() {
  const projects_res = await fetch(`${API_URL}/projects`);
  const portfolio_projects = await projects_res.json();
  return {
    props: {
      portfolio_projects,
    },
  };
}

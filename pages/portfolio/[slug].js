import { API_URL } from "../../utils/urls";

const Portfolio_Project = ({ project }) => {
  return <div>{project.name}</div>;
};

export async function getStaticPaths() {
  const projects_res = await fetch(`${API_URL}/projects`);
  const portfolio_projects = await projects_res.json();
  // return them to nextJS context
  return {
    paths: portfolio_projects.map((project) => ({
      params: { slug: String(project.slug) },
    })),
    fallback: false, // 404 if param is not matched
  };
}

export async function getStaticProps({ params: { slug } }) {
  const projects_res = await fetch(`${API_URL}/projects/?slug=${slug}`);
  const found = await projects_res.json();
  return {
    props: {
      project: found[0],
    },
  };
}

export default Portfolio_Project;

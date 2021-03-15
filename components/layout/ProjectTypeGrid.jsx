import { SimpleGrid, Box } from "@chakra-ui/react";
import Image from "next/image";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProjectTypeGridItem from "./ProjectTypeGridItem";

export default function ProjectTypeGrid() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }}>
      {backgroundImage.map((image) => (
        <ProjectTypeGridItem {...image} />
      ))}
    </SimpleGrid>
  );
}

const backgroundImage = [
  { section: "Commercial", image: "./images/Commercial.jpeg" },
  { section: "Residental", image: "./images/Residental.jpeg" },
  { section: "Energy", image: "./images/Solar.jpeg" },
];

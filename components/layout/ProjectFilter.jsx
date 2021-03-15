import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

export default function ProjectFilter({ handeleFilterChange }) {
  return (
    <Flex align="center" justify="center" my="5">
      <Box d="flex" alignItems="baseline">
        <Box mx="3">
          <Button
            colorScheme="blue"
            variant="ghost"
            onClick={() => handeleFilterChange("All")}
          >
            All
          </Button>
        </Box>
        <Box mx="3">
          <Button
            colorScheme="blue"
            variant="ghost"
            onClick={() => handeleFilterChange("Residental")}
          >
            Residental
          </Button>
        </Box>
        <Spacer />
        <Box mx="3">
          <Button
            colorScheme="blue"
            variant="ghost"
            onClick={() => handeleFilterChange("Commercial")}
          >
            Commercial
          </Button>
        </Box>
        <Spacer />
        <Box mx="3">
          <Button
            colorScheme="blue"
            variant="ghost"
            onClick={() => handeleFilterChange("Energy")}
          >
            Energy
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

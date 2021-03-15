import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SectionHero({ pageTitle }) {
  return (
    <Flex
      mt={"100px"}
      w={"full"}
      h={"200px"}
      backgroundImage="url(./images/fruitdale-1.jpg)"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-t, rgba(36,79,116,0.5), rgba(36,79,116,0.5))"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            align={"center"}
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "5xl", md: "6xl" })}
          >
            {pageTitle}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}

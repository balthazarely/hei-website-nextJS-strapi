import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      mt={"100px"}
      w={"full"}
      h={"70vh"}
      backgroundImage="url(./images/fruitdale-1.jpg)"
      //   backgroundImage={
      //     "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      //   }
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
            Creating Sustainable Communities
          </Text>
          <Text
            align={"center"}
            color={"white"}
            fontWeight={300}
            lineHeight={1.2}
            maxW={useBreakpointValue({ base: "400px", md: "500px" })}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            Developing and Investmenting in Sustainable Redevelopment and
            Renewable Energy.
          </Text>
          '
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              OUR PORTFOLIO
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <Flex
      mt={"100px"}
      w={"full"}
      h={"70vh"}
      className={styles.parralaxContainer}
      //   backgroundImage="url(./images/fruitdale-1.jpg)"
      //   backgroundSize={"cover"}
      //   backgroundPosition={"center center"}
      overflow="hidden"
    >
      <ParallaxBanner
        className={styles.parralax}
        layers={[
          {
            image: "/images/fruitdale-1.jpg",
            amount: 0.3,
          },
        ]}
        style={{
          height: "70vh",
        }}
      >
        <div className={styles.bannerOverlay}></div>
        <VStack
          w={"full"}
          h={"100%"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          //   bgGradient={"linear(to-t, rgba(36,79,116,0.5), rgba(36,79,116,0.5))"}
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Parallax className="custom-class" y={[-0, 0]} tagOuter="div">
              <Text
                align={"center"}
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "5xl", md: "6xl" })}
              >
                Creating Sustainable Communities
              </Text>
            </Parallax>
            <Parallax className="custom-class" y={[-0, 0]} tagOuter="div">
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
            </Parallax>
            <Stack direction={"row"}>
              <Parallax className="custom-class" y={[-0, 0]} tagOuter="div">
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  OUR PORTFOLIO
                </Button>
              </Parallax>
            </Stack>
          </Stack>
        </VStack>
      </ParallaxBanner>
    </Flex>
  );
}

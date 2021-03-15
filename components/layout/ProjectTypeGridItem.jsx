import Image from "next/image";

import { Box, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BoxContainer = motion(Box);
const MotionText = motion(Text);

export default function ProjectTypeGridItem({ image, section }) {
  return (
    <BoxContainer
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ cursor: "pointer" }}
    >
      <Flex
        w={"full"}
        h={{ sm: "300px", md: "300px", lg: "300px" }}
        backgroundImage={`url(${image})`}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack w={"full"} justify={"center"}>
          <BoxContainer
            w={"full"}
            h={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={BoxMotion}
          >
            <MotionText
              variants={textMotion}
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", lg: "4xl" })}
            >
              {section}
            </MotionText>
          </BoxContainer>
        </VStack>
      </Flex>
    </BoxContainer>
  );
}

const textMotion = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const BoxMotion = {
  rest: {
    background: "rgba(44, 82, 130, .65)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    background: "rgba(44, 82, 130, 0)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

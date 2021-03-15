import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";

const FullPageMenu = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  /* transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-100%)"}; */
`;

const menuVarient = {
  visible: {
    transform: "translateX(0%)",
    transition: { ease: "easeOut", duration: 0.25 },
  },
  hidden: {
    transform: "translateX(-100%)",
    transition: { ease: "easeOut", duration: 0.25 },
  },
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default function Menu({ isOpen, setIsOpen }) {
  return (
    <FullPageMenu
      initial={false}
      animate={isOpen ? "visible" : "hidden"}
      variants={menuVarient}
    >
      <Box bg="tomato" w="100%" h="100%" p={4} color="white">
        <Flex
          color="white"
          align="center"
          direction="column"
          justify="space-between"
          w="100%"
          //   mb={8}
          //   p={8}
        >
          <Stack
            spacing={8}
            //   direction={["row"]}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">about </MenuItem>
            <MenuItem to="/contact">contact </MenuItem>
            <MenuItem to="/pricing">Pricing </MenuItem>
          </Stack>
        </Flex>
      </Box>
    </FullPageMenu>
  );
}

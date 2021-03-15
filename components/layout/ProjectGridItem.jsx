import Image from "next/image";
import { useState } from "react";
import { Box, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "../styles/ProjectGridItem.module.css";
import { Spinner } from "@chakra-ui/react";

const BoxContainer = motion(Box);
const MotionText = motion(Text);

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opactiy: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export default function ProjectGridItem({ project }) {
  const { API_URL } = process.env;
  const { url, width, height } = project.heroImage;
  //   const [loading, setLoading] = useState(true);

  //   const handleLoad = (e) => {
  //     if (e.target.srcset) {
  //       console.log("image loaded");
  //       setLoading(false);
  //     }
  //   };

  return (
    <BoxContainer
      className={styles.imageWrapper}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Image
        // onLoad={handleLoad}
        src={API_URL + url}
        layout="fill"
        className={styles.imageItem}
      />
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

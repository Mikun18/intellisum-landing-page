import React, { useState } from "react";
import { Box, Text, Image, Flex } from "../Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <Box
        py={4}
        px={{ _: 2, sm: 3, lg: 6 }}
        display={{ _: "none", md: "block" }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Image src="./Image/logo.AVIF" alt="logo" width="150px" />
          </Box>

          <Box>
            <Flex>
              <Text>Solutions</Text>
              <Text mx={5} fontSize={3} color="#161616">
                Company
              </Text>
              <Text>Pricin</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box>
        <SmallerNavbar />
      </Box>
    </div>
  );
};

const SmallerNavbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div>
      <Box py={4} px={{ _: 2, sm: 3, lg: 6 }} display={{ md: "none" }}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Image src="./Image/logo.AVIF" alt="logo" width="150px" />
          </Box>

          <Box>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              onClick={() => setShowSideBar(true)}
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          </Box>
        </Flex>
      </Box>

      <Box>
        <AnimatePresence>
          {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}
        </AnimatePresence>
      </Box>
    </div>
  );
};

const SideBar = ({ setShowSideBar }) => {
  const modalVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    close: {
      x: "100vw",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <Box
        bgmodal
        as={motion.div}
        variants={modalVariant}
        animate="visible"
        initial="hidden"
        exit="close"
      >
        <Box py={4} px={4}>
          <Box>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Image src="./Image/logo.AVIF" alt="logo" width="150px" />
              </Box>

              <Box>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setShowSideBar(false)}
                  style={{ fontSize: "28px", cursor: "pointer" }}
                />
              </Box>
            </Flex>
          </Box>

          <Box my={5}>
            <Text fontSize={8}>Solutions</Text>
            <Text fontSize={8} my={4}>
              Company
            </Text>
            <Text fontSize={8}>Pricing</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;

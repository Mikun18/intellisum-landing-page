import React from "react";
import { Box, Header, Image, Flex, Button, Text } from "../../Base";

const Hero = () => {
  return (
    <div>
      <Box px={{ _: 2, sm: 3, lg: 6 }} py={5}>
        <Flex justifyContent="space-between" flexDirection={{_:'column', md:'row'}}>
          <Box>
            <Header
              width={{ _: "100%", md: "450px", lg: "500px", xl: "739px" }}
              fontSize={{ _: 7, sm: 10, xl: 14 }}
            >
              Unlock Infinite Knowledge: AI-Powered Q&A Generation at Your
              Fingertips!
            </Header>

            <Text
              fontSize={4}
              width={{ _: "100%", md: "400px", lg: "590px" }}
              py={2}
            >
              Manage your testing process end to end with Intellisum.
            </Text>

            <Box my={{_:4, sm:5}}>
              <Button variant="primary">Request a Demo</Button>
              <Button variant="secondary" mx={4}>
                <Flex alignItems="center">
                  <Image src="./Image/video.svg" alt="media" width="15px" />
                  <Text mx={2}>Watch Video</Text>
                </Flex>
              </Button>
            </Box>
          </Box>

          <Box>
            <Image src="./Image/union.AVIF" alt="hero" width="100%" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;

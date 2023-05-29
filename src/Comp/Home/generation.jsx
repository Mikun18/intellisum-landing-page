import React from "react";
import { Box, Flex, Header, Text, Image, Button } from "../../Base";

const Generation = () => {
  return (
    <div>
      <Box px={{ _: 2, sm: 3, lg: 6 }} py={{_:4, sm:7}}>
        <Flex
          justifyContent=""
          flexDirection={{ _: "column-reverse", md: "row" }}
          alignItems={{_:'center'}}
        >
          <Box>
            <Image src="./Image/question.AVIF" alt="question" width="" gen/>
          </Box>

          <Box mx={{ _: 0, md:4, xl: 7 }}>
            <Header py={3} width={{ _: "100%" }} fontSize={{_:7, md:10}}>
              Question & Answer Generation
            </Header>
            <Text width={{ _: "100%", xl: "600px" }}>
              By harnessing the power of cutting-edge artificial intelligence
              and natural language processing, Intellisum analyzes your uploaded
              texts, intelligently identifies key information, and generates
              comprehensive questions and accurate answers. Whether you're a
              student looking to study more efficiently, a researcher in need of
              quick references, or a knowledge seeker eager to explore vast
              volumes of information, X empowers you to delve deep into the
              texts that matter most to you.
            </Text>
            {/* <Text width={{ _: "100%", lg: "700px" }} py={3}>
              This invaluable resource helps you assess your knowledge, identify
              areas of improvement, and reinforce key concepts. Prepare with
              confidence, maximize your exam readiness, and achieve academic
              success with our AI-powered question and answer generation
              feature.
            </Text> */}

            <Box py={4}>
              <Button variant="primary">Request a Demo</Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Generation;

import React from "react";
import { Box, Text, Flex } from "../../Base";

const Struggle = () => {
  return (
    <div>
      <Box px={{ _: 2, sm: 3, lg: 6 }} bg="black" color="white" py={4}>
        <Flex justifyContent="" flexDirection={{ _: "column", md: "row" }}>
          <Box>
            <Text fontSize={7} width={{ _: "255px" }}>
              Struggling with information overload?
            </Text>
          </Box>

          <Box
            mx={{ _: 0, md: 4 }}
            borderLeft={{ _: "none", md: "1px solid white" }}
            borderTop={{ _: "1px solid white", md: "none" }}
          >
            <Text
              width={{ _: "100%", xl: "558px" }}
              mx={{ _: 0, md: 4 }}
              my={{ _: 3, md: 0 }}
              fontSize={{ _: 3 }}
            >
              IntelliSum solves the pain points of time-consuming document
              processing, lack of interactivity, and inefficient customer
              service, empowering you with AI-driven solutions."
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Struggle;

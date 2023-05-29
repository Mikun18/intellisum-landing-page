import React from "react";
import { Box, Flex, Text } from "../Base";

const Footer = () => {
  return (
    <div>
      <Box px={{ _: 2, sm: 3, lg: 6 }} py={5} bg="black" color="white">
        <Box>
          <Flex justifyContent='center'>
            <Box>
              <Text color='#8392A6'>Solutions</Text>
              <Text py={3}>Q&A Generation</Text>
            </Box>

            <Box mx={{_:4, md:6}}>
              <Text color='#8392A6'>Company</Text>
              <Text py={3}>About us</Text>
              <Text>Careers</Text>
            </Box>

            <Box>
              <Text color='#8392A6'>Contact us</Text>
              <Text py={3}>01-700-2000</Text>
              <Text>help@intellisum.ai</Text>
              <Text py={3}>business@intellisum.ai</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;

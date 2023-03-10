import { Box, Image, Divider, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import meeting from "../../../assets/meeting.png";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";

import { Link } from "react-router-dom";

const PageOne = () => {
  return (
    <>
      <Box
        w={"80%"}
        h={"100%"}
        pos={"fixed"}
        backgroundColor={"#171c57"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        boxShadow={"3px 3px 200px #000 inset"}
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"flex-end"}
          mb={10}
          px={10}
          gap={5}
          mt={10}
        >
          <Image src={messenger} />
          <Image src={map} />
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"center"}
          w={"100%"}
          px={[20, 20, 20, 20, 40, 60]}
        >
          <Box
            display={"flex"}
            flexDir={"column"}
            w={"100%"}
            px={[0, 0, 0, 0, 0, 10]}
            mb={[0, 0, 0, 0, 0, 20]}
          >
            <Box
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              alignContent={"flex-start"}
              w={"100%"}
              justifyContent={"flex-start"}
              textAlign={"start"}
            >
              <Text
                color={"white"}
                fontFamily={"Poppins"}
                fontSize={25}
                w={["20%", "20%", "20%", "20%", "20%", "15%"]}
              >
                About
              </Text>
              <Divider
                orientation={"horizontal"}
                borderColor={"#E76D0C"}
                borderWidth={3}
                borderRadius={5}
                w={["80%", "80%", "80%", "80%", "80%", "100%"]}
              />
            </Box>
            <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
              Enterprise Bank
            </Text>

            <Text color={"white"} fontFamily={"Poppins"} my={3}>
              Enterprise Bank has been pursuing its mission to serve clients
              especially in the rural areas for the past 47 years.
              <br />
              <br /> Most of the bank’s branches and other offices, ATMs and its
              Head Office, are located in rural areas where access to banking
              services is needed most.
            </Text>
            <Text color={"white"} fontFamily={"Poppins"} my={3}>
              Through its Enterprise Lending, the bank also supports growing
              entrepreneurs and enterprises.
              <br />
              <br />
              From a single unit rural bank from the Municipality of Lianga,
              Surigao del Sur, the bank now operates in selected provinces of
              Mindanao and Visayas.
              <br />
              <br />
              Aside from deposits and loans, Enterprise Bank also offers
              fee-based services such as remittance and bills payment.
            </Text>
          </Box>

          <Image
            src={meeting}
            borderRadius={10}
            w={"40%"}
            ml={10}
            objectFit={"cover"}
          />
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"flex-end"}
          my={10}
          px={10}
          letterSpacing={1}
          gap={3}
          alignItems={"center"}
        >
          <Link to={"/About/directors"}>
            <Image src={right} w={10} />
          </Link>
          <Text fontFamily={"Poppins"} color={"#fff"} fontSize={30}>
            ABOUT
          </Text>

          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            US
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageOne;

import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import { CiUser } from "react-icons/ci";
import { HiBanknotes } from "react-icons/hi2";

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
          px={10}
        >
          <Box display={"flex"} flexDir={"column"} w={"100%"} px={10} mb={10}>
            <Box
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              alignContent={"center"}
              w={"100%"}
              justifyContent={"center"}
            >
              <Text color={"white"} fontFamily={"Poppins"} fontSize={25}>
                Your Success is also
              </Text>
              &nbsp;
              <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
                Our Success
              </Text>
              <Divider
                orientation={"horizontal"}
                borderColor={"#E76D0C"}
                borderWidth={3}
                borderRadius={5}
                w={"40%"}
                ml={4}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={10}
              my={10}
              w={"100%"}
            >
              <Box
                backgroundColor={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                p={5}
                w={300}
                borderRadius={10}
                textAlign={"center"}
                alignItems={"center"}
                color={"#E76D0C"}
              >
                <CiUser size={70} />
                <Text fontFamily={"Poppins"} fontWeight={"bold"} fontSize={25}>
                  Board of Directors
                </Text>
                <Link to={"directors"}>
                  <Text fontFamily={"Poppins"} color={"black"} fontSize={15}>
                    View Board of Directors
                  </Text>
                </Link>
              </Box>
              <Box
                backgroundColor={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                p={5}
                w={300}
                borderRadius={10}
                textAlign={"center"}
                alignItems={"center"}
                color={"#E76D0C"}
              >
                <CiUser size={70} />
                <Text fontFamily={"Poppins"} fontWeight={"bold"} fontSize={30}>
                  Executives
                </Text>
                <Link to={"executives"}>
                  <Text fontFamily={"Poppins"} color={"black"} fontSize={15}>
                    View Executives
                  </Text>
                </Link>
              </Box>
              <Box
                backgroundColor={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                p={5}
                w={300}
                borderRadius={10}
                textAlign={"center"}
                alignItems={"center"}
                color={"#E76D0C"}
              >
                <HiBanknotes size={70} />
                <Text fontFamily={"Poppins"} fontWeight={"bold"} fontSize={30}>
                  Annual Report
                </Text>
                <Link to={"reports"}>
                  <Text fontFamily={"Poppins"} color={"black"} fontSize={15}>
                    View Annual Reports
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
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
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            ABOUT US
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageOne;

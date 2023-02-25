import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import meeting from "../../../assets/meeting.png";
import { Link } from "react-router-dom";

const PageTwo = () => {
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
          px={60}
        >
          <Box display={"flex"} flexDir={"column"} w={"100%"} px={10} mb={20}>
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
                w={"30%"}
              >
                Banking that
              </Text>
              <Divider
                orientation={"horizontal"}
                borderColor={"#E76D0C"}
                borderWidth={3}
                borderRadius={5}
                w={"100%"}
                ml={4}
              />
            </Box>
            <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
              Fits your needs
            </Text>

            <Text color={"white"} fontFamily={"Poppins"} my={3}>
              Enterprise Bank was born in a rural community in the southeastern
              part of the country. Primarily, the bank has a mission to provide
              innovative products and services to small and medium-sized
              enterprises and to ensure that credit is utilized appropriately to
              improve the borrower’s economic well-being.
            </Text>
            <Text color={"white"} fontFamily={"Poppins"} my={3}>
              On the other side, Enterprise Bank promotes savings as a means to
              attain self-sufficiency and self-reliance.
            </Text>
          </Box>

          <Image
            src={meeting}
            borderRadius={10}
            w={"30%"}
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
          <Link to={"/"}>
            <Image src={left} />
          </Link>
          <Link to={"/products"}>
            <Image src={right} />
          </Link>
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            WHAT WE DO
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageTwo;

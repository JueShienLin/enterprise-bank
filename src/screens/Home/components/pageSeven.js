import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import left from "../../../assets/left.png";
import man from "../../../assets/man.jpg";
import woman from "../../../assets/woman.jpg";
import { Link } from "react-router-dom";

const PageSeven = () => {
  return (
    <>
      <Box
        w={"80%"}
        h={"100%"}
        pos={"fixed"}
        backgroundColor={"#e6e6e6"}
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
              <Text fontFamily={"Poppins"} fontSize={25}>
                What our
              </Text>
              &nbsp;
              <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
                Clients Say
              </Text>
              <Divider
                orientation={"horizontal"}
                borderColor={"#E76D0C"}
                borderWidth={3}
                borderRadius={5}
                w={"45%"}
                ml={4}
              />
            </Box>
            <Box
              display={"inline-flex"}
              justifyContent={"center"}
              gap={20}
              my={10}
              ml={20}
              w={"90%"}
              flexWrap={"wrap"}
            >
              <Box
                backgroundColor={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                p={5}
                borderRadius={10}
                gap={5}
                w={350}
                boxShadow={"10px 20px 40px #9c9c9c"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"center"}
                  gap={5}
                >
                  <Image
                    src={man}
                    w={"35%"}
                    borderRadius={10}
                    objectFit={"cover"}
                  />
                  <Text
                    fontFamily={"Poppins"}
                    fontWeight={"medium"}
                    fontSize={15}
                    color={"#E76D0C"}
                  >
                    Owner, Orion Enterprises
                  </Text>
                </Box>

                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"medium"}
                  fontSize={15}
                >
                  Juan Dela Cruz
                </Text>
                <Text fontFamily={"Poppins"} color={"gray"} fontSize={12}>
                  The Enterprise Bank is very influential to the growth of our
                  business
                </Text>
              </Box>
              <Box
                backgroundColor={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                p={5}
                borderRadius={10}
                gap={5}
                w={350}
                boxShadow={"10px 20px 40px #9c9c9c"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"center"}
                  gap={5}
                >
                  <Image
                    src={woman}
                    w={"90%"}
                    borderRadius={10}
                    objectFit={"contain"}
                  />
                  <Text
                    fontFamily={"Poppins"}
                    fontWeight={"medium"}
                    fontSize={15}
                    color={"#E76D0C"}
                  >
                    Owner, Luzvimin Shipping Company
                  </Text>
                </Box>

                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"medium"}
                  fontSize={15}
                >
                  Maria Clara
                </Text>
                <Text fontFamily={"Poppins"} color={"gray"} fontSize={12}>
                  The Enterprise Bank is very influential to the growth of our
                  business
                </Text>
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
          <Link to={"/milestones"}>
            <Image src={left} />
          </Link>

          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            CUSTOMER FEEDBACK
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageSeven;

import {
  Box,
  Divider,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import director from "../../../assets/director.jpg";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";

const PageTwo = () => {
  return (
    <>
      <Box
        w={"80%"}
        h={"100%"}
        pos={"fixed"}
        backgroundColor={"#fff"}
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
              <Text fontFamily={"Poppins"} fontSize={25} w={"15%"}>
                Board of
              </Text>
              <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
                Directors
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
            <Box display={"flex"} flexDir={"row"} gap={10}>
              <Box
                w={"40%"}
                p={10}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <Image
                  src={director}
                  w={"80%"}
                  objectFit={"cover"}
                  borderRadius={10}
                  boxShadow={"10px 20px 40px #9c9c9c"}
                />
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"flex-start"}
                py={10}
                w={"50%"}
              >
                <Text fontFamily={"Poppins"} fontSize={25}>
                  Ignacito U. Alvizo
                </Text>
                <Text fontFamily={"Poppins"} fontSize={14} color={"#E76D0C"}>
                  Founder / Chairman Emeritus
                </Text>
                <Divider
                  orientation={"horizontal"}
                  borderColor={"#E76D0C"}
                  borderWidth={1}
                  borderRadius={5}
                  w={"100%"}
                />
                <UnorderedList
                  my={5}
                  fontFamily={"Poppins"}
                  fontSize={15}
                  spacing={5}
                >
                  <ListItem>
                    Director Alvizo’s expertise in microfinance is highly
                    recognized in the Philippines and abroad. He is a Certified
                    Public Accountant who has extensive working experience as a
                    consultant in microfinance and SME development in Africa,
                    the Middle East, and Asia.
                  </ListItem>
                  <ListItem>
                    His experience and knowledge became tangible when he
                    transformed Enterprise Bank from a single-unit rural bank in
                    Surigao del Sur into an emerging thrift bank that gained a
                    niche in MSME financing.
                  </ListItem>
                  <ListItem>
                    During his membership in the Board of EBI, he also held the
                    chairmanship of Microfinance for Rural Development Inc.
                  </ListItem>
                </UnorderedList>
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
          <Text fontFamily={"Poppins"} color={"#000"} fontSize={30}>
            BOARD OF
          </Text>
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            DIRECTORS
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageTwo;

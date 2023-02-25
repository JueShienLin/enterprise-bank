import { Box, Center, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import aselco from "../../../assets/aselco.png";
import electric from "../../../assets/electric.png";
import water from "../../../assets/water.png";
import hctv from "../../../assets/hctv.png";
import socoteco from "../../../assets/socoteco.png";
import palawan from "../../../assets/palawan.png";
import { Link } from "react-router-dom";

const PageFive = () => {
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
                Over the
              </Text>
              &nbsp;
              <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
                Counter Services
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
            <Center>
              <Box
                display={"flex"}
                justifyContent={"center"}
                gap={20}
                my={10}
                w={"80%"}
                flexWrap={"wrap"}
                flexDir={"row"}
              >
                <Image src={aselco} objectFit={"contain"} />
                <Image src={electric} />
                <Image src={water} />
                <Image src={hctv} />
                <Image src={socoteco} />
                <Image src={palawan} />
              </Box>
            </Center>
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
          <Link to={"/offers"}>
            <Image src={left} />
          </Link>
          <Link to={"/milestones"}>
            <Image src={right} />
          </Link>
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            OUR SERVICES
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageFive;

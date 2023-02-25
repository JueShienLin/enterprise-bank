import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import photo from "../../../assets/home.jpg";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import right from "../../../assets/right.png";
import { Link } from "react-router-dom";

const PageOne = () => {
  return (
    <>
      <Box
        w={"80%"}
        h={"100%"}
        pos={"fixed"}
        backgroundImage={`url(${photo})`}
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
          justifyContent={"flex-end"}
          mb={10}
          px={10}
          letterSpacing={1}
          gap={3}
          alignItems={"center"}
        >
          <Link to={"/whatwedo"}>
            <Image src={right} />
          </Link>

          <Text fontFamily={"Poppins"} color={"#fff"} fontSize={30}>
            BANKING THAT
          </Text>

          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            FITS YOUR NEED
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageOne;

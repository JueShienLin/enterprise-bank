import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import car from "../../../assets/car.jpg";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Link } from "react-router-dom";

const PageFour = () => {
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
                w={["20%", "20%", "20%", "20%", "16%", "15%"]}
              >
                We also
              </Text>
              <Text
                fontFamily={"Poppins"}
                color={"#E76D0C"}
                fontSize={25}
                w={["20%", "20%", "20%", "20%", "10%", "15%"]}
              >
                offer
              </Text>
              <Divider
                orientation={"horizontal"}
                borderColor={"#E76D0C"}
                borderWidth={3}
                borderRadius={5}
                w={"83%"}
                ml={6}
              />
            </Box>
            <Box
              display={"flex"}
              backgroundColor={"white"}
              justifyContent={"space-between"}
              borderRadius={10}
              h={60}
              mt={10}
            >
              <Box display={"flex"} flexDir={"column"} px={10} mt={10}>
                <Text
                  fontFamily={"Poppins"}
                  my={3}
                  color={"#E76D0C"}
                  fontSize={32}
                >
                  Car Loan
                </Text>
                <Text fontFamily={"Poppins"} my={3} fontSize={12}>
                  Financing for the acquisition of brand new service vehicle
                  that will be used for personal or business operations
                </Text>
                <Box display={"flex"} mt={5} gap={5}>
                  <MdOutlineArrowBackIosNew size={25} color={"#E76D0C"} />
                  <MdOutlineArrowForwardIos size={25} color={"#E76D0C"} />
                </Box>
              </Box>

              <Image
                src={car}
                borderRadius={10}
                w={["40%", "40%", "40%", "40%", "40%", "20%"]}
                objectFit={"cover"}
              />
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
          <Link to={"/products"}>
            <Image src={left} w={10} />
          </Link>
          <Link to={"/services"}>
            <Image src={right} w={10} />
          </Link>
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            OTHER LOANS
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageFour;

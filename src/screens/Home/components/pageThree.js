import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import { Link } from "react-router-dom";
import { AiOutlineShop, AiOutlineCreditCard } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { BiBuildings } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";

const PageThree = () => {
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
                Banking that
              </Text>
              &nbsp;
              <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
                includes You
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
              gap={15}
              my={10}
              w={"100%"}
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
                w={[200, 200, 200, 200, 250, 300]}
                boxShadow={"10px 20px 40px #9c9c9c"}
              >
                <AiOutlineShop size={30} color={"#E76D0C"} />
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"medium"}
                  fontSize={15}
                >
                  Small Business loan
                </Text>
                <Text fontFamily={"Poppins"} color={"gray"} fontSize={12}>
                  Secured loan for additional working capital
                </Text>
              </Box>
              <Box
                backgroundColor={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                p={5}
                w={[200, 200, 200, 200, 250, 300]}
                boxShadow={"10px 20px 40px #9c9c9c"}
                borderRadius={10}
                gap={5}
              >
                <BiBuildings size={30} color={"#E76D0C"} />
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"medium"}
                  fontSize={15}
                >
                  Enterprise Business loan
                </Text>
                <Text fontFamily={"Poppins"} color={"gray"} fontSize={12}>
                  Additional capital for business loan
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
                w={[200, 200, 200, 200, 250, 300]}
                boxShadow={"10px 20px 40px #9c9c9c"}
              >
                <GiTwoCoins size={30} color={"#E76D0C"} />
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"medium"}
                  fontSize={15}
                >
                  Savings Account
                </Text>
                <Text fontFamily={"Poppins"} color={"gray"} fontSize={12}>
                  Saving and monitoring finances with zero risk has never been
                  so easy
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
                w={[200, 200, 200, 200, 250, 300]}
                boxShadow={"10px 20px 40px #9c9c9c"}
              >
                <AiOutlineCreditCard size={30} color={"#E76D0C"} />
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"medium"}
                  fontSize={15}
                >
                  Checking Account
                </Text>
                <Text fontFamily={"Poppins"} color={"gray"} fontSize={12}>
                  Affordable and convenient, especially designed for
                  entrepreneurs
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
                w={[200, 200, 200, 200, 250, 300]}
                boxShadow={"10px 20px 40px #9c9c9c"}
              >
                <BsCalendarCheck size={30} color={"#E76D0C"} />
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"medium"}
                  fontSize={15}
                >
                  Time Deposit
                </Text>
                <Text fontFamily={"Poppins"} color={"gray"} fontSize={12}>
                  Enjoy higher returns than a regular savings account
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"flex-end"}
          mb={20}
          px={10}
          letterSpacing={1}
          gap={3}
          alignItems={"center"}
        >
          <Link to={"/whatwedo"}>
            <Image src={left} w={10} />
          </Link>
          <Link to={"/offers"}>
            <Image src={right} w={10} />
          </Link>
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            OUR PRODUCTS
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageThree;

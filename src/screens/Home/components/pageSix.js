import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBanknotes } from "react-icons/hi2";
import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";

const PageSix = () => {
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
                w={"41%"}
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
                <FaRegCalendarAlt size={70} />
                <Text fontFamily={"Poppins"} fontWeight={"bold"} fontSize={55}>
                  2
                </Text>
                <Text fontFamily={"Poppins"} color={"black"} fontSize={25}>
                  Years of Experience
                </Text>
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
                <BsBank size={70} />
                <Text fontFamily={"Poppins"} fontWeight={"bold"} fontSize={55}>
                  12719
                </Text>
                <Text fontFamily={"Poppins"} color={"black"} fontSize={25}>
                  Banking Accounts
                </Text>
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
                <Text fontFamily={"Poppins"} fontWeight={"bold"} fontSize={55}>
                  5724
                </Text>
                <Text fontFamily={"Poppins"} color={"black"} fontSize={25}>
                  Loan Clients
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
          <Link to={"/services"}>
            <Image src={left} />
          </Link>
          <Link to={"/feedbacks"}>
            <Image src={right} />
          </Link>
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            OTHER MILESTONES
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageSix;

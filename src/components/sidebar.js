import { Box, Divider, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import personal from "../assets/personal_banking.jpg";
import business from "../assets/business_banking.jpeg";
import about from "../assets/about_us.jpg";
import React from "react";
import { FaUserAlt, FaBriefcase } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      backgroundColor={"white"}
      position={"relative"}
      borderEndWidth={1}
      borderColor={"#000"}
      display={"flex"}
      flexDirection={"column"}
      w={"20%"}
      h={"945px"}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        flexDir={"row"}
        gap={5}
        padding={5}
      >
        <Image src={menu} objectFit={"contain"} w={"15%"} />
        <Image src={logo} objectFit={"contain"} w={"55%"} />
      </Box>
      <Box display={"flex"} flexDir={"column"} paddingX={5}>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={3}
        >
          <Text fontFamily={"Poppins"} color={"#000E6D"}>
            Welcome
          </Text>
          <Divider orientation={"horizontal"} opacity={"0.9"} />
        </Box>
        <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={20}>
          Enterprise Bank
        </Text>
      </Box>
      <Box display={"flex"} justifyContent={"flex-start"} padding={5}>
        <Text fontFamily={"Poppins"} color={"#000E6D"} fontSize={12}>
          Select Your Customer Type
        </Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        flexDir={"column"}
        alignItems={"center"}
        marginX={10}
        gap={10}
      >
        <Link to={"/"}>
          <Box
            borderRadius={10}
            boxShadow={"0px 10px 10px #888888"}
            color={"#E76D0C"}
            _hover={{
              color: "white",
              backgroundColor: "#E76D0C",
              transitionDuration: ".5s",
            }}
          >
            <Image src={personal} borderTopRadius={10} objectFit={"cover"} />
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={5}
              paddingY={3}
              paddingX={5}
            >
              <FaUserAlt />
              <Text fontFamily={"Poppins"} fontSize={16}>
                Personal Banking
              </Text>
            </Box>
          </Box>
        </Link>

        <Box
          borderRadius={10}
          boxShadow={"0px 10px 10px #888888"}
          color={"#E76D0C"}
          _hover={{
            color: "white",
            backgroundColor: "#E76D0C",
            transitionDuration: ".5s",
          }}
        >
          <Image src={business} borderTopRadius={10} objectFit={"cover"} />
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={5}
            paddingY={3}
            paddingX={5}
          >
            <FaBriefcase onClick={() => {}} />
            <Text fontFamily={"Poppins"} fontSize={16}>
              Business Banking
            </Text>
          </Box>
        </Box>
        <Link to={"/About"}>
          <Box
            borderRadius={10}
            boxShadow={"0px 10px 10px #888888"}
            color={"#E76D0C"}
            _hover={{
              color: "white",
              backgroundColor: "#E76D0C",
              transitionDuration: ".5s",
            }}
          >
            <Image src={about} borderTopRadius={10} objectFit={"cover"} />
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={5}
              paddingY={3}
              paddingX={5}
            >
              <AiFillBank />
              <Text fontFamily={"Poppins"} fontSize={16}>
                About Us
              </Text>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;

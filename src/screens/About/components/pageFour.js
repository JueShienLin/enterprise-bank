import { Box, Button, Divider, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import reports from "../../../assets/reports.jpg";

const PageFour = () => {
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
          px={40}
        >
          <Box display={"flex"} flexDir={"column"} w={"100%"} px={10} mb={20}>
            <Box
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              alignContent={"center"}
              w={"100%"}
              justifyContent={"flex-start"}
            >
              <Text fontFamily={"Poppins"} color={"#000"} fontSize={25}>
                Annual
              </Text>
              &nbsp;
              <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={25}>
                Reports
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
              boxShadow={"10px 20px 40px #9c9c9c"}
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                px={10}
                mt={10}
                w={"60%"}
              >
                <Text
                  fontFamily={"Poppins"}
                  my={3}
                  color={"#E76D0C"}
                  fontSize={32}
                >
                  Select Report
                </Text>
                <Select size={"lg"} fontFamily={"Poppins"}>
                  <option value="option1">Annual Reports 2021</option>
                  <option value="option2">Annual Reports 2022</option>
                  <option value="option3">Annual Reports 2023</option>
                </Select>
                <Button
                  borderRadius={10}
                  w={"25%"}
                  color={"white"}
                  backgroundColor={"#E76D0C"}
                  my={5}
                >
                  View Report
                </Button>
              </Box>

              <Image
                src={reports}
                borderRadius={10}
                w={"30%"}
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
          <Text fontFamily={"Poppins"} color={"#000"} fontSize={30}>
            ANNUAL
          </Text>
          <Text fontFamily={"Poppins"} color={"#E76D0C"} fontSize={30}>
            REPORTS
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageFour;

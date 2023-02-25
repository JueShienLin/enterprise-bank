import {
  Box,
  Divider,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import executive from "../../../assets/executive.jpg";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";

const PageThree = () => {
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
                fontFamily={"Poppins"}
                color={"white"}
                fontSize={25}
                w={"15%"}
              >
                Executives
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
                  src={executive}
                  w={"80%"}
                  objectFit={"cover"}
                  borderRadius={10}
                />
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"flex-start"}
                py={10}
                w={"50%"}
              >
                <Text fontFamily={"Poppins"} fontSize={25} color={"#E76D0C"}>
                  Roberto F. Salazar
                </Text>
                <Text fontFamily={"Poppins"} fontSize={14} color={"white"}>
                  President and CEO
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
                  color={"white"}
                >
                  <ListItem>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem
                  </ListItem>
                  <ListItem>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem
                  </ListItem>
                  <ListItem>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem
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
          <Text fontFamily={"Poppins"} color={"#fff"} fontSize={30}>
            EXECUTIVES
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageThree;

import {
  Box,
  Divider,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import alvizo from "../../../assets/alvizo.jpg";
import rodriguez from "../../../assets/rodriguez.jpg";
import salang from "../../../assets/salang.jpg";
import messenger from "../../../assets/messenger.png";
import map from "../../../assets/map.png";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";

const PageTwo = () => {
  const navigation = useNavigate();
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
                color={"black"}
                fontFamily={"Poppins"}
                fontSize={25}
                w={["20%", "20%", "20%", "20%", "18%", "15%"]}
              >
                Board of
              </Text>

              <Text
                fontFamily={"Poppins"}
                color={"#E76D0C"}
                fontSize={25}
                w={["20%", "20%", "20%", "20%", "20%", "15%"]}
              >
                Directors
              </Text>
              <Divider
                orientation={"horizontal"}
                borderColor={"#E76D0C"}
                borderWidth={3}
                borderRadius={5}
                w={["80%", "80%", "80%", "80%", "80%", "100%"]}
                ml={4}
              />
            </Box>
            <Carousel
              showArrows={false}
              showIndicators={false}
              swipeable={true}
              showStatus={false}
              infiniteLoop
              interval={10000}
              emulateTouch={true}
              autoPlay
            >
              <Box display={"flex"} flexDir={"row"} gap={10} key={1}>
                <Box
                  w={"40%"}
                  p={10}
                  display={"flex"}
                  justifyContent={"flex-start"}
                >
                  <Image
                    src={alvizo}
                    w={"80%"}
                    objectFit={"cover"}
                    borderRadius={10}
                    boxShadow={"10px 20px 40px #9c9c9c"}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  textAlign={"start"}
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
                    fontSize={[10, 10, 10, 10, 12, 15]}
                    spacing={5}
                  >
                    <ListItem>
                      Director Alvizo’s expertise in microfinance is highly
                      recognized in the Philippines and abroad. He is a
                      Certified Public Accountant who has extensive working
                      experience as a consultant in microfinance and SME
                      development in Africa, the Middle East, and Asia.
                    </ListItem>
                    <ListItem>
                      His experience and knowledge became tangible when he
                      transformed Enterprise Bank from a single-unit rural bank
                      in Surigao del Sur into an emerging thrift bank that
                      gained a niche in MSME financing.
                    </ListItem>
                    <ListItem>
                      During his membership in the Board of EBI, he also held
                      the chairmanship of Microfinance for Rural Development
                      Inc.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
              <Box display={"flex"} flexDir={"row"} gap={10} key={2}>
                <Box
                  w={"40%"}
                  p={10}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <Image
                    src={rodriguez}
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
                  textAlign={"start"}
                  py={10}
                  w={"50%"}
                >
                  <Text fontFamily={"Poppins"} fontSize={25}>
                    Richard M. Rodriguez
                  </Text>
                  <Text fontFamily={"Poppins"} fontSize={14} color={"#E76D0C"}>
                    Director / Chairman of the Board
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
                    fontSize={[10, 10, 10, 10, 12, 15]}
                    spacing={5}
                  >
                    <ListItem>
                      Mr. Richard M. Rodriguez is from Cebu City. He is a former
                      professor at Salazar College and a businessman engaged in
                      education, construction, and finance.
                    </ListItem>
                    <ListItem>
                      Before joining Enterprise Bank last January 2017, he was
                      the President of the Rural Bank of Ronda from 2012-2013
                      before becoming one of its directors in 2013.
                    </ListItem>
                    <ListItem>
                      Mr. Rodriguez gained banking exposure being the Branch
                      Manager of Merchants Bank and Consumer Lending Head of
                      Insular Savings Bank.
                    </ListItem>
                    <ListItem>
                      He finished his Bachelor of Accountancy from Southwestern
                      University in Cebu. He has a post-graduate degree in
                      Master in Management from the University of San Jose
                      Recoletos and a Bachelor of Laws degree from Southwestern
                      University.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
              <Box display={"flex"} flexDir={"row"} gap={10} key={3}>
                <Box
                  w={"40%"}
                  p={10}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <Image
                    src={salang}
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
                  textAlign={"start"}
                  py={10}
                  w={"50%"}
                >
                  <Text fontFamily={"Poppins"} fontSize={25}>
                    Maximino A. Salang, Jr.
                  </Text>
                  <Text fontFamily={"Poppins"} fontSize={14} color={"#E76D0C"}>
                    Director
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
                    fontSize={[10, 10, 10, 10, 12, 15]}
                    spacing={5}
                  >
                    <ListItem>
                      Maximino A. Salang, Jr. is a businessman in Davao City
                      engaged in construction, heavy equipment rental, banana
                      plantation, export production, and container yard
                      operation. His expertise lies in marketing and business
                      management.
                    </ListItem>
                    <ListItem>
                      He has been a member of the Board of Directors since 2007
                      and was its chairman for several years.
                    </ListItem>
                    <ListItem>
                      He finished his Bachelor of Science degree in Business
                      Administration from Southwestern University-Cebu.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Carousel>
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
          <Link to={"/About"}>
            <Image src={left} w={10} />
          </Link>

          <Image
            w={10}
            src={right}
            onClick={() => {
              navigation("/About/executives");
            }}
          />

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

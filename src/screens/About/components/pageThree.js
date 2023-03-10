import {
  Box,
  Divider,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import manzares from "../../../assets/manzares.jpg";
import messenger from "../../../assets/messenger.png";
import salazar from "../../../assets/salazar.jpg";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import map from "../../../assets/map.png";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PageThree = () => {
  const navigation = useNavigate();
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
                w={["20%", "20%", "20%", "20%", "18%", "15%"]}
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
            <Carousel
              showArrows={false}
              showIndicators={false}
              swipeable={true}
              showStatus={false}
              infiniteLoop
              emulateTouch={true}
              interval={10000}
              autoPlay
            >
              <Box display={"flex"} flexDir={"row"} gap={10}>
                <Box w={"40%"} display={"flex"} justifyContent={"flex-end"}>
                  <Image
                    src={salazar}
                    w={"80%"}
                    objectFit={"cover"}
                    borderRadius={10}
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
                    fontSize={[10, 10, 10, 10, 12, 15]}
                    spacing={5}
                    color={"white"}
                  >
                    <ListItem>
                      An alumnus of Notre Dame of Marbel University and a
                      Certified Public Accountant, Director Salazar has over 29
                      years of experience in the banking industry with a strong
                      background in Consumer and Commercial lending. In his
                      banking career, he played a significant role in attaining
                      a successful loan portfolio of banks.
                    </ListItem>
                    <ListItem>
                      With contemporary corporate and banking strategies,
                      Director Salazar has successfully guided banking
                      institutions to achieve goals leading to maximized profits
                      and financial performance. He helped banks expand by
                      targeting new growth opportunities while improving credit
                      portfolio quality and tailored consumer products.
                    </ListItem>
                    <ListItem>
                      He has been recognized frequently for his outstanding
                      sales record and consistent achievements.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
              <Box display={"flex"} flexDir={"row"} gap={10}>
                <Box w={"40%"} display={"flex"} justifyContent={"flex-end"}>
                  <Image
                    src={manzares}
                    w={"80%"}
                    objectFit={"cover"}
                    borderRadius={10}
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
                  <Text fontFamily={"Poppins"} fontSize={25} color={"#E76D0C"}>
                    Bienvenido F. Manzares, Jr.
                  </Text>
                  <Text fontFamily={"Poppins"} fontSize={14} color={"white"}>
                    Independent Director
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
                    color={"white"}
                  >
                    <ListItem>
                      Director Manzares holds a Bachelor's degree in Development
                      Studies from the University of the Philippines-Manila and
                      a Master's degree in Development Economics from UP-Diliman
                      School of Economics.
                    </ListItem>
                    <ListItem>
                      He has extensive experience in training, research, policy
                      planning and development, project programming, and project
                      evaluation in various fields such as agriculture, the
                      environment, health, education, corporate rehabilitation,
                      and infrastructure development.
                    </ListItem>
                    <ListItem>
                      Among his various significant accomplishments in
                      Development Economics was a government consultancy
                      position for the Office of the Presidential Adviser on
                      Food Security by providing such office of policy briefs
                      and feasibility studies on food security.
                    </ListItem>
                    <ListItem>
                      Mr. Manzares has various study tours in Thailand, China,
                      Vietnam, and Palau.
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
          <Image
            onClick={() => {
              navigation("/About/directors");
            }}
            src={left}
            w={10}
          />

          <Text fontFamily={"Poppins"} color={"#fff"} fontSize={30}>
            EXECUTIVES
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PageThree;

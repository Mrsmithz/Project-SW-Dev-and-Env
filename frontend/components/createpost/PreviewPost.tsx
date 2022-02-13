import React from "react";
import {
  Box,
  Text,
  Center,
  useColorModeValue,
  Image,
  Stack,
  Grid,
  GridItem,
  Flex,
  Tag,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import styles from '../../styles/CreatePost.module.scss'

import { CreatedPost } from '../../model/CreatedPost'

type Props = {
  postData: CreatedPost,
  backPage: Function
};

const size = { base: "100%", md: "80%", lg: "60%" };

const PreviewPost = ({ postData, backPage }: Props) => {
  return (
    <>
      <Stack>
        <Center
          w={size}
          bg={useColorModeValue("blue.100", "gray.500")}
          p={{ base: 5, lg: 10 }}
          borderRadius={20}
          alignSelf="center"
          mt={5}
          h={"100%"}
        >
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colSpan={{ base: 12, lg: 3, md: 12, sm: 12 }}>
              <Flex justify="center" align="center">
                <Image
                  src={
                    "http://www.168virtualschool.com/images/No_image_available.png"
                  }
                  alt="image"
                  boxSize={{ base: 200, lg: 200, md: 400, sm: 400 }}
                />
              </Flex>
              <Center mt={2}>
                <Text fontSize={{ base: 20, lg: 20, md: 40, sm: 40 }}>
                  Name
                </Text>
              </Center>
              <Center>
                <Text fontSize={{ base: 20, lg: 20, md: 40, sm: 40 }}>
                  {postData.contact}
                </Text>
              </Center>
            </GridItem>
            <GridItem colSpan={1}></GridItem>
            <GridItem colSpan={{ base: 12, lg: 8, md: 12, sm: 12 }}>
              <Box
                w={"100%"}
                p={5}
                bg={useColorModeValue("gray.100", "gray.600")}
                borderRadius={20}
              >
                <Text fontSize={20}>Title : { postData.title } </Text>
                <Text fontSize={20}>Description</Text>
                <Box
                  bg={useColorModeValue("blue.200", "gray.700")}
                  p={3}
                  borderRadius={10}
                  minH="8rem"
                  mt={2}
                  mb={5}
                >
                  <Text fontSize={15}> {postData.description} </Text>
                </Box>
                <Grid templateColumns="repeat(12, 1fr)">
                  <GridItem
                    colSpan={{ base: 1, lg: 1, md: 12, sm: 12 }}
                    textAlign="center"
                  >
                    <Text>Tag</Text>
                  </GridItem>
                  <GridItem colSpan={10}>
                    {/* <Tag ml={2} colorScheme="teal">
                      Tag 1
                    </Tag>
                    <Tag ml={2} colorScheme="teal">
                      Tag 2
                    </Tag>
                    <Tag ml={2} colorScheme="teal">
                      Tag 3
                    </Tag> */}

                    {postData.tag.map((item, index) => (
                      <Tag ml={2} colorScheme="teal" key={`tag-${index}`}>
                        { item }
                      </Tag>
                    ))}
                  </GridItem>
                </Grid>
                <Text fontSize={16} marginTop="0.5rem" paddingLeft="0.5rem">Permission : { postData.permission } </Text>
              </Box>
            </GridItem>
            <GridItem
              colSpan={{ base: 12, lg: 3, md: 12, sm: 12 }}
              mt={{ base: 100, lg: 5 }}
            >
              <Center h={"100%"}>
                <Button colorScheme="blue" variant="solid">
                  Download File
                </Button>
              </Center>
            </GridItem>
            <GridItem colSpan={1}></GridItem>
            <GridItem colSpan={{ base: 12, lg: 6, md: 12, sm: 12 }} mt={5}>
              <Text fontSize={20}>Preview</Text>
              <SimpleGrid columns={3} spacing={4}>

                {/* <Box bg={"gray.300"} h={{ base: 150, lg: 220 }}></Box>
                <Box bg={"gray.300"} h={{ base: 150, lg: 220 }}></Box>
                <Box bg={"gray.300"} h={{ base: 150, lg: 220 }}></Box> */}

                { postData.image.map((item, index) => (
                  <Box  key={`image-${index}`} height="13rem"
                  className={styles.previewImage}>
                    <img src={URL.createObjectURL(item)} />
                  </Box>
                )) }
              </SimpleGrid>
            </GridItem>
            <GridItem
              colSpan={{ base: 12, lg: 2, md: 12, sm: 12 }}
              alignSelf="flex-end"
              mt={5}
            >
              <Flex justify={"center"}>
                <Button w={"80%"} colorScheme="blue" variant="solid"
                  onClick={() => backPage()}>
                  Back
                </Button>
              </Flex>
              <Flex justify={"center"}>
                <Link href={"/"} passHref>
                  <Button w={"80%"} colorScheme="blue" variant="solid" mt={5}>
                    Finish
                  </Button>
                </Link>
              </Flex>
            </GridItem>
          </Grid>
        </Center>
      </Stack>
    </>
  );
};

export default PreviewPost;
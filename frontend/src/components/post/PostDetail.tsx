import React from "react";
import { StarIcon } from '@chakra-ui/icons'
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
    Input,
} from "@chakra-ui/react";

const size = { base: "100%", md: "80%", lg: "60%" };

type Props = {
    postData: any
}

const PostDetail = ({ postData }: Props) => {

    const renderRating = (rating: number) => {
        var starList: any[] = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starList.push(
                    <StarIcon color="white" key={`newest-${i}`} />
                )
            } else {
                starList.push(
                    <StarIcon color="black" key={`newest-${i}`} />
                )
            }
        }
        return starList;
    }
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
                                        postData.imgUrl
                                    }
                                    alt="image"
                                    boxSize={{ base: 200, lg: 200, md: 400, sm: 400 }}
                                />
                            </Flex>
                            <Center mt={2}>
                                <Text fontSize={{ base: 20, lg: 20, md: 40, sm: 40 }}>
                                    {postData.author}
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
                                <Text fontSize={20}>Title : {postData.title}</Text>
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
                                        {postData.tag.map((item: any, index: number) => (
                                            <Tag ml={2} colorScheme="teal" key={`tag-${index}`}>
                                                {item}
                                            </Tag>
                                        ))}
                                    </GridItem>
                                </Grid>
                                <Text fontSize={16} marginTop="0.5rem" paddingLeft="0.5rem">Permission : {postData.permission} </Text>
                            </Box>
                            <Center mt={5}>
                                <Stack direction="row">
                                    <Box>
                                        <Text>Average Rating</Text>
                                        <Stack direction="row" pr={10}>
                                            {renderRating(postData.rating)}
                                        </Stack>
                                    </Box>

                                    <Box>
                                        <Text>Your Rating</Text>
                                        <Stack direction="row" pr={10}>
                                            {renderRating(postData.rating)}
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Center>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, lg: 3, md: 12, sm: 12 }}
                            mt={{ base: 10, lg: 5 }}
                        >
                            <Center h={"100%"}>
                                <Button colorScheme="blue" variant="solid">
                                    Download File
                                </Button>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1}></GridItem>
                        <GridItem colSpan={{ base: 12, lg: 8, md: 12, sm: 12 }} mt={5}>
                            <Text fontSize={20}>Preview</Text>
                            <SimpleGrid columns={3} spacing={4}>

                                <Box bg={"gray.300"} h={{ base: 150, lg: 220 }}></Box>
                                <Box bg={"gray.300"} h={{ base: 150, lg: 220 }}></Box>
                                <Box bg={"gray.300"} h={{ base: 150, lg: 220 }}></Box>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={12} mt={3}>
                            <Text fontSize={20}>Comment</Text>
                        </GridItem>
                        <GridItem colSpan={{base: 2, lg:2, md:3, sm: 3}}>
                            <Image
                                src={
                                    postData.imgUrl
                                }
                                alt="image"
                                boxSize={20}
                                mt={3}
                            />
                        </GridItem>
                        <GridItem colSpan={{base: 10, lg: 10, md: 9, sm: 8}} mt={5}>
                            <Text>Name Lastname 2022/04/16 20:16</Text>
                            <Text>Verry well.</Text>
                        </GridItem>
                        <GridItem colSpan={{base: 12, lg: 2, sm: 12}} mt={5}>
                        </GridItem>
                        <GridItem colSpan={{base: 7, lg: 7, sm: 12}} mt={1}>
                            <Input backgroundColor={"gray.600"}></Input>
                        </GridItem>
                        <GridItem colSpan={{base: 12, lg: 3, sm: 12}} mt={1}>
                            <Center mt={{base: 1, lg: 0, sm: 3}}>
                                <Button colorScheme="blue" variant="solid" width={{base: "100%", lg: "70%", sm: "100%"}}>
                                    Comment
                                </Button>
                            </Center>
                        </GridItem>
                    </Grid>
                </Center>
            </Stack>
        </>
    );
};

export default PostDetail;

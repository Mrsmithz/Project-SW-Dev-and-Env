import type { NextPage } from "next";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text, Center, useColorModeValue, Image } from "@chakra-ui/react";

type Props = {
  posts: any[];
};

const UploadFile = ({}: Props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path}
    </li>
  ));

  return (
    <>
      <Center
        p={10}
        h={350}
        w={"100%"}
        borderRadius={20}
        bg={useColorModeValue("blue.100", "gray.500")}
        {...getRootProps({ className: "dropzone" })}
        mt={10}
        borderBlockEndColor="black"
        textAlign={"center"}
      >
        <input {...getInputProps()} />
        <Box>
          <Center mb={5}>
            <Image
              src="https://findicons.com/files/icons/1579/devine/256/file.png"
              alt="image"
              boxSize={"7rem"}
            ></Image>
          </Center>
          <Text>Drag and drop some files here, or click to select files.</Text>
        </Box>
      </Center>
      <Box mt={10} p={1}>
        {files}
      </Box>
    </>
  );
};

export default UploadFile;

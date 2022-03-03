import type { NextPage } from "next";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text, Center, useColorModeValue, Image, Stack, HStack, useToast, Button, Tag, TagLabel } from "@chakra-ui/react";

import {
  checkIsPDFFile,
  checkIsSingleFile
} from '../../utils/formValidation';

type Props = {
};

const size = { base: '80%', md: '70%', lg: '60%' }
// const containerWidth = { base: '100%', sm: '90%', md: '90%', lg: '85%', xl: '70%' };

const UploadFile: NextPage<{ toNextPage: Function, file: File | null, setFile: Function }> = ({ toNextPage, file, setFile }) => {
  
  const toast = useToast()

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files: any) => {
      if (checkIsSingleFile(files.length)) {
        if (checkIsPDFFile(files[0].type)) {
          setFile(files[0])
          toast({
            title: `Upload file success.`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        } else {
          toast({
            title: `Upload error`,
            description: 'Please upload pdf file only.',
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
        }
      } else {
        toast({
          title: `Upload error`,
          description: 'Please upload 1 file.',
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
    },
  });

  return (
    <>
      <Stack w={size} alignSelf="center">

        <Center
          p={10}
          h={350}
          w={'100%'}
          borderRadius={20}
          bg={useColorModeValue("blue.100", "gray.500")}
          {...getRootProps({ className: "dropzone" })}
          mt={10}
          borderBlockEndColor="black"
          textAlign={"center"}
          alignSelf="center"
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
        {/* <Tag size='lg' colorScheme='red' w={'100%'}>
          <TagLabel>{'asd'}</TagLabel>
        </Tag> */}
        {file &&
          <Box alignItems={'flex-end'}>
            <HStack spacing={4} mt={2}>
              <Tag size={'lg'} bg='#726A95' color={'snow'} onClick={() => setFile(null)}>
                <TagLabel>{file.name}</TagLabel>
              </Tag>
            </HStack>
            <HStack justify='flex-end'>
              <Button colorScheme="teal" width="12rem" size="lg" mt={10} textAlign={'right'} onClick={() => toNextPage()}>Next</Button>
            </HStack>

          </Box>
        }


      </Stack>
    </>
  );
};

export default UploadFile;
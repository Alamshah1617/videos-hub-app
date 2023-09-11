import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      minH={'40'}
      p={['16', '10']}
      color={'white'}
    >
      <Stack
        direction={['column', 'row']}
        spacing={['6', '0']}
        justifyContent={['center', 'space-between']}
      >
        <VStack alignItems={['center', 'stretch']} w={['full', 'auto']} px={['4', '6']}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={['0 20px 20px 0', 'none']}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={['full', 'auto']}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          textAlign={['center', 'left']}
          py={['6', '0']}
          px={['4', '6']}
        >
          <Heading textTransform={'uppercase'} fontSize="lg">
            VIDEO 2023
          </Heading>
          <Text fontSize="sm">All rights reserved</Text>
        </VStack>

        <VStack w={['full', 'auto']} textAlign={['center', 'left']} py={['6', '0']} px={['4', '6']}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} fontSize="sm">
            <a target={'_blank'} rel="noopener noreferrer" href="https://www.youtube.com/@shahalam_">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} fontSize="sm">
            <a target={'_blank'} rel="noopener noreferrer" href="https://instagram.com/alam_shah00">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} fontSize="sm">
            <a target={'_blank'} rel="noopener noreferrer" href="https://github.com/Alamshah1617">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

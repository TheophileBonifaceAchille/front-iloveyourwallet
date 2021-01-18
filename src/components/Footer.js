import React from 'react';
import { Box, Center, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Footer () {
    return(
        <Box bg="brand.1" p="5">
            <Flex justifyContent="center" p={4}>
                <Text>
                    Project designed and produced by DragonS20 and Rémy (Remy-Mil)
                </Text>
            </Flex>
        </Box>
    )
}
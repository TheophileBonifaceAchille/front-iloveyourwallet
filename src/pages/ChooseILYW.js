import React from 'react';
import Home1 from '../images/Home1.jpg';
import { Box, Image, Text, Flex, VStack, Container, Heading } from '@chakra-ui/react';

export default function ChooseILYW() {
  return (
    <>
      <Box bg="brand.4" p="5">
        <Flex justifyContent="center" p={4}>
          <VStack>
            <Container maxW="6xl" centerContent>
              <Heading textAlign="center" size="2xl" my={10} as="h1">
                Pourquoi choisir I Love Your Wallet?
              </Heading>
              <Box mx="2">
                <Box mx="2">
                  <Text fontSize="2xl" mb="3">
                    Trouvez l’amour auprès d'utilisateurs de crypto-monnaie qui vous correspondent
                  </Text>
                  <Text mb="4">
                    Nos Membre sont à la recherche d'une histoire qui commencerait grâce à la blockchain! Rendons cela
                    possible!
                  </Text>
                </Box>
              </Box>
            </Container>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Image m="2" p={0} src={Home1} alt="Happy user" />
            </Box>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

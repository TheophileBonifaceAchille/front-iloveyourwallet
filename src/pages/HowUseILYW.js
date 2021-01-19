import React, { useContext } from 'react';
import HowUseILYW from '../images/HowUseILYW1.jpg';
import { Box, Image, Text, Flex, VStack, Container, HStack, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ILoveYourWalletContext } from '../App';
import { Web3Context } from 'web3-hooks';

export default function HowTo() {
  const iLoveYourWallet = useContext(ILoveYourWalletContext);
  const [web3State] = useContext(Web3Context);

  return (
    <>
      <Box bg="brand.4" p="5">
        <Box>
          <Flex justifyContent="center" p={4}>
            <VStack>
              <Container maxW="6xl" centerContent>
                <Heading textAlign="center" size="2xl" my={10} as="h1">
                  Comment utiliser I Love Your Wallet?
                </Heading>
                <Box mx="2">
                  <Box mx="2">
                    <Text fontSize="2xl" mb="3">
                      En quelques clicks vous pourrez vous inscrire et commencer à interagir avec les autres
                      utilisateurs:
                    </Text>
                    <Box mb="2">
                      <Text as="b">Etape 1:</Text>

                      <Text>
                        Commencer installer puis connecter votre compte Metamask en cliquant sur l'icon Metamask en haut
                        à droite, l'instalation de Metamask est impérative pour utiliser le site. Vous pouvez consulter
                        vos information Web3 et Metamask à tout moment en cliquant sur la bulle information.
                      </Text>
                      <a href="https://metamask.io/">
                        <Text as="u" color="brand.1">
                          Installer Metamask
                        </Text>
                      </a>
                    </Box>
                    <Box mb="2">
                      <Text as="b">Etape 2: </Text>
                      <Text>Inscrivez vous en selectionnant bien votre catégorie!</Text>
                      <Link to="/register">
                        <Text as="u" color="brand.1">
                          Inscrivez vous ici!
                        </Text>
                      </Link>
                    </Box>
                    <Box mb="2">
                      <Text as="b">Etape 3: </Text>
                      <Text>
                        Une fois sur son espace le Daddy ou la Mummy pourra intéragir avec les Baby. Pour cela rien de
                        plus simple, faites un don de Token et contactez le Baby via son adresse, plus votre don est
                        généreux plus vous avez de chance qu'il vous réponde!
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Container>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Image m="2" p={0} src={HowUseILYW} alt="Happy user" />
              </Box>
              <Box>
                <Container>
                  <VStack>
                    <Text p={4}>Rejoins nous pour debuter une belle histoire!</Text>
                    {iLoveYourWallet !== null && web3State.chainId === 4 && (
                      <HStack spacing="28px" justifyContent="center">
                        <Button colorScheme="red" variant="solid" mb="10">
                          <Link to="/register" p={4}>
                            Inscris-toi!
                          </Link>
                        </Button>
                      </HStack>
                    )}
                  </VStack>
                </Container>
              </Box>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

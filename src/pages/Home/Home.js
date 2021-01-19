import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Text, HStack, VStack, Button, Image } from '@chakra-ui/react';
import { Web3Context } from 'web3-hooks';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import WalletR from '../../images/walletred.png';
import HappyCoople from '../../images/happyCoople.jpg';
import ChooseILYW from '../ChooseILYW';
import HowTo from '../HowUseILYW';
import { ILoveYourWalletContext } from '../../App';

export const Home = () => {
  const iLoveYourWallet = useContext(ILoveYourWalletContext);
  const [web3State] = useContext(Web3Context);

  return (
    <>
      <Nav />
      <Box bg="brand.4" pt="5" pb="5">
        <Container>
          <VStack>
            <Box>
              <VStack>
                <Image mt="9" boxSize="150px" objectFit="cover" src={WalletR} alt="logo I Love Your Wallet" />
                <Text color="brand.2" as="b" fontSize="3xl">
                  I Love Your Wallet
                </Text>
                <Text p={4}>Let the Blockchain make you happy!</Text>
                {iLoveYourWallet !== null && web3State.chainId === 4 && (
                  <HStack spacing="28px" justifyContent="center">
                    <Button colorScheme="red" variant="solid" mb="10">
                      <Link to="/register" p={4}>
                        Inscription
                      </Link>
                    </Button>
                  </HStack>
                )}
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Image p={0} src={HappyCoople} alt="Happy coople" />
      </Box>
      <ChooseILYW />
      <HowTo />
      <Footer />
    </>
  );
};

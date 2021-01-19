import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Text,
  Box,
  Button,
  HStack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Spacer,
} from '@chakra-ui/react';
import { Web3Context } from 'web3-hooks';
import LogoWallet from '../images/wallet.png';
import infoStatus from '../images/infoNav.png';
import LogoMetamask from '../images/icon-metamask.png';

export default function Nav() {
  const [web3State, login] = useContext(Web3Context);

  return (
    <>
      <Box bg="brand.1">
        <Flex>
          <Box p={4}>
            <HStack>
              <Link to="/">
                <Image objectFit="cover" boxSize="80px" src={LogoWallet} alt="logo I love your wallet" />
              </Link>
            </HStack>
          </Box>
          <Spacer />
          <Box my={10} as="samp" fontSize="1rem" mr={6}>
            <HStack>
              <Popover>
                <PopoverTrigger aria-label="état balance">
                  <Image src={infoStatus} boxSize="45px" objectFit="cover" alt="icon information balance" />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Text fontWeight="bold">
                        Web3:{' '}
                        {web3State.isWeb3 ? <Text color="Green">injected</Text> : <Text color="Red">not found</Text>}
                      </Text>
                      <Text fontWeight="bold">
                        Wallet:{' '}
                        {web3State.isLogged ? (
                          <Text color="Green">{web3State.isMetamask} Connected </Text>
                        ) : (
                          <Text color="Red">{web3State.isMetamask} Disconnected </Text>
                        )}
                      </Text>
                      <Text fontWeight="bold">Network name: {web3State.networkName}</Text>
                      <Text fontWeight="bold">Network id: {web3State.chainId}</Text>
                      <Text fontWeight="bold">Account: {web3State.account}</Text>
                      <Text fontWeight="bold">Balance: {web3State.balance}</Text>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
              {!web3State.isLogged && (
                <Button mr={4} onClick={login} colorScheme="none" aria-label="Connection Metamask">
                  <Image boxSize="45px" objectFit="cover" src={LogoMetamask} alt="Logo Metamask" />
                </Button>
              )}
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

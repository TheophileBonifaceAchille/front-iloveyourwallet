import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	Flex,
	Text,
	Box,
	Button,
	Image,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	Portal,
	PopoverArrow,
	PopoverCloseButton,
	PopoverBody,
	Spacer,
	HStack,
} from '@chakra-ui/react';
import { Web3Context } from 'web3-hooks';
import LogoWallet from '../images/wallet.png';
import infoStatus from '../images/infoNav.png';
import LogOut from '../images/exit.png';

export default function BabyDaddyNav() {
	const [web3State, login] = useContext(Web3Context);

	return (
		<>
			<Box bg="brand.1">
				<Flex>
					<Box p={4}>
						<Link to="/">
							<Image
								objectFit="cover"
								boxSize="80px"
								src={LogoWallet}
								alt="logo I love your wallet"
							/>
						</Link>
					</Box>
					<Spacer />
					<Box my={10} as="samp" fontSize="1rem">
						<HStack>
							<Popover>
								<PopoverTrigger>
									<Image src={infoStatus} boxSize="45px" objectFit="cover" />
								</PopoverTrigger>
								<Portal>
									<PopoverContent>
										<PopoverArrow />
										<PopoverHeader>Status</PopoverHeader>
										<PopoverCloseButton />
										<PopoverBody>
											<Text fontWeight="bold">
												Web3:{' '}
												{web3State.isWeb3 ? (
													<Text color="Green">injected</Text>
												) : (
													<Text color="Red">not found</Text>
												)}
											</Text>
											<Text fontWeight="bold">
												Wallet:{' '}
												{web3State.isLogged ? (
													<Text color="Green">
														{web3State.isMetamask} Connected{' '}
													</Text>
												) : (
													<Text color="Red">
														{web3State.isMetamask} Disconnected{' '}
													</Text>
												)}
											</Text>
											<Text fontWeight="bold">
												Network name: {web3State.networkName}
											</Text>
											<Text fontWeight="bold">
												Network id: {web3State.chainId}
											</Text>
											<Text fontWeight="bold">
												Account: {web3State.account}
											</Text>
											<Text fontWeight="bold">
												Balance: {web3State.balance}
											</Text>
										</PopoverBody>
									</PopoverContent>
								</Portal>
							</Popover>
							{web3State.isLogged && (
								<Box>
									<Link to="/">
										<Image
											src={LogOut}
											boxSize="40px"
											objectFit="cover"
											mx={5}
										/>
									</Link>
								</Box>
							)}
						</HStack>
					</Box>
				</Flex>
			</Box>
		</>
	);
}

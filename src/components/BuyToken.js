import React, { useContext, useState } from 'react';
import { ethers } from 'ethers';
import {
	Box,
	Heading,
	Text,
	Input,
	Button,
	FormControl,
	VStack,
	FormLabel,
} from '@chakra-ui/react';
import { Web3Context } from 'web3-hooks';
import { ILoveYourWalletContext } from '../App';

export default function BuyToken() {
	const ILoveYourWallet = useContext(ILoveYourWalletContext);
	const [tokenNumber, setTokenNumber] = useState('1');

	const handleBuyTokens = async (event) => {
		await ILoveYourWallet.buyLV(
			ethers.utils.parseEther(tokenNumber.toString())
		);
	};


	return (
		<>
			<Box>
				<Heading>
					<Text color="white" textAlign="center" size="3xl" my={5}>
						Achéte tes LV
					</Text>
				</Heading>
				<Box p={3} rounded="md" bg="white">
					<FormControl isRequired>
						<VStack>
							<Input
								id="numberToken"
								aria-label="numberToken"
								value={tokenNumber}
								onChange={(e) => {
									setTokenNumber(e.currentTarget.value);
								}}
								variant="filled"
								colorScheme="white"
								focusColorScheme="lime"
							/>
							<Button
								bg="brand.1"
								color="white"
								onClick={handleBuyTokens}
								_hover={{
									color: 'white',
									bg: 'brand.2',
								}}
							>
								Acheter
							</Button>
						</VStack>
					</FormControl>
				</Box>
			</Box>
		</>
	);
}

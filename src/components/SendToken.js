import React, { useContext, useState } from 'react';
import { ethers } from 'ethers';
import {
	Box,
	Heading,
	Text,
	Input,
	Button,
	FormControl,
	Stack,
	FormLabel,
} from '@chakra-ui/react';
import { ILoveYourWalletContext } from '../App';

export default function SendToken() {
	const ILoveYourWallet = useContext(ILoveYourWalletContext);
    const nbTokens = ethers.utils.parseEther(amount);

    const handleSubmitSend = async (event) => {
        await addrDaddy.SendToken(addrBaby, nbTokens);
    

	return (
		<>
			<Box>
				<Heading>
					<Text>Buy LV</Text>
				</Heading>
				<Box>
					<FormControl isRequired>
						<Stack>
							<FormLabel>Achéte tes LV</FormLabel>
							<Input
								id="numberToken"
								aria-label="numberToken"
								value={tokenNumber}
								onChange={(e) => {
									setTokenNumber(e.currentTarget.value);
								}}
								variant="filled"
								placeholder="Combien de LV?"
							/>

							<Button onClick={handleSendTokens}>Buy LV</Button>
						</Stack>
					</FormControl>
				</Box>
			</Box>
		</>
	);
}

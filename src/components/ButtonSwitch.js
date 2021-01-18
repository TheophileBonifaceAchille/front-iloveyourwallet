import React, { useContext, useEffect, useState } from 'react';
import { Web3Context } from 'web3-hooks';
import BabyDaddyNav from '../BabyDaddyNavBar';
import BuyToken from '../BuyToken';
import CardList from '../CardList';
import {
	Box,
	VStack,
	HStack,
	Heading,
	Text,
	Input,
	useNumberInput,
	Button,
} from '@chakra-ui/react';
import { ILoveYourWalletContext } from '../../App';

export default function DaddysPage() {
	const iLoveYourWallet = useContext(ILoveYourWalletContext);
	const [web3State, login] = useContext(Web3Context);
	const [pseudo, setPseudo] = useState();
	const [users, setUsers] = useState();

	useEffect(async () => {
		if (iLoveYourWallet !== null) {
			// info du user connecté
			// let usersToShow = [];
			// const info = iLoveYourWallet.infoUser();
			// if (info.type === 0){
			//    usersToShow = await iLoveYourWallet.getBabies();
			// } else {
			//    usersToShow = await iLoveYourWallet.getDaddies();
			// }
			// setUsers(usersToShow);

			const daddysInfos = await iLoveYourWallet.infoUser();
			setPseudo(daddysInfos[1]);
		}
	}, [iLoveYourWallet, web3State.account]);

	return (
		<>
			<BabyDaddyNav />
			<Box boxShadow="dark-lg" p="6" rounded="md" bg="brand.1" m="10">
				<VStack>
					<Heading>
						<Text>Bienvenue {pseudo}</Text>
					</Heading>
					<Text>Qui souhaitez - vous rencontrer aujourd'hui?</Text>
					<BuyToken />
				</VStack>
			</Box>

			<CardList users={users} />
		</>
	);
}

import React, { useContext, useEffect, useState } from 'react';
import { Web3Context } from 'web3-hooks';
import BabyDaddyNav from '../../components/BabyDaddyNavBar';
import BuyToken from '../../components/BuyToken';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';
import {
	Box,
	VStack,
	Heading,
	Text,
} from '@chakra-ui/react';
import { ILoveYourWalletContext } from '../../App';

export const SecuredHomepage = () => {
	const iLoveYourWallet = useContext(ILoveYourWalletContext);
	const [web3State, login] = useContext(Web3Context);
	const [pseudo, setPseudo] = useState();
	const [users, setUsers] = useState();

	useEffect(async () => {
		if (iLoveYourWallet !== null) {
			const addrCurrentUser = await iLoveYourWallet.infoUser();
			const users = await iLoveYourWallet.getAll();
			const currentUser = users.find((user)=>user.addr === addrCurrentUser);

			// FIXME: trouver pourquoi ne fonctionne pas
			const usersToShow = users.filter((user)=> {
				return currentUser.profile !== user.profile
					&& currentUser.typeWished === user.gender
					&& currentUser.addr !== user.addr;
			});

			setUsers(users)
			setPseudo(currentUser.pseudo)
		}
	}, [iLoveYourWallet, web3State.account]);

	return (
		<>
			<BabyDaddyNav />
			<Box m={5}>
				<Box boxShadow="dark-lg" p="6" rounded="md" bg="brand.1" my={10}>
					<VStack>
						<Heading>
							<Text color="white">Bienvenue {pseudo}</Text>
						</Heading>
						<Text color="white">
							Qui souhaitez - vous rencontrer aujourd'hui?
						</Text>
						<BuyToken />
					</VStack>
				</Box>
			</Box>
			<CardList users={users} />
			<Footer />
		</>
	);
}

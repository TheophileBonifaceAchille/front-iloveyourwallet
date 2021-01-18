import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ILoveYourWalletContext } from '../../App';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import {
	VStack,
	Box,
	Center,
	Stack,
	SimpleGrid,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Flex,
	Select,
} from '@chakra-ui/react';

export const Register = () => {
	const iLoveYourWallet = useContext(ILoveYourWalletContext);
	const history = useHistory();

	const [pseudo, setPseudo] = useState('Pseudo');
	const [age, setAge] = useState('20');
	const [gender, setGender] = useState('0');
	const [typeWished, setTypeWished] = useState('0');
	const [profile, setProfile] = useState('0');
	const [email, setEmail] = useState('pseudo@test.com');

	const handleSelectGenderChange = (e) => {
		setGender(e.currentTarget.value);
	};

	const handleSelectTypeWishedChange = (e) => {
		setTypeWished(e.currentTarget.value);
	};

	const handleSelectProfileChange = (e) => {
		setProfile(e.currentTarget.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.currentTarget.value);
	};

	const handleRegister = async () => {
		await iLoveYourWallet.register(
			pseudo,
			email,
			age,
			profile,
			gender,
			typeWished
		);

		const interval = setInterval(async () => {
			if (iLoveYourWallet !== null) {
				const infoUser = await iLoveYourWallet.infoUser();

				if (!!infoUser) {
					clearInterval(interval);
					history.push('/secured-homepage');
				}
			}
		}, 5000);
	};

	return (
		<>
			<Nav />
			<VStack>
				<Box>
					<Box>
						<Center>
							<Heading textAlign="center" size="3xl" my={10} as="h1">
								Inscription
							</Heading>
						</Center>
					</Box>
					<SimpleGrid columns={[1, null, 1]} spacing="40px">
						<Box boxShadow="base" p="6" rounded="md" bg="brand.3" m="4">
							<Center>
								<VStack>
									<Heading as="i" mb={5}>
										Inscris-toi en quelques clics!
									</Heading>
									<FormControl isRequired>
										<Stack>
											<FormLabel>Pseudo</FormLabel>
											<Input
												id="pseudoBaby"
												value={pseudo}
												onChange={(e) => {
													setPseudo(e.currentTarget.value);
												}}
												variant="filled"
												placeholder="Pseudo"
												aria-label="pseudo"
												focusBorderColor="brand.1"
											/>
											<FormLabel>Email</FormLabel>
											<Input
												id="email"
												value={email}
												onChange={handleEmailChange}
												variant="filled"
												placeholder="Email"
												aria-label="email"
												focusBorderColor="brand.1"
											/>

											<FormLabel>Age</FormLabel>
											<Input
												id="ageBaby"
												value={age}
												onChange={(e) => {
													setAge(e.currentTarget.value);
												}}
												variant="filled"
												placeholder="Age"
												aria-label="Age"
												focusBorderColor="brand.1"
											/>
											<FormLabel>Profile</FormLabel>
											<Select
												placeholder="Choisissez un profil d'utilisateur"
												variant="filled"
												onChange={handleSelectProfileChange}
											>
												<option value="0">Baby</option>
												<option value="1">Daddy</option>
											</Select>
											<FormLabel>Genre</FormLabel>
											<Select
												placeholder="Choisissez votre genre"
												variant="filled"
												onChange={handleSelectGenderChange}
											>
												<option value="0">Male</option>
												<option value="1">Female</option>
											</Select>
											<FormLabel>Qui rencontrer?</FormLabel>
											<Select
												placeholder="Choisissez un profil à rencontrer"
												variant="filled"
												onChange={handleSelectTypeWishedChange}
											>
												<option value="0">Male</option>
												<option value="1">Female</option>
											</Select>
											<Flex pt={4} justifyContent="center">
												<Box>
													<Button
														bg="brand.1"
														color="white"
														_hover={{
															color: 'brand.1',
															border: 'brand.1',
															bg: 'white',
														}}
														onClick={handleRegister}
													>
														Inscription
													</Button>
												</Box>
											</Flex>
										</Stack>
									</FormControl>
								</VStack>
							</Center>
						</Box>
					</SimpleGrid>
				</Box>
			</VStack>
			<Footer />
		</>
	);
};

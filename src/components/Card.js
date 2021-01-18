import React from 'react';
import {
	Box,
	VStack,
	HStack,
	Image,
	Text,
	Input,
	Button,
	Center,
	Container,
} from '@chakra-ui/react';
import Baby from '../images/person.png';

const Card = (props) => {
	return (
		<>
			<Box boxShadow="dark-lg" py={3} rounded="md" bg="white">
				<VStack>
					<Box>
						<Center>
							<VStack>
								<Container>
									<HStack>
										<Text fontWeight="bold">Pseudo:</Text>
										<Input
											id="pseudo"
											aria-label="pseudo"
											isDisabled
											variant="unstyled"
											value={props.pseudo}
										/>
									</HStack>

									<HStack>
										<Text fontWeight="bold">Age:</Text>
										<Input
											id="age"
											aria-label="age"
											isDisabled
											variant="unstyled"
											value={props.age}
										/>
									</HStack>

									<HStack>
										<Text fontWeight="bold">Genre:</Text>
										<Input
											id="gender"
											aria-label="gender"
											isDisabled
											variant="unstyled"
											value={props.gender === 0 ? "H" : "F"}
										/>
									</HStack>

									<HStack>
										<Text fontWeight="bold">Email:</Text>
										<Input
											id="email"
											aria-label="email"
											isDisabled
											variant="unstyled"
											value={props.email}
										/>
									</HStack>
								</Container>
							</VStack>
							<Box>
								<Image
									src={Baby}
									boxSize="100px"
									objectFit="cover"
									alt="Baby's profil picture"
								/>
							</Box>
						</Center>
					</Box>
					<Box>
						<Button
							bg="brand.1"
							color="white"
							_hover={{
								color: 'white',
								bg: 'brand.2',
							}}
							/*onClick={}*/
						>
							Envoies des LV!
						</Button>
					</Box>
				</VStack>
			</Box>
		</>
	);
};

export default Card;

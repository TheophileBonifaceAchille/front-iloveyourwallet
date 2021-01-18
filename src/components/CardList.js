import React from 'react';
import Card from './Card.js';
import { Box, SimpleGrid } from '@chakra-ui/react';


const CardList = ({ users  }) => {
	return (
		<>
			<Box m={5}>
				<SimpleGrid columns={[2, null, 3]} spacing="20px">
					{users && users.map(({ pseudo, age, email, gender, profil, typeWhished }) => {
						return (
							<Card key={pseudo} pseudo={pseudo} age={age} gender={gender} email={email} profil={profil} typeWished={typeWhished} />
						);
					})}
				</SimpleGrid>
			</Box>
		</>
	);
};

export default CardList;

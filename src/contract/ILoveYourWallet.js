/* eslint-disable */
export const ILoveYourWallet_adresse =
	'0x9CaEC54aDaFe3D3Ab2Caf46aB6f8999896Be4F3e';

export const ILoveYourWallet_abi = [
	{
		inputs: [
			{
				internalType: 'string',
				name: '_pseudo',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_email',
				type: 'string',
			},
			{
				internalType: 'uint8',
				name: '_age',
				type: 'uint8',
			},
			{
				internalType: 'uint8',
				name: '_profile',
				type: 'uint8',
			},
			{
				internalType: 'uint8',
				name: '_genre',
				type: 'uint8',
			},
			{
				internalType: 'uint8',
				name: '_typeWished',
				type: 'uint8',
			},
		],
		name: 'register',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'getAll',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'pseudo',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'email',
						type: 'string',
					},
					{
						internalType: 'uint8',
						name: 'age',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'profile',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'genre',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'typeWished',
						type: 'uint8',
					},
				],
				internalType: 'struct ILoveYourWallet.User[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'infoUser',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

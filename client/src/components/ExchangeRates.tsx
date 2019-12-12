import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface IRate {
	currency: string;
	rate: string;
}

interface IRates {
	rates: IRate[];
}

const EXCHANGE_RATES = gql`
	{
		rates(currency: "USD") {
			currency
			rate
		}
	}
`;

interface Props {}

const ExchangeRates: React.FC<Props> = () => {
	const { loading, error, data } = useQuery<IRates>(EXCHANGE_RATES);

	if (loading) return <p>loading</p>;
	if (error) return <p>error</p>;

	if (!data) {
		return null;
	}

	return (
		<div>
			{data.rates.map(rate => (
				<div key={rate.currency}>
					{rate.currency}: {rate.rate}
				</div>
			))}
		</div>
	);
};

export default ExchangeRates;

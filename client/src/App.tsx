import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import LinkList from './components/LinkList';

import './App.css';

const client = new ApolloClient({
	uri: `${window.location.origin}/graphql`
});

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<LinkList />
		</ApolloProvider>
	);
};

export default App;

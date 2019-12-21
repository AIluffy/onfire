import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import BodyContent from './components/BodyContent';
import NavFooter from './components/NavFooter';
import TopBar from './components/TopBar';

const client = new ApolloClient({
	// uri: `${window.location.origin}/graphql`
	uri: 'http://localhost:36666/graphql'
});

const App: React.FC = () => {
	return (
		<>
			<TopBar />
			<ApolloProvider client={client}>
				<BodyContent />
			</ApolloProvider>
			<NavFooter />
		</>
	);
};

export default App;

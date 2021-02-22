import React from 'react';
import Aux from '../../hocs/Aux';
import './GraphQLDemo.css';
import { gql, useQuery } from '@apollo/client';

const GET_GRAPHQL_INFO = gql`
	query GET_GRAPHQL_INFO {
		graphQLDemo(where: { id: "cklfvvn401htq0a26zq1k7lmr" }) {
			h2
			p1
			p2
		}
	}
`;

export default function GraphQLDemo() {
	const { loading, error, data } = useQuery(GET_GRAPHQL_INFO);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			<Aux>
				<h2>{data.graphQLDemo.h2}</h2>
				<p>{data.graphQLDemo.p1}</p>
				<p>{data.graphQLDemo.p2}</p>
			</Aux>
		</Aux>
	);
}

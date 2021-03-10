import React from 'react';

// <----- Components ----->
import Aux from '../../hocs/Aux';

// <----- MUI ----->
import CodeIcon from '@material-ui/icons/Code';
import CodeDialog from '../CodeDialog/CodeDialog';

// <----- Styling ----->
import './GraphQLDemo.css';

// <----- GQL/Apollo ----->
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

const GET_DEMO_UNITS_CODE = gql`
	query GET_DEMO_CODE {
		demoCode(where: { id: "cklgwu59c1trz0a80vwnxa6zf" }) {
			title
			fileName
			gitHubLink
			multiline
			compImg {
				fileName
				url
			}
		}
	}
`;

export default function GraphQLDemo(props) {
	const QueryGraphCMS = () => {
		const Graph_CMS_Info = useQuery(GET_GRAPHQL_INFO);
		const Demo_Code = useQuery(GET_DEMO_UNITS_CODE);
		return [Graph_CMS_Info, Demo_Code];
	};

	const [
		{ loading: loadingCMS, error: errorCMS, data: dataCMS },
		{ loading: loadingDEMO, error: errorDEMO, data: dataDEMO },
	] = QueryGraphCMS();

	if (loadingCMS || loadingDEMO) return 'Loading...';
	if (errorCMS || errorDEMO)
		return `Error! ${errorCMS.message || errorDEMO.message}`;

	return (
		<Aux>
			<h1>{dataDEMO.demoCode.title}</h1>
			<h2 className='alignedWithIcon'>
				{dataCMS.graphQLDemo.h2}{' '}
				{props.showCode && <CodeIcon id='code-toggle' />}
			</h2>
			<p>{dataCMS.graphQLDemo.p1}</p>
			<p>{dataCMS.graphQLDemo.p2}</p>
			{props.showCode && (
				<Aux>
					{' '}
					<h2>Component hierarchy</h2>
					<img
						src={dataDEMO.demoCode.compImg.url}
						alt='Hierarchy of this page and GraphQL demo'
						className='centerImg'
					/>
				</Aux>
			)}
			{props.showCode && (
				<CodeDialog
					codeTitle={dataDEMO.demoCode.title}
					fileName={dataDEMO.demoCode.fileName}
					ghLink={dataDEMO.demoCode.gitHubLink}
					multiline={dataDEMO.demoCode.multiline}
				/>
			)}
		</Aux>
	);
}

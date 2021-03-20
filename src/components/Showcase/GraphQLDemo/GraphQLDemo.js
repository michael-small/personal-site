import React from 'react';

// <----- Components ----->
import Aux from '../../hocs/Aux';

// <----- MUI ----->
import CodeDialog from '../CodeDialog/CodeDialog';

// <----- Styling ----->
import './GraphQLDemo.scss';

// <----- GQL/Apollo ----->
import { gql, useQuery } from '@apollo/client';

const GET_GRAPHQL_INFO = gql`
	query GET_GRAPHQL_INFO {
		graphQLDemo(where: { id: "cklfvvn401htq0a26zq1k7lmr" }) {
			h2
			p1
			pRecruiter
			pDeveloper
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
			devView {
				fileName
				url
			}
			editorView {
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
			<h2>{dataDEMO.demoCode.title}</h2>
			<h3 className='aligned-with-icon'>
				{dataCMS.graphQLDemo.h2}{' '}
				{/* {props.showCode && <CodeIcon id='code-toggle' />} */}
			</h3>
			<p>{dataCMS.graphQLDemo.p1}</p>
			{props.showCode === false ? (
				<p>{dataCMS.graphQLDemo.pRecruiter}</p>
			) : (
				<p>{dataCMS.graphQLDemo.pDeveloper}</p>
			)}

			<h3 className='center'>No code view (Editor)</h3>
			<img
				src={dataDEMO.demoCode.editorView.url}
				alt='View that GraphCMS users without code experience (editors) see'
				className='center-img cms-view'
			/>
			<h3 className='center'>Code View (Developer)</h3>
			<img
				src={dataDEMO.demoCode.devView.url}
				alt='View that GraphCMS users with code experience (developers) see'
				className='center-img cms-view'
			/>
			{props.showCode && (
				<Aux>
					{' '}
					<h2>Component hierarchy</h2>
					<img
						src={dataDEMO.demoCode.compImg.url}
						alt='Hierarchy of this page and GraphQL demo'
						className='center-img'
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

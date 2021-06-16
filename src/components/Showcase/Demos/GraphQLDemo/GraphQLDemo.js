import React from 'react';

// <----- Components ----->
import Aux from '../../../hocs/Aux';
import TitledImage from '../../../UI/TitledImage/TitledImage';

// <----- MUI ----->
import CodeDialog from '../../../UI/CodeDialog/CodeDialog';

// <----- Styling ----->
import './GraphQLDemo.scss';
import '../../../UI/_theme.scss';

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
				url
			}
			devView {
				url
			}
			editorView {
				url
			}
			demoWysiwyg {
				url
			}
			demoTextSchemaRichText {
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
		<div id='graph-ql-demo' className='center-block'>
			<h2>{dataDEMO.demoCode.title}</h2>
			<h3>{dataCMS.graphQLDemo.h2} </h3>
			<p>{dataCMS.graphQLDemo.p1}</p>

			<TitledImage
				titleH3='The very text above and below this'
				imgURL={dataDEMO.demoCode.demoTextSchemaRichText.url}
				alt={'The very place where I place the main text of the page'}
			/>
			<TitledImage
				titleH3='Formatting like email/Word'
				imgURL={dataDEMO.demoCode.demoWysiwyg.url}
				alt={
					'An example of the more complex things that GraphCMS can do'
				}
			/>

			{props.showCode === false ? (
				<p>{dataCMS.graphQLDemo.pRecruiter}</p>
			) : (
				<p>{dataCMS.graphQLDemo.pDeveloper}</p>
			)}

			<TitledImage
				titleH3='No code view (Editor)'
				imgURL={dataDEMO.demoCode.editorView.url}
				alt={
					'View that GraphCMS users without code experience (editors) see'
				}
			/>
			<TitledImage
				titleH3='Code View (Developer)'
				imgURL={dataDEMO.demoCode.devView.url}
				alt={
					'View that GraphCMS users with code experience (developers) see'
				}
			/>

			{props.showCode && (
				<Aux>
					<TitledImage
						titleH3='Component hierarchy'
						imgURL={dataDEMO.demoCode.compImg.url}
						alt={'Hierarchy of this page and GraphQL demo'}
					/>
					<CodeDialog
						codeTitle={dataDEMO.demoCode.title}
						fileName={dataDEMO.demoCode.fileName}
						ghLink={dataDEMO.demoCode.gitHubLink}
						multiline={dataDEMO.demoCode.multiline}
					/>
				</Aux>
			)}
		</div>
	);
}

import styled from 'styled-components';

export const Container = styled('div')`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;

	@media (min-width: 800px) {
		display: grid;

		grid-template-columns: 1.8fr 1fr;
		grid-template-rows: 1fr;
	}

	@media (max-height: 600px) {
		display: block;
		.landing-aside {
			height: 300px;
		}
		.form-landing {
			height: 500px;
		}
	}
	.landing-aside {
		flex: 0.4;
	}
	.form-landing {
		flex: 0.6;
	}
`;

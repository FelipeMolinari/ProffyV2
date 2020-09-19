import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column-reverse;

	@media (min-width: 800px) {
		display: grid;

		grid-template-columns: 0.45fr 0.55fr;
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

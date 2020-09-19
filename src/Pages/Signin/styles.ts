import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: block;
	@media (min-width: 800px) {
		display: flex;
		align-items: stretch;
		.landing-aside {
			flex: 0.55;
			height: unset;
		}
		.form-landing {
			flex: 0.45;
			height: unset;
		}
	}
	.landing-aside {
		heigth: 100%;
	}
	.form-landing {
		heigth: 100%;
	}
`;

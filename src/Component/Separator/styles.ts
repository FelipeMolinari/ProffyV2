import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	> span {
		color: var(--commum-input-text);
		font-weight: 700;
	}
	.line {
		flex: 1;
		height: 0.4rem;
		border-radius: 0.4rem;
		background-color: var(--commum-input-text);
	}
	.left {
		margin-right: 1.2rem;
	}
	.right {
		margin-left: 1.2rem;
	}
`;

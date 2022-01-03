import Styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = Styled(motion.nav)`
	width: 100%;
	height: 100vh;
	max-width: 200px;
	background-color: ${(props) => props.theme.menuBackGround};
	position: fixed;
	z-index: 10;

	@media (max-width: 788px) {
		display: ${(props) => (props.opened ? 'block' : 'none')};
		width: 100vw;
	}
`;

export const FlexBox = Styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

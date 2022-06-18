// theme/index.js
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';
import colors from './colors';

// Foundational style overrides
// import borders from "./foundations/borders"

// Component style overrides
// import Button from "./components/button"

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
	cssVarPrefix: 'sundarD',
};

const overrides = {
	styles,
	config,
	colors,
	//   borders,
	// Other foundational style overrides go here
	components: {
		// Other components go here
	},
};

export default extendTheme(overrides);

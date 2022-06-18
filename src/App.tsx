import { Routes, Route } from 'react-router-dom';
import { Center, Flex } from '@chakra-ui/react';

import Home from '~/components/Home';
import About from '~/components/About';
import LoginForm from '~/components/LoginForm';

function App(): JSX.Element {
	return (
		<Flex justify='center' h='100vh' w='100vw' align='center'>
			<Center w='100%'>
				<LoginForm />
			</Center>
			{/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
		</Flex>
	);
}

export default App;

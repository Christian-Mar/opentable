import './globals.css';
import NavBar from './components/NavBar';

export const metadata = {
	title: 'Open Tables',
	description: 'Next 13 project',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<main className='bg-gray-100 min-h-screen w-screen'>
					<main className='max-w-screen-2x m-auto bg-white'>
						<NavBar />
						{children}
					</main>
				</main>
			</body>
		</html>
	);
}

import Header from './components/Header';

export const metadata = {
	title: 'Restaurant',
	description: 'Next 13 project',
};

export default function RestaurantLayout({
	children,
}: {
	children: ReactDOM.ReactNode;
}) {
	return (
		<main>
			<Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">{children}</div>
		</main>
	);
}

import Link from 'next/link';
import NavBar from '../../../components/NavBar';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';
import Header from '../components/Header';

export default function RestaurentMenu() {
	return (
		<>
			<div className='bg-white w-[100%] rounded p-3 shadow'>
				<RestaurantNavBar />
				<Menu />
			</div>
		</>
	);
}

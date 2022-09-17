import React, { useEffect } from 'react'
import EventCard from '../components/Card';
import { dataProvider } from '../providers/data-provider';

const EventHandler: React.FC = () => {
	/**
 * don't worry about error handling anymore. it's already done in dataProvider impl
 */
	useEffect(() => {
		const fetch = async () => {
			const res = await dataProvider.getOne('http://jsonplaceholder.typicode.com/users', 2);
			console.log(res);
		}
		fetch();
	}, []);

	return (
		<>
			<div className='background-image flex bg-gradient-to-b from-vshad2 to-vshade1 justify-center items-center min-h-screen min-w-full' >
				<EventCard />
			</div>
		</>
	);
}

export default EventHandler;

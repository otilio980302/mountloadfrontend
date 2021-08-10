import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Customer = React.lazy(() =>
	import('./views/components/customer/Customer')
);
const Items = React.lazy(() => import('./views/components/item/Item'));
const NewTrip = React.lazy(() => import('./views/components/newtrip/newtrip'));
const Users = React.lazy(() => import('./views/components/users/Users'));

const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/customer', name: 'Customer', component: Customer },
	{ path: '/item', name: 'Items', component: Items },
	{ path: '/newtrip', name: 'NewTrip', component: NewTrip },
	{ path: '/users', name: 'Users', component: Users },
];
export default routes;

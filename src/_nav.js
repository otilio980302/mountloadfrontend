import React from 'react';
import CIcon from '@coreui/icons-react';
import { NavLink } from 'react-router-dom';

const _nav = [
	{
		_component: 'CNavTitle',
		anchor: 'Principal',
	},
	{
		_component: 'CNavItem',
		as: NavLink,
		anchor: 'Dashboard',
		to: '/dashboard',
		icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		_component: 'CNavItem',
		as: NavLink,
		anchor: 'Nuevo Viaje',
		to: '/newtrip',
		icon: <CIcon name="cil-truck" customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		_component: 'CNavItem',
		as: NavLink,
		anchor: 'Camiones',
		to: '/customer',
		icon: <CIcon name="cil-user" customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		_component: 'CNavItem',
		as: NavLink,
		anchor: 'Destinos',
		to: '/item',
		icon: <CIcon name="cil-inbox" customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		_component: 'CNavTitle',
		anchor: 'In',
	},
	{
		_component: 'CNavItem',
		as: NavLink,
		anchor: 'Users',
		to: '/users',
		icon: <CIcon name="cil-user" customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		_component: 'CNavItem',
		as: NavLink,
		anchor: 'Reports',
		to: '/item',
		icon: <CIcon name="cil-print" customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		_component: 'CNavItem',
		as: NavLink,
		anchor: 'Settings',
		to: '/item',
		icon: <CIcon name="cil-settings" customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
];

export default _nav;

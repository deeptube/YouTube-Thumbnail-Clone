import React from 'react';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatShotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function SideBar() {
	return (
		<div className="sideBar">
			<div className="sideBar__home">
				<HomeIcon />
				<h6>Home</h6>
			</div>
			<div className="sideBar__trending">
				<WhatShotIcon />
				<h6>Trending</h6>
			</div>
			<div className="sideBar__subs">
				<SubscriptionsIcon />
				<h6>Subscriptions</h6>
			</div>
			<div className="sideBar__lib">
				<VideoLibraryIcon />
				<h6>Library</h6>
			</div>
		</div>
	);
}

export default SideBar;

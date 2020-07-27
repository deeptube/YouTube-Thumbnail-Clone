import React, { useState } from 'react';
import './VideoCard.css';
import { TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

function VideoCard({ thumbnailUrl, title, channelName, noOfViews, channelImageUrl, postedDate }) {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="videoCard">
			<Modal open={open} onClose={handleClose}>
				<TextField />
			</Modal>
			<img src={thumbnailUrl} alt="thumbnail" className="videoCard__thumbnailImg" />
			<div className="videoCard__info">
				<img src={channelImageUrl} alt="channel-img" className="videoCard__channelImg" />

				<div className="videoCard__infoText">
					<p className="videoCard__title">{title}</p>
					<p className="videoCard__channelName">{channelName}</p>
					<p className="videoCard__noOfViewsAndDate">
						{noOfViews} • {postedDate}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../assets';
import { Gap, Link } from '../../components';
import './detail-blog.scss';

const DetailBlog = () => {
	const history = useHistory();
	return (
		<div className="detail-blog-wrapper">
			<img className="img-cover" src={RegisterBg} alt="thumb" />
			<p className="blog-title">Title Blog</p>
			<p className="blog-author">Author - Date Post</p>
			<p className="blog-body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				quibusdam voluptatibus fuga ex reprehenderit atque debitis maxime,
				repellat corrupti quis praesentium doloremque adipisci! Fuga porro
				delectus nulla consequatur sit et.
			</p>
			<Gap height={20} />
			<Link title="Kembali ke Home" onClick={() => history.push('/')} />
		</div>
	);
};

export default DetailBlog;

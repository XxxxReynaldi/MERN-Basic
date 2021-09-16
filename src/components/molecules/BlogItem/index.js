import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Gap } from '../..';
import { RegisterBg } from '../../../assets';
import './blog-item.scss';

const BlogItem = () => {
	const history = useHistory();
	return (
		<div className="blog-item">
			<img className="image-thumb" src={RegisterBg} alt="post" />
			<div className="content-detail">
				<p className="title">Title Blog</p>
				<p className="author">Author - Date post</p>
				<p className="body">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
					laudantium sapiente itaque quisquam nihil. Consequuntur, fugiat!
					Maiores commodi magnam temporibus at accusantium laboriosam officia
					similique ducimus, quia dolores, cum sapiente.
				</p>
				<Gap height={20} />
				<Button
					title="View Detail"
					onClick={() => history.push('/detail-blog')}
				/>
			</div>
		</div>
	);
};

export default BlogItem;

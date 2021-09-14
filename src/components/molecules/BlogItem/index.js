import React from 'react';
import { RegisterBg } from '../../../assets';
import './blog-item.scss';

const BlogItem = () => {
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
			</div>
		</div>
	);
};

export default BlogItem;

import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { blogPostsMetadata } from '../Blogposts/blogPostsMetadata';
import { Container, BlogPostCard } from '../../Components/Layout';


const BlogPostsContainer = styled.div`
	display: grid;
`

function blog() {
	const history = useHistory();

	return (
		<Container>
			<BlogPostsContainer>
			{blogPostsMetadata.map((post) => {
				const date = post.date.toISOString().split('T')[0];
				const tags = post.tags.join(', ');

				return (
					<BlogPostCard key={post.title} onClick={() => history.push(post.fullProjectPath)}>
						<div className="description">
							<div>
								<h3>{post.title}</h3>
								<p>{post.description}</p>
							</div>
							<img src={post.thumbnail} alt={`thumbnail for ${post.title}`} />
						</div>
						<hr></hr>
						<div className="metadata">
							<span>{tags}</span>
							<span className="date">{date}</span>
						</div>
					</BlogPostCard>
				);
			})}
			</BlogPostsContainer>
		</Container>
	);
}

export default blog;

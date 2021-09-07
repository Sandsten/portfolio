import * as React from 'react';

import { blogPostsMetadata } from '../Content/Blogposts/blogPostsMetadata';
import { Container, BlogPostCard } from '../Content/Blogposts/styledComponents';

function blog() {
  return (
    <Container>
      {blogPostsMetadata.map(post => {
        const date = post.date.toISOString().split("T")[0];
        const tags = post.tags.join(", ");

        return (
          <BlogPostCard key={post.fullProjectPath}>
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
        )  
      })}
    </Container>
  );
}

export default blog;
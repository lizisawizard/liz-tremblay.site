import React, { useState, useEffect } from "react";
import butter from "../butter-client";
import Construction from "../assets/icons/Construction";

const Blog = () => {
  const [blogData, setBlogData] = useState({ meta: {}, data: [] });
  const showBlogs = false;

  useEffect(() => {
    const retrieveData = async () => {
      let page = 1;

      const resp = await butter.post.list({ page: page, page_size: 10 });
      setBlogData(resp.data);
    };
    retrieveData();
  }, []);

  const BlogPanel = ({ title, date, description, image, image_alt }) => {
    const newdate = new Date(date);

    return (
      <div className="blog-post">
        {image ? (
          <img
            className="blog-post__image"
            src={image}
            alt={image_alt}
          />
        ) : (
          <div className="blog-post__image-empty"></div>
        )}
        <h3 className="blog-post__title">{title}</h3>
        <p className="blog-post__date">{newdate.toDateString()}</p>
        <p className="blog-post__description">{description}</p>
      </div>
    );
  };

  return (
    <div className="blog">
      <h2>personal blog</h2>
      <p className="blog-description">
        the thoughts and reflections of a young goon.
      </p>
      {showBlogs ? (
        <div className="blog-post__container">
          {blogData.data.map((blogPost) => (
            <BlogPanel
              key={blogPost.title}
              title={blogPost.title}
              date={blogPost.created}
              description={blogPost.summary}
              image={blogPost.featured_image}
              image_alt={blogPost.featured_image_alt}
            />
          ))}
        </div>
      ) : (
        <div className="no-blogs">
          <Construction></Construction>
          <div className="no-blogs__text-wrapper">
            <h3>no blogs out yet, come back soon!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

import React from 'react'

const PostDetailsPage = () => {
  return (
    <div>PostDetailsPage</div>
  )
}

export default PostDetailsPage;

export async function generateStaticParams() {
  return [{ slug: "1" }];
}
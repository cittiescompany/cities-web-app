import PostEngagement from '@/components/pages/PostEngagement'
import React from 'react'

const PostEngagementPage = () => {
  return (
    <div>
      <PostEngagement />
    </div>
  )
}

export default PostEngagementPage;

export async function generateStaticParams() {
  return [{ slug: "1" }];
}
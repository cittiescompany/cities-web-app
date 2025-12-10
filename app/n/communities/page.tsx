'use client';

import Community from '@/components/communities/Community'
import MainDetailsPage from "@/components/communities/details/MainDetailsPage";
// import CommunityList from '@/components/communities/CommunityList'
import React from 'react'
import { useSearchParams } from 'next/navigation';

const CommunitiesPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // If id is provided, show community details
  if (id) {
    return (
      <div>
        <MainDetailsPage slug={id} />
      </div>
    );
  }

  // Otherwise show communities listing
  return (
    <div>
        <Community/>
        {/* <CommunityList/> */}
    </div>
  )
}

export default CommunitiesPage
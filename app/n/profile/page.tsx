'use client';

import React from 'react'
import { ProfilePage } from '@/components/pages/ProfilePage'
import { OtherUserProfile } from "@/components/profiles/OtherUserProfile";
import { useSearchParams } from 'next/navigation';

const UserProfilePage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // If id is provided, show other user profile
  if (id) {
    return (
      <div>
        <OtherUserProfile slug={id} />
      </div>
    );
  }

  // Otherwise show current user profile
  return (
    <div>
        <ProfilePage />
    </div>
  )
}

export default UserProfilePage
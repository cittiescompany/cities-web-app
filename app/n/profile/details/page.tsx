import { OtherUserProfile } from "@/components/profiles/OtherUserProfile";
import { Suspense } from "react";

const ProfileDetailsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherUserProfile />
    </Suspense>
  )
}

export default ProfileDetailsPage;

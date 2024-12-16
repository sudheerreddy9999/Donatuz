"use client";

import { HuddleClient, HuddleProvider } from "@huddle01/react";

export default function VideoCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const huddleClient = new HuddleClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  });

  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
}

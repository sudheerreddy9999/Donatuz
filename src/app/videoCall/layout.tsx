"use client";

import { HuddleClient, HuddleProvider } from "@huddle01/react";

export default function VideoCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const huddleClient = new HuddleClient({
    projectId:"pi_tXMgaQJcLt4CiBkx",
  });

  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
}

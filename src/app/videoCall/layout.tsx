"use client";

import { HuddleClient, HuddleProvider } from "@huddle01/react";

export default function VideoCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const huddleClient = new HuddleClient({
    projectId:"9mqBbib-0SoWyQBxXMExY8VaGee1e9lO",
  });

  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
}

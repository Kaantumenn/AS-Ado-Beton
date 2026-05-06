import { PageLoadGate } from "@/components/site/PageLoadGate";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageLoadGate>{children}</PageLoadGate>;
}

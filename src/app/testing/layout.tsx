import { ReactNode } from "react";

interface TestingProps {
  children: ReactNode;
}

export default function TestingPage({ children }: TestingProps) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

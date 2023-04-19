import Footer from "@/components/Footer";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-screen">
        <main className="m-auto w-1/3">{children}</main>
      </div>
      <Footer />
    </>
  );
}

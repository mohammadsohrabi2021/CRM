import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>LearnWeb CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <Link href='/'>LearnWeb</Link> Next.js Project | CRM Project &copy;
      </footer>
    </>
  );
};

export default Layout;

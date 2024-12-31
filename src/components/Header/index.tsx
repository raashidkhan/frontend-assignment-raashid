import Link from "next/link";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Posts</h1>
        <Link href="/posts/new">
          <button className="create-btn">Create New Post</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

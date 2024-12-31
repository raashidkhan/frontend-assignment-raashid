"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      if (res.ok) {
        alert("Post created successfully!");
        router.push("/");
      }
    } catch (error) {
      alert("Failed to create post");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const breadcrumbLinks = [
    { label: "Posts", url: "/" },
    { label: "New Post", url: "/posts/new" },
  ];

  return (
    <PageLayout>
      <Breadcrumb links={breadcrumbLinks} activeLink="/posts/new" />
      <form onSubmit={handleSubmit}>
        <h1>Create a New Post</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading && (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                fill="transparent"
              />
              <path
                d="M93.9716 50C93.9716 75.1288 75.1288 93.9716 50 93.9716C24.8712 93.9716 6.02844 75.1288 6.02844 50C6.02844 24.8712 24.8712 6.02844 50 6.02844C75.1288 6.02844 93.9716 24.8712 93.9716 50Z"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span>Create Post</span>
        </button>
      </form>
    </PageLayout>
  );
}
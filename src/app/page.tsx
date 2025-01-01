import Breadcrumb from "@/components/Breadcrumb";
import PageLayout from "@/components/PageLayout";
import { Metadata } from "next";
import Head from "next/head";

import Link from "next/link";

interface POSTS {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Homepage",
    description: "Welcome to homepage",
  };
}

export default async function HomePage() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return <div>Error loading posts</div>;
    }

    const posts = await res.json();

    const breadcrumbLinks = [{ label: "Posts", url: "/" }];

    return (
      <>
        <Head>
          <title>Homepage</title>
        </Head>
        <PageLayout>
          <Breadcrumb links={breadcrumbLinks} activeLink="/" />
          <div className="cards-container">
            {posts.map((post: POSTS) => (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <div className="card">
                  <h3>{post.title}</h3>
                  <p>{post.body.substring(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </PageLayout>
      </>
    );
  } catch (error) {
    console.log(error);
  }
}

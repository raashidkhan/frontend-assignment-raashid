import Breadcrumb from "@/components/Breadcrumb";
import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import Link from "next/link";

interface POSTS {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const breadcrumbLinks = [{ label: "Posts", url: "/" }];

  return (
    <PageLayout>
      <Head>
        <title>Homepage - My Blog</title>
        <meta
          name="description"
          content="Welcome to my blog! Explore the latest posts and share your thoughts."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
      </Head>
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
  );
}

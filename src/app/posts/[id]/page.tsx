import Breadcrumb from "@/components/Breadcrumb";
import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return <h1>Post Not Found</h1>;
  }
  const post = await res.json();

  const breadcrumbLinks = [
    { label: "Posts", url: "/" },
    { label: post.title, url: `/posts/${post.id}` },
  ];
  return (
    <PageLayout>
      <Head>
        <title>Create a New Post</title>
        <meta
          name="description"
          content="Create a new post on our platform. Share your thoughts and ideas!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/posts/new" />
      </Head>
      <Breadcrumb links={breadcrumbLinks} activeLink={`/posts/${post.id}`} />
      <article className="article-container">
        <h1>
          {post.title}{" "}
          <Link href={`/posts/edit/${post.id}`}>
            <button>Edit Post</button>
          </Link>
        </h1>
        <p>{post.body}</p>
      </article>
    </PageLayout>
  );
}

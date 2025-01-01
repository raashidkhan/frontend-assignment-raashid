import Breadcrumb from "@/components/Breadcrumb";
import PageLayout from "@/components/PageLayout";
import { fetchPostById } from "@/lib/utils";
import Link from "next/link";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const post = await fetchPostById(id);
//   return {
//     title: post.title,
//     description: post.body.substring(0, 150),
//   };
// }

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const post = await fetchPostById(id);

    const breadcrumbLinks = [
      { label: "Posts", url: "/" },
      { label: post.title, url: `/posts/${post.id}` },
    ];

    return (
      <>
        <title>{post.title}</title>
        <meta name="description" content={post.body} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/posts/new" />

        <PageLayout>
          <Breadcrumb
            links={breadcrumbLinks}
            activeLink={`/posts/${post.id}`}
          />
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
      </>
    );
  } catch (error) {
    console.log(error);
  }
}

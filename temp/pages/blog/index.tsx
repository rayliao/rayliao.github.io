import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog | RayLiao</title>
      </Head>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blog;

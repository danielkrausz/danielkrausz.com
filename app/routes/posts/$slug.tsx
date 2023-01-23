import { LoaderFunction, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPost } from "~/posts";

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "missing params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Post: {post.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

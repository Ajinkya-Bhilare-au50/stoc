import { Suspense } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { findPost, POSTS } from "./posts";
import { ROUTES } from "../../config/routes";
import NotFoundPage from "../../pages/NotFoundPage";
import Spinner from "../../components/ui/Spinner";

/** Single article: consistent reading column + "more articles". */
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = findPost(slug);
  if (!post) return <NotFoundPage />;

  const { Component } = post;
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Link
              to={ROUTES.blog}
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink"
            >
              <ArrowLeftIcon className="h-4 w-4" aria-hidden /> All articles
            </Link>
            <p className="mt-6 flex items-center gap-2 text-xs text-ink-subtle">
              <span className="badge badge-neutral">{post.category}</span>
              {post.minutes} min read
            </p>
            <div className="article mt-4">
              <Suspense
                fallback={
                  <div className="flex justify-center py-20">
                    <Spinner />
                  </div>
                }
              >
                <Component />
              </Suspense>
            </div>
          </div>
        </div>
      </article>

      <section className="section-tight border-t border-line">
        <div className="container-page">
          <h2 className="section-title">More articles</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link to={`${ROUTES.blog}/${p.slug}`} className="card card-interactive block h-full">
                  <span className="badge badge-neutral">{p.category}</span>
                  <h3 className="mt-3 text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

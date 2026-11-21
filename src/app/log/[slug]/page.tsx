import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';
import {
  getPost,
  getPostMetadata,
  getPostSlugs,
  PostArticle,
} from '@features/posts';

const TYPE = 'log';
const BASE_PATH = '/log/';

interface LogPostProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getPostSlugs(TYPE);
}

export async function generateMetadata({
  params,
}: LogPostProps): Promise<Metadata> {
  const { slug } = await params;
  return getPostMetadata(TYPE, slug, BASE_PATH);
}

async function LogPost({ params }: LogPostProps): Promise<JSX.Element> {
  const { slug } = await params;
  const detail = await getPost(TYPE, slug);
  if (!detail) notFound();

  return <PostArticle detail={detail} />;
}

export default LogPost;

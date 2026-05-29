import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllArticleSlugs, getArticleData, getSortedArticlesData } from '@/lib/articles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, MessageCircle, Link as LinkIcon } from 'lucide-react';

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleData(resolvedParams.slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} | Solagates Resources`,
    description: article.excerpt,
    keywords: article.seoKeywords,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getArticleData(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Get related articles (just grab 3 others from the same category or overall)
  const allArticles = getSortedArticlesData();
  const relatedArticles = allArticles
    .filter(a => a.slug !== resolvedParams.slug && (a.category === article.category || true))
    .slice(0, 3);

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shareUrl = `https://solagates.com/resources/${resolvedParams.slug}`;

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Premium Hero */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
        </div>
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto max-w-4xl">
          <Link href="/resources" className="inline-flex items-center text-sm font-sans font-bold uppercase tracking-widest text-accent hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {article.category}
            </span>
          </div>

          <h1 className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-8 tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 font-sans text-sm text-grey-400 font-medium">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Author" className="w-8 h-8 rounded-full bg-white/10 p-1" />
              <span className="text-white">{article.author}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-grey-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {formattedDate}
            </div>
            <div className="w-1 h-1 rounded-full bg-grey-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Social Share / TOC Sidebar (Desktop) */}
          <div className="hidden lg:block w-48 shrink-0">
            <div className="sticky top-32">
              <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-grey-500 mb-6">Share Article</h4>
              <div className="flex flex-col gap-4">
                <a href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-[#25D366] hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-[#0A66C2] hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="flex-grow max-w-[820px]">
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-grey-700 prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-primary prose-blockquote:border-l-accent prose-blockquote:bg-grey-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-primary prose-img:rounded-3xl prose-img:shadow-xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Mobile Share */}
            <div className="mt-16 pt-8 border-t border-grey-200 lg:hidden flex items-center gap-4">
              <span className="font-sans font-bold text-sm uppercase tracking-widest text-grey-500">Share:</span>
              <a href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                <LinkIcon className="w-5 h-5" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-[#0A66C2] hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-24 bg-grey-50 border-t border-grey-200">
          <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
            <h2 className="font-display font-bold text-3xl text-primary mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((post) => (
                <Link key={post.slug} href={`/resources/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-3xl overflow-hidden border border-grey-200 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{post.category}</span>
                      <h3 className="font-display font-bold text-xl text-primary leading-tight mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                      <p className="font-sans text-sm text-grey-600 line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
                      <div className="mt-auto flex items-center font-sans font-bold text-xs uppercase tracking-widest text-primary">
                        Read <ArrowLeft className="w-3 h-3 ml-2 rotate-180" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

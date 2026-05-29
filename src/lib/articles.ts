import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface ArticleData {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  excerpt: string;
  content: string;
  seoKeywords?: string[];
}

export function getSortedArticlesData(): Omit<ArticleData, 'content'>[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<ArticleData, 'slug' | 'content'>),
      };
    });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

export function getArticleData(slug: string): ArticleData | null {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as Omit<ArticleData, 'slug' | 'content'>),
  };
}

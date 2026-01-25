import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const contentDirectory = path.join(process.cwd(), 'content');

export interface SermonFrontmatter {
  title: string;
  date: string;
  speaker: string;
  series?: string;
  videoUrl?: string;
  audioUrl?: string;
  notesUrl?: string;
}

export interface EventFrontmatter {
  title: string;
  date: string;
  time?: string;
  location?: string;
  recurring?: boolean;
}

export interface ResourceFrontmatter {
  title: string;
  date: string;
  type?: string;
}

export async function getSermons(): Promise<Array<{ slug: string; frontmatter: SermonFrontmatter }>> {
  const sermonsDirectory = path.join(contentDirectory, 'sermons');

  if (!fs.existsSync(sermonsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(sermonsDirectory);
  const sermons = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(sermonsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data as SermonFrontmatter,
      };
    });

  return sermons.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

export async function getSermonBySlug(slug: string): Promise<{ frontmatter: SermonFrontmatter; content: string } | null> {
  const sermonsDirectory = path.join(contentDirectory, 'sermons');
  const fullPath = path.join(sermonsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter: data as SermonFrontmatter,
    content: contentHtml,
  };
}

export async function getEvents(locale: string = 'en'): Promise<Array<{ slug: string; frontmatter: EventFrontmatter }>> {
  const eventsDirectory = path.join(contentDirectory, 'events', locale);

  if (!fs.existsSync(eventsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(eventsDirectory);
  const events = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data as EventFrontmatter,
      };
    });

  return events.sort((a, b) => {
    return new Date(a.frontmatter.date).getTime() - new Date(b.frontmatter.date).getTime();
  });
}

export async function getEventBySlug(slug: string, locale: string = 'en'): Promise<{ frontmatter: EventFrontmatter; content: string } | null> {
  const eventsDirectory = path.join(contentDirectory, 'events', locale);
  const fullPath = path.join(eventsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter: data as EventFrontmatter,
    content: contentHtml,
  };
}

export async function getResources(locale: string = 'en'): Promise<Array<{ slug: string; frontmatter: ResourceFrontmatter }>> {
  const resourcesDirectory = path.join(contentDirectory, 'resources', locale);

  if (!fs.existsSync(resourcesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(resourcesDirectory);
  const resources = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(resourcesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data as ResourceFrontmatter,
      };
    });

  return resources.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

export async function getResourceBySlug(slug: string, locale: string = 'en'): Promise<{ frontmatter: ResourceFrontmatter; content: string } | null> {
  const resourcesDirectory = path.join(contentDirectory, 'resources', locale);
  const fullPath = path.join(resourcesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter: data as ResourceFrontmatter,
    content: contentHtml,
  };
}

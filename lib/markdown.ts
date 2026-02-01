import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

import remarkGfm from 'remark-gfm';

function processEmbeds(content: string): string {
  return content.replace(/{{\s*embed:\s*(.*?)\s*}}/g, (match, url) => {
    url = url.trim();

    // Instagram
    if (url.includes('instagram.com')) {
      return `
<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
  <div style="padding:16px;">
    <a href="${url}" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
      View this post on Instagram
    </a>
  </div>
</blockquote>`;
    }

    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      if (url.includes('v=')) {
        videoId = url.split('v=')[1]?.split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      }

      if (videoId) {
        return `
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 2rem; border-radius: 0.5rem;">
  <iframe src="https://www.youtube.com/embed/${videoId}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`;
      }
    }

    // Default: just link to it if unknown
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

const contentDirectory = path.join(process.cwd(), 'content');

export interface ServiceFrontmatter {
  title: string;
  date: string;
  speaker: string;
  series?: string;
  videoUrl?: string; // This will be used for YouTube live streams
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

export async function getServices(locale: string = 'en'): Promise<Array<{ slug: string; frontmatter: ServiceFrontmatter }>> {
  const servicesDirectory = path.join(contentDirectory, 'services', locale);

  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(servicesDirectory);
  const services = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(servicesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data as ServiceFrontmatter,
      };
    });

  return services.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

export async function getServiceBySlug(slug: string, locale: string = 'en'): Promise<{ frontmatter: ServiceFrontmatter; content: string } | null> {
  const servicesDirectory = path.join(contentDirectory, 'services', locale);
  const fullPath = path.join(servicesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const contentWithEmbeds = processEmbeds(content);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(contentWithEmbeds);
  const contentHtml = processedContent.toString();

  return {
    frontmatter: data as ServiceFrontmatter,
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

  const contentWithEmbeds = processEmbeds(content);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(contentWithEmbeds);
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

  const contentWithEmbeds = processEmbeds(content);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(contentWithEmbeds);
  const contentHtml = processedContent.toString();

  return {
    frontmatter: data as ResourceFrontmatter,
    content: contentHtml,
  };
}

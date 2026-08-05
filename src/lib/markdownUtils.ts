import GithubSlugger from 'github-slugger';

export interface Heading {
  level: number;
  text: string;
  id: string;
}

export function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  return (markdown.match(/^#{1,3} .+/gm) ?? [])
    .filter((line) => !line.startsWith('# ')) // skip h1 (page title)
    .map((line) => {
      const level = (line.match(/^#+/) as RegExpMatchArray)[0].length;
      const text = line.replace(/^#+\s/, '');
      const id = slugger.slug(text);
      return { level, text, id };
    });
}

export function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---[\s\S]*?---\n?/, '');
}

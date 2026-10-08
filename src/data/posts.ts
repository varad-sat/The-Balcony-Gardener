import { Category, Post } from '../types';
import { post1Starter } from './posts/post1_starter';
import { post2Herbs } from './posts/post2_herbs';
import { post3Tomatoes } from './posts/post3_tomatoes';
import { post4Sunlight } from './posts/post4_sunlight';
import { post5Pots } from './posts/post5_pots';
import { post6Compost } from './posts/post6_compost';
import { post7Watering } from './posts/post7_watering';
import { post8Greens } from './posts/post8_greens';
import { post9Flowers } from './posts/post9_flowers';
import { post10PestControl } from './posts/post10_pestcontrol';

export const allPosts: Post[] = [
  post1Starter,
  post2Herbs,
  post3Tomatoes,
  post4Sunlight,
  post5Pots,
  post6Compost,
  post7Watering,
  post8Greens,
  post9Flowers,
  post10PestControl
];

export const CATEGORIES: Category[] = [
  'All',
  'Herbs',
  'Vegetables',
  'Flowers',
  'Basics',
  'Care & Problems'
];

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getFeaturedPost(): Post {
  return allPosts.find((p) => p.featured) || allPosts[0];
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(currentSlug: string): { prevPost?: Post; nextPost?: Post } {
  const index = allPosts.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return {};
  
  return {
    prevPost: index > 0 ? allPosts[index - 1] : undefined,
    nextPost: index < allPosts.length - 1 ? allPosts[index + 1] : undefined
  };
}

export function getRelatedPosts(currentSlug: string, count = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return allPosts.slice(0, count);

  // Match same category first, then other posts, excluding current
  const others = allPosts.filter((p) => p.slug !== currentSlug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const differentCategory = others.filter((p) => p.category !== current.category);

  return [...sameCategory, ...differentCategory].slice(0, count);
}

export function calculateTotalWordCount(post: Post): number {
  let count = 0;
  count += post.title.split(/\s+/).length;
  count += post.subtitle.split(/\s+/).length;
  count += post.excerpt.split(/\s+/).length;
  count += post.quickTip.text.split(/\s+/).length;
  count += post.conclusion.split(/\s+/).length;

  for (const section of post.sections) {
    count += section.heading.split(/\s+/).length;
    if (section.subheading) count += section.subheading.split(/\s+/).length;
    for (const p of section.paragraphs) {
      count += p.split(/\s+/).length;
    }
    if (section.bulletPoints) {
      for (const bp of section.bulletPoints) {
        count += bp.split(/\s+/).length;
      }
    }
    if (section.steps) {
      for (const step of section.steps) {
        count += (step.title + ' ' + step.detail).split(/\s+/).length;
      }
    }
  }
  return count;
}

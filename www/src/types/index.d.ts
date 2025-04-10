import type { CollectionEntry, CollectionKey } from "astro:content";
import type { MarkdownHeading } from "astro";

export type GenericEntry = CollectionEntry<CollectionKey>;

export type AboutEntry = CollectionEntry<"about">;
export type AuthorsEntry = CollectionEntry<"authors">;
export type BlogEntry = CollectionEntry<"blog">;
export type DocsEntry = CollectionEntry<"docs">;
export type HomeEntry = CollectionEntry<"home">;
export type IndexCardsEntry = CollectionEntry<"indexCards">;
export type PoetryEntry = CollectionEntry<"poetry">;
export type RecipesEntry = CollectionEntry<"recipes">;
export type TermsEntry = CollectionEntry<"terms">;

export type SearchableEntry =
  | AboutEntry
  | AuthorsEntry
  | BlogEntry
  | DocsEntry
  | PoetryEntry
  | RecipesEntry
  | TermsEntry;

export type SocialLinks = {
  discord?: string;
  email?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedIn?: string;
  pinterest?: string;
  tiktok?: string;
  website?: string;
  youtube?: string;
}

export type EntryReference = {
  id: string;
  collection: string;
};

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export type MenuItem = {
  title?: string;
  id: string;
  children: MenuItem[];
};

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
  title?: string;
  id: string;
  draft: boolean;
  children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItemWithDraft[];
  level: number;
};

// Rotas Types

/**
 * Component result from the functional renderer
 */
export type ComponentResult = { tag: 'ok', value: any } | { tag: 'err', error: Error };

/**
 * Option type for nullable values
 */
export type OptionType<T> = { tag: 'some', value: T } | { tag: 'none' };

/**
 * Layout component type
 */
export type Layout = any;

/**
 * Meta information for routes
 */
export type Meta = Record<string, any>;

/**
 * Component definition
 */
export type Component = string | { name: string, props?: Record<string, any> };

/**
 * Route view configuration
 */
export type RouteView = {
  component?: Component;
  layout?: string;
  includes?: Record<string, ComponentType>;
};

/**
 * Route meta information
 */
export type RouteMetaType = Record<string, any>;
export type RouteMeta = RouteMetaType;

/**
 * Route configuration
 */
export type RouteConfigType = {
  pattern: string;
  views?: RouteViewType;
  meta?: RouteMetaType | ((params: Record<string, string>) => Promise<RouteMetaType>);
  models?: Record<string, {
    validate?: (value: string) => Promise<boolean>;
    transform?: (value: string) => Promise<any>;
  }>;
  controllers?: {
    handler?: (params: Record<string, string>) => Promise<any>;
  };
};

/**
 * Renderer result
 */
export type RenderResultType = {
  meta: RouteMeta;
  component: ComponentResult;
  layout: Layout;
  includes: Record<string, any>;
  props: Record<string, any>;
  data: any;
  error?: Error;
};

/**
 * Alias for backward compatibility
 */
export type RenderResult = RenderResultType;

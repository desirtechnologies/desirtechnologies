/**
 * Content Loader Module - Integrates Astro content collections with Rotas routing
 */
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { resolveComponent } from '@/utils/renderer';

// Define collection keys based on actual content collections that exist
// Note: From build output, we can see only 'blog' collection exists currently
export type ContentCollectionKey = 'blog' | 'tech'; // Limited to collections that exist

// Define Result type here to avoid importing from functional
export type Result<T, E = Error> = { tag: 'ok'; value: T } | { tag: 'err'; error: E };

// Define content collection type interface
export interface ContentCollectionConfig {
  collection: string;
  slug?: string;
  filter?: (entry: any) => boolean;
  sort?: (a: any, b: any) => number;
  limit?: number;
}

// Define ContentRoute interface for static route generation
export interface ContentRoute {
  params: { route: string };
  props: { path: string };
}

// Content entry type with proper typing
export type ContentEntry<T extends string> = CollectionEntry<T>;

/**
 * Get a single content entry by collection and slug
 */
export async function getContentEntry(
  collection: ContentCollectionKey, 
  slug: string
): Promise<Result<any, Error>> {
  try {
    const entry = await getEntry(collection, slug);
    if (!entry) {
      return {
        tag: 'err',
        error: new Error(`Content entry not found: ${collection}/${slug}`)
      };
    }
    return { tag: 'ok', value: entry };
  } catch (error) {
    console.error(`Error fetching content entry ${collection}/${slug}:`, error);
    return {
      tag: 'err',
      error: error instanceof Error ? error : new Error(`Unknown error fetching ${collection}/${slug}`)
    };
  }
}

/**
 * Get all entries from a collection with optional filtering, sorting and limits
 * Used both for content display and static path generation at build time
 */
export async function getContentEntries(
  collection: ContentCollectionKey, 
  options: { 
    filter?: (entry: any) => boolean; 
    sort?: (a: any, b: any) => number; 
    limit?: number; 
    forStaticPaths?: boolean;
  } = {}
): Promise<Result<any[], Error>> {
  try {
    const allEntries = await getCollection(collection);
    
    // Apply filter if provided
    let filtered = options.filter ? allEntries.filter(options.filter) : allEntries;
    
    // Apply sorting if provided
    if (options.sort) {
      filtered = [...filtered].sort(options.sort);
    }
    
    // Apply limit if provided
    if (options.limit && options.limit > 0) {
      filtered = filtered.slice(0, options.limit);
    }
    
    return { tag: 'ok', value: filtered };
  } catch (error) {
    console.error(`Error fetching collection ${collection}:`, error);
    return {
      tag: 'err',
      error: error instanceof Error ? error : new Error(`Unknown error fetching ${collection}`)
    };
  }
}

/**
 * Get content data based on the route path segments
 */
export async function getContentFromPath(
  path: string
): Promise<Result<any, Error>> {
  try {
    console.log(`[Content Loader] Resolving content for path: ${path}`);
    
    // Parse path segments
    const segments = path.split('/').filter(Boolean);
    
    // Handle empty path (root route)
    if (segments.length === 0) {
      console.log('[Content Loader] Handling root path, using pages/home');
      return { 
        tag: 'ok', 
        value: {
          title: 'Home',
          description: 'Welcome to our site',
          entries: [],
        }
      };
    }
    
    // First segment is the collection name
    const collection = segments[0];
    console.log(`[Content Loader] Collection: ${collection}`);
    
    // Check if collection exists
    const exists = await collectionExists(collection);
    
    // If we have more segments, treat the second as the slug
    if (segments.length > 1) {
      const slug = segments.slice(1).join('/');
      console.log(`[Content Loader] Looking for entry: ${collection}/${slug}`);
      
      if (exists && isValidCollection(collection)) {
        try {
          // Try to get the content entry if collection exists
          return getContentEntry(collection as ContentCollectionKey, slug);
        } catch (err) {
          console.error(`[Content Loader] Error getting entry ${collection}/${slug}:`, err);
        }
      }
      
      // Fallback with mock data
      return {
        tag: 'ok',
        value: {
          title: `${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
          description: `${collection} article about ${slug}`,
          error: !exists,
          path,
          collection,
          slug,
          mock: !exists
        }
      };
    } else {
      // Collection index page
      console.log(`[Content Loader] Looking for index entry for collection: ${collection}`);
      
      if (exists && isValidCollection(collection)) {
        try {
          // Try getting the index entry if collection exists
          const entryResult = await getContentEntry(collection as ContentCollectionKey, 'index');
          if (entryResult.tag === 'ok') {
            return entryResult;
          }
        } catch (err) {
          console.log(`[Content Loader] No index entry for ${collection}, trying to get all entries`);
        }
        
        // Try to get all entries in the collection
        try {
          const entriesResult = await getContentEntries(collection as ContentCollectionKey);
          if (entriesResult.tag === 'ok') {
            return {
              tag: 'ok',
              value: {
                title: `${collection.charAt(0).toUpperCase() + collection.slice(1)}`,
                entries: entriesResult.value,
                collection
              }
            };
          }
        } catch (err) {
          console.error(`[Content Loader] Error getting entries for ${collection}:`, err);
        }
      }
      
      // Return mock data as fallback
      return {
        tag: 'ok',
        value: {
          ...getMockCollectionData(collection),
          mock: !exists
        }
      };
    }
  } catch (error) {
    console.error(`Error processing content path ${path}:`, error);
    return {
      tag: 'err',
      error: error instanceof Error ? error : new Error(`Unknown error processing path ${path}`)
    };
  }
}

/**
 * Check if a string is a valid content collection key
 */
function isValidCollection(collection?: string): boolean {
  if (!collection) return false;
  return ['tech', 'blog'].includes(collection);
}

/**
 * Check if a collection exists by trying to fetch from it
 */
async function collectionExists(collection: string): Promise<boolean> {
  try {
    // Try to get the collection - if it doesn't exist, Astro will throw an error
    const result = await getCollection(collection);
    return Array.isArray(result) && result.length > 0;
  } catch (error) {
    console.log(`Collection '${collection}' does not exist or is empty`);
    return false;
  }
}

/**
 * Get mock data for a collection when it doesn't exist
 */
function getMockCollectionData(collection: string): {
  title: string;
  description: string;
  entries: any[];
} {
  // Mock data for different collections
  const mockData: Record<string, {
    title: string;
    description: string;
    entries: any[];
  }> = {
    'tech': {
      title: 'Technology',
      description: 'Explore our technology articles and resources',
      entries: [
        { 
          slug: 'ai', 
          data: { 
            title: 'Artificial Intelligence', 
            description: 'The future of AI in web development' 
          } 
        },
        { 
          slug: 'web-dev', 
          data: { 
            title: 'Web Development', 
            description: 'Modern approaches to web development' 
          } 
        }
      ]
    },
    'blog': {
      title: 'Blog',
      description: 'Our latest articles and insights',
      entries: []
    }
  };
  
  return mockData[collection] || {
    title: collection.charAt(0).toUpperCase() + collection.slice(1),
    description: `Collection of ${collection} content`,
    entries: []
  };
}

/**
 * Generate static paths for Astro SSG based on all content collections
 * This function is used by getStaticPaths in [...route].astro to ensure
 * all content routes are pre-rendered at build time
 */
export async function generateContentPaths(): Promise<ContentRoute[]> {
  try {
    // Define the collections we want to support - expanded to include all potential content types
    const potentialCollections = [
      'blog', 'tech', 'docs', 'tutorials', 'projects', 'pages', 
      'articles', 'snippets', 'resources', 'guides'
    ];
    
    // First verify which collections actually exist by trying to load them
    const existsPromises = potentialCollections.map(collection => collectionExists(collection));
    const existsResults = await Promise.all(existsPromises);
    
    // Filter to only collections that actually exist
    const collectionKeys = potentialCollections.filter((col, index) => existsResults[index]);
    
    console.log(`[Content Loader] Found ${collectionKeys.length} valid content collections: ${collectionKeys.join(', ')}`);
    
    // If no collections exist, create mock data for essential collections to ensure routes still work
    if (collectionKeys.length === 0) {
      console.log('[Content Loader] No collections found, creating essential routes with mock data');
      // Add essential collections that should always have routes
      const essentialCollections = ['blog', 'tech'];
      
      // Generate mock routes for essential collections
      const mockRoutes: ContentRoute[] = [];
      
      for (const collection of essentialCollections) {
        // Add collection index route
        mockRoutes.push({
          params: { route: collection },
          props: { path: `/${collection}` }
        });
        
        // Add a few sample routes for each collection
        for (let i = 1; i <= 3; i++) {
          mockRoutes.push({
            params: { route: `${collection}/sample-${i}` },
            props: { path: `/${collection}/sample-${i}` }
          });
        }
      }
      
      console.log(`[Content Loader] Generated ${mockRoutes.length} mock routes for essential collections`);
      return mockRoutes;
    }
    
    // Generate paths for each valid collection
    const pathsPromises = collectionKeys.map(async (collection) => {
      const entriesResult = await getContentEntries(collection as ContentCollectionKey, { forStaticPaths: true });
      
      if (entriesResult.tag === 'err') {
        console.error(`Error generating paths for ${collection}:`, entriesResult.error);
        // Return at least the collection index route even if entries failed
        return [{
          params: { route: collection },
          props: { path: `/${collection}` }
        }];
      }
      
      // Generate collection index route (e.g., /blog)
      const collectionIndexRoute: ContentRoute = {
        params: { route: collection },
        props: { path: `/${collection}` }
      };
      
      // Skip routes with undefined slugs
      const entryRoutes = entriesResult.value
        .filter(entry => entry.slug && entry.slug !== 'undefined')
        .map((entry) => ({
          params: { route: `${collection}/${entry.slug}` },
          props: { path: `/${collection}/${entry.slug}` }
        }));
      
      console.log(`[Content Loader] Generated ${entryRoutes.length} routes for collection '${collection}'`);
      
      return [collectionIndexRoute, ...entryRoutes];
    });
    
    // Flatten array of arrays to a single array of paths
    const pathsArrays = await Promise.all(pathsPromises);
    const allPaths = pathsArrays.flat();
    
    // Add additional static routes that should always be generated
    const additionalRoutes: ContentRoute[] = [
      { params: { route: 'about' }, props: { path: '/about' } },
      { params: { route: 'contact' }, props: { path: '/contact' } },
      { params: { route: 'privacy' }, props: { path: '/privacy' } },
      { params: { route: 'terms' }, props: { path: '/terms' } },
    ];
    
    const finalPaths = [...allPaths, ...additionalRoutes];
    console.log(`[Content Loader] Total generated ${finalPaths.length} content routes`);
    return finalPaths;
  } catch (error) {
    console.error('Error generating content paths:', error);
    // Return basic routes even in case of error to ensure site functionality
    return [
      { params: { route: 'blog' }, props: { path: '/blog' } },
      { params: { route: 'tech' }, props: { path: '/tech' } },
      { params: { route: 'about' }, props: { path: '/about' } },
    ];
  }
}

/**
 * Resolve a component for a content collection based on path
 * This converts a route path like /tech/article-slug to a ComponentResult
 */
export async function resolveContentComponent(routePath: string): Promise<Result<any, Error>> {
  const segments = routePath.split('/').filter(Boolean);
  
  if (segments.length === 0) {
    return { tag: 'err', error: new Error('Invalid route path') };
  }
  
  const [collection, slug] = segments;
  
  if (!isValidCollection(collection)) {
    return { tag: 'err', error: new Error(`Invalid collection: ${collection}`) };
  }
  
  // For collection index (e.g., /blog)
  if (!slug) {
    const componentMap: Record<ContentCollectionKey, string> = {
      'blog': 'blog/BlogList',
      'tech': 'tech/TechList'
    };
    
    return await resolveComponent(componentMap[collection as ContentCollectionKey]);
  }
  
  // For single entries (e.g., /blog/post-slug)
  const componentMap: Record<ContentCollectionKey, string> = {
    'blog': 'blog/BlogPost',
    'tech': 'tech/TechArticle'
  };
  
  return await resolveComponent(componentMap[collection as ContentCollectionKey]);
}

/**
 * Resolve content data based on the route path segments
 */
export async function resolveContentData(
  routePath: string, 
  params: Record<string, string | undefined>
): Promise<Result<any, Error>> {
  try {
    // Map route path to content collection path
    const contentPath = routePath.replace(/^\/(api|content)\//, '/');
    
    // Get content data
    const contentResult = await getContentFromPath(contentPath);
    
    // Process content based on result
    if (contentResult.tag === 'ok') {
      const content = contentResult.value;
      
      // If content has a render method, use it
      if (content.render) {
        const rendered = await content.render();
        return { 
          tag: 'ok', 
          value: {
            content: rendered.Content,
            data: content.data,
            slug: content.slug,
            collection: content.collection,
            headings: rendered.headings,
            remarkPluginFrontmatter: rendered.remarkPluginFrontmatter
          } 
        };
      }
      
      // Otherwise just return the content data
      return { tag: 'ok', value: content };
    }
    
    return contentResult;
  } catch (error) {
    console.error(`Error resolving content for ${routePath}:`, error);
    return {
      tag: 'err',
      error: error instanceof Error ? error : new Error(`Unknown error resolving content for ${routePath}`)
    };
  }
}

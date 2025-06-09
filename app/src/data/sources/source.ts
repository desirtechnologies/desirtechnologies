/**
 * @pragma source
 * @description Data source configuration for Rotas - supports multiple loading strategies
 * @category contour.logos.sator
 */

import type { RouteConfig } from '@/routes/routes';
import path from 'path';
import fs from 'fs/promises';

// Base source interface
export interface DataSource<T = any> {
  type: SourceType;
  schema?: any; // Schema definition, simplified without external dependencies
  load: () => Promise<T>;
  transform?: (data: T) => any;
}

// Available source types
export type SourceType = 
  | 'markdown'      // Markdown files
  | 'mdx'           // MDX files
  | 'yaml'          // YAML data files
  | 'json'          // JSON data files
  | 'rest'          // REST API
  | 'graphql'       // GraphQL API
  | 'custom';       // Custom data source

// Collection source for multiple items
export interface CollectionSource<T = any> extends DataSource<T[]> {
  pattern: string;
  basePath: string;
  idField?: string;
}

// Single item source
export interface ItemSource<T = any> extends DataSource<T> {
  path: string;
}

// REST API source configuration
export interface RestApiSource<T = any> extends DataSource<T> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: any;
}

// GraphQL API source configuration
export interface GraphQLSource<T = any> extends DataSource<T> {
  url: string;
  query: string;
  variables?: Record<string, any>;
  headers?: Record<string, string>;
}

// Markdown collection source
export class MarkdownCollectionSource implements CollectionSource {
  type: SourceType = 'markdown';
  schema?: any;
  
  constructor(
    public pattern: string,
    public basePath: string,
    public idField: string = 'slug'
  ) {}
  
  async load(): Promise<any[]> {
    try {
      const files = await this.getFiles();
      const items = await Promise.all(
        files.map(file => this.loadFile(file))
      );
      return items.filter(Boolean);
    } catch (error) {
      console.error('Error loading markdown collection:', error);
      return [];
    }
  }
  
  private async getFiles(): Promise<string[]> {
    const globPattern = path.join(process.cwd(), this.basePath, this.pattern);
    // In a real implementation, this would use a glob library
    // For simplicity in this MVP, we'll return a mock list
    return [
      path.join(process.cwd(), this.basePath, 'post1.md'),
      path.join(process.cwd(), this.basePath, 'post2.md')
    ];
  }
  
  private async loadFile(filePath: string): Promise<any> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      
      // Simple frontmatter parser (replacing gray-matter dependency)
      const parsedContent = this.parseFrontmatter(content);
      const data = parsedContent.data;
      const markdown = parsedContent.content;
      
      // Generate ID from filename if not in frontmatter
      if (!data[this.idField]) {
        const basename = path.basename(filePath, path.extname(filePath));
        data[this.idField] = basename;
      }
      
      return {
        ...data,
        content: markdown,
        _source: filePath
      };
    } catch (error) {
      console.error(`Error loading file ${filePath}:`, error);
      return null;
    }
  }
  
  // Simple frontmatter parser
  private parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
    const frontmatterMatch = content.match(/^---\s*[\r\n](.*?)\s*---\s*[\r\n]/s);
    
    if (!frontmatterMatch) {
      return { data: {}, content };
    }
    
    const frontmatter = frontmatterMatch[1];
    const remainingContent = content.slice(frontmatterMatch[0].length);
    
    // Parse YAML frontmatter
    const data: Record<string, any> = {};
    frontmatter.split('\n').forEach(line => {
      const parts = line.split(':').map(p => p.trim());
      if (parts.length >= 2) {
        const key = parts[0];
        const value = parts.slice(1).join(':').trim();
        data[key] = value;
      }
    });
    
    return { data, content: remainingContent };
  }
  
  transform(data: any[]): any[] {
    return data;
  }
}

// YAML data source
export class YamlDataSource implements DataSource {
  type: SourceType = 'yaml';
  schema?: any;
  
  constructor(private filePath: string) {}
  
  async load(): Promise<any> {
    try {
      const fullPath = path.join(process.cwd(), this.filePath);
      const content = await fs.readFile(fullPath, 'utf-8');
      // Simple YAML parser (replacing js-yaml dependency)
      return this.parseYaml(content);
    } catch (error) {
      console.error(`Error loading YAML file ${this.filePath}:`, error);
      return {};
    }
  }
  
  // Simple YAML parser
  private parseYaml(content: string): Record<string, any> {
    const result: Record<string, any> = {};
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.trim() === '' || line.trim().startsWith('#')) continue;
      
      const parts = line.split(':').map(p => p.trim());
      if (parts.length >= 2) {
        const key = parts[0];
        const value = parts.slice(1).join(':').trim();
        result[key] = value;
      }
    }
    
    return result;
  }
}

// REST API data source
export class RestApiDataSource implements RestApiSource {
  type: SourceType = 'rest';
  schema?: any;
  
  constructor(
    public url: string,
    public method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    public headers: Record<string, string> = {},
    public params: Record<string, string> = {},
    public body?: any
  ) {}
  
  async load(): Promise<any> {
    try {
      // In a real implementation, this would use fetch
      // For simplicity, we'll return mock data
      return { id: '1', name: 'API Data Example' };
    } catch (error) {
      console.error(`Error fetching data from ${this.url}:`, error);
      return {};
    }
  }
}

// Source registry - tracks all data sources
export class SourceRegistry {
  private static instance: SourceRegistry;
  private sources: Map<string, DataSource> = new Map();
  
  private constructor() {}
  
  static getInstance(): SourceRegistry {
    if (!SourceRegistry.instance) {
      SourceRegistry.instance = new SourceRegistry();
    }
    return SourceRegistry.instance;
  }
  
  register(name: string, source: DataSource): void {
    this.sources.set(name, source);
  }
  
  get(name: string): DataSource | undefined {
    return this.sources.get(name);
  }
  
  getAll(): Map<string, DataSource> {
    return this.sources;
  }
  
  async loadSource(name: string): Promise<any> {
    const source = this.sources.get(name);
    if (!source) {
      throw new Error(`Source not found: ${name}`);
    }
    
    const data = await source.load();
    return source.transform ? source.transform(data) : data;
  }
}

// Initialize common sources
export function initializeSources(): void {
  const registry = SourceRegistry.getInstance();
  
  // Register markdown blog posts
  registry.register('blogPosts', new MarkdownCollectionSource(
    '*.md',
    'src/content/blog',
    'slug'
  ));
  
  // Register site configuration
  registry.register('siteConfig', new YamlDataSource(
    'src/config/site.yaml'
  ));
  
  // Register API data source
  registry.register('apiProducts', new RestApiDataSource(
    'https://api.example.com/products'
  ));
}

// Helper to generate routes from content sources
export async function generateRoutesFromSource(
  sourceName: string,
  routeConfig: {
    basePath: string;
    component: string;
    layout?: string;
    idField?: string;
  }
): Promise<RouteConfig> {
  const registry = SourceRegistry.getInstance();
  const source = registry.get(sourceName);
  
  if (!source) {
    throw new Error(`Source not found: ${sourceName}`);
  }
  
  const data = await source.load();
  const idField = routeConfig.idField || 'id';
  
  // Create collection route
  const route: RouteConfig = {
    pattern: routeConfig.basePath,
    views: {
      component: routeConfig.component,
      layout: routeConfig.layout,
      props: { items: data }
    },
    meta: {
      type: 'collection',
      isCollection: true,
      dataSource: sourceName
    },
    children: {}
  };
  
  // For collections, create child routes for each item
  if (Array.isArray(data)) {
    for (const item of data) {
      const id = item[idField];
      if (!id) continue;
      
      if (!route.children) {
    route.children = {};
  }
  route.children[`:${idField}`] = {
        pattern: `${routeConfig.basePath}/:${idField}`,
        views: {
          component: routeConfig.component.replace('List', 'Detail'),
          layout: routeConfig.layout,
          props: (params: any) => ({
            [idField]: params[idField],
            item: data.find((i: any) => i[idField] === params[idField])
          })
        },
        meta: (params: any) => {
          const item = data.find((i: any) => i[idField] === params[idField]);
          return {
            title: item?.title || `Item ${id}`,
            description: item?.description || '',
            type: 'dynamic'
          };
        }
      };
    }
  }
  
  return route;
}

// Export a default instance for convenience
export const sourceRegistry = SourceRegistry.getInstance();

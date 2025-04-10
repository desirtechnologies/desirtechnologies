# Rotas - A Flexible Routing System for Meta-Frameworks

Rotas is a flexible, hierarchical routing system designed for meta-frameworks. It allows you to define routes in a tree structure with advanced features like dynamic meta information, MVC pattern integration, and support for different content types.

## Key Features

- **Hierarchical Route Structure** - Routes are defined as an object tree with parent-child relationships
- **Dynamic Meta Information** - Meta data can be static or generated via functions/async methods
- **MVC Integration** - Each route can define models, views, and controllers
- **Content Support** - Handle different content types (static, dynamic, collection)
- **Extensible** - Easy to extend with new route types and strategies
- **Framework Agnostic** - Can be used with Astro or other frameworks

## Usage Examples

### Basic Route Definition

```typescript
const routes = {
  '/': {
    pattern: '/',
    views: {
      component: 'Home',
      layout: 'MainLayout',
    },
    meta: {
      title: 'Home Page',
      description: 'Welcome to our site'
    }
  }
};
```

### Nested Routes with Children

```typescript
const routes = {
  '/': {
    // Root route config
    children: {
      'about': {
        pattern: '/about',
        // About page config
      },
      'products': {
        pattern: '/products',
        // Products list page
        children: {
          ':id': {
            pattern: '/products/:id',
            // Individual product page
          }
        }
      }
    }
  }
};
```

### Dynamic Meta Information

```typescript
const productRoute = {
  pattern: '/products/:id',
  meta: async (params) => {
    const product = await fetchProduct(params.id);
    return {
      title: `${product.name} - Product Details`,
      description: product.description
    };
  }
};
```

### Using Model-View-Controller Pattern

```typescript
const userRoute = {
  pattern: '/users/:id',
  models: {
    user: {
      name: 'User',
      validate: (id) => typeof id === 'string' && id.length > 0
    }
  },
  views: {
    component: 'UserProfile',
    props: (params) => ({ userId: params.id })
  },
  controllers: {
    handler: async (params) => {
      return await fetchUserData(params.id);
    }
  }
};
```

## Integration with Astro

Rotas is designed to work seamlessly with Astro pages:

```astro
---
// In your Astro page
import { getPageData } from '@/routes/rotas';

const { meta, props, data, component } = await getPageData(Astro.url.pathname);
const Component = component ? (await import(`@/components/${component}.astro`)).default : null;
---

<Layout title={meta.title} description={meta.description}>
  {Component && <Component {...props} data={data} />}
</Layout>
```

## Loading Routes from Different Sources

Rotas supports loading route configurations from various sources:

- YAML/JSON config files
- Markdown/MDX frontmatter
- External APIs
- In-memory data

```typescript
import { loadAllRoutes } from '@/routes/config-loader';

const routes = await loadAllRoutes();
```

## Next Steps for Development

- Create a CLI tool to generate routes from content files
- Add support for more validation rules in models
- Implement route caching for better performance
- Build middleware system for route controllers
- Add TypeScript typings generation from models

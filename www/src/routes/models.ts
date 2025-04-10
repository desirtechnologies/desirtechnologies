/**
 * Rotas - Models integration
 * 
 * This file provides utilities for working with data models in the Rotas system.
 * It allows loading models from YAML, JSON, or other data sources and integrating
 * them with the routing system.
 */

import type { RouteModel } from './routes';

/**
 * Load model schema from a YAML file
 * @param modelName Name of the model to load
 */
export async function loadModelSchema(modelName: string): Promise<Record<string, any>> {
  try {
    // In a real implementation, this would load from a file
    // For now we're just returning a mock schema
    const mockSchemas: Record<string, Record<string, any>> = {
      product: {
        properties: {
          id: { type: 'string', required: true },
          name: { type: 'string', required: true },
          price: { type: 'number' },
          description: { type: 'string' }
        }
      },
      page: {
        properties: {
          slug: { type: 'string', required: true },
          title: { type: 'string', required: true },
          content: { type: 'string' }
        }
      }
    };
    
    return mockSchemas[modelName] || {};
  } catch (error) {
    console.error(`Error loading model schema for ${modelName}:`, error);
    return {};
  }
}

/**
 * Create a validation function based on a schema
 */
export function createValidator(schema: Record<string, any>) {
  return (data: any): boolean => {
    if (!data) return false;
    
    // Basic validation logic
    for (const [field, rules] of Object.entries(schema.properties || {})) {
      if ((rules as any).required && data[field] === undefined) {
        return false;
      }
      
      if (data[field] !== undefined) {
        const type = (rules as any).type;
        if (type && typeof data[field] !== type) {
          return false;
        }
      }
    }
    
    return true;
  };
}

/**
 * Create a model instance from a schema name
 */
export async function createModel(name: string): Promise<RouteModel> {
  const schema = await loadModelSchema(name);
  
  return {
    name,
    schema,
    validate: createValidator(schema),
    transform: (data: any) => {
      // Identity transform by default
      return data;
    }
  };
}

/**
 * Register a model with additional custom validation/transformation
 */
export function registerModel(
  name: string, 
  validate?: (data: any) => boolean | Promise<boolean>,
  transform?: (data: any) => any | Promise<any>
): RouteModel {
  return {
    name,
    validate,
    transform
  };
}

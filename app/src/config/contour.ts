/**
 * @pragma contour
 * @description Contour meta-language system for Rotas
 * @category contour.logos.sator
 * 
 * This file defines the Contour meta-language, a category-theoretical oriented
 * control language designed for on-the-fly analysis of linguistic systems.
 * It uses the SATOR square hyperoperators to define a data structure called logos
 * which we permute involutions against to create linguistic boundaries (contours).
 */

// The five hyperoperators of the SATOR square
export type SatorOperator = 'SATOR' | 'AREPO' | 'TENET' | 'OPERA' | 'ROTAS';

// These operators represent different dimensions of linguistic transformation
export const SatorDimensions = {
  SATOR: 'creation', // Creation/origination operator
  AREPO: 'movement', // Motion/transformation operator
  TENET: 'binding',  // Connection/relation operator
  OPERA: 'action',   // Operation/function operator
  ROTAS: 'cycle'     // Recursion/iteration operator
};

// Logos structure - the core data structure for linguistic transformation
export interface Logos {
  source: string;       // Original linguistic element
  boundary: string[];   // Contour boundaries
  operators: Record<SatorOperator, any>; // Applied operators
  transformations: any[]; // Result of transformations
  meta: Record<string, any>; // Metadata
}

// Involution - function that is its own inverse when composed with itself
export type Involution = (logos: Logos) => Logos;

// Contour - boundary of linguistic transformation
export interface Contour {
  name: string;
  description?: string;
  involutions: Involution[];
  boundary: string[];
}

// Generate a logos structure from a source
export function createLogos(source: string): Logos {
  return {
    source,
    boundary: [],
    operators: {
      SATOR: null,
      AREPO: null,
      TENET: null,
      OPERA: null,
      ROTAS: null
    },
    transformations: [],
    meta: {}
  };
}

// Apply a sator operator to a logos
export function applySator(logos: Logos, operator: SatorOperator, value: any): Logos {
  return {
    ...logos,
    operators: {
      ...logos.operators,
      [operator]: value
    }
  };
}

// Apply an involution to a logos
export function applyInvolution(logos: Logos, involution: Involution): Logos {
  return involution(logos);
}

// Apply a contour (set of involutions) to a logos
export function applyContour(logos: Logos, contour: Contour): Logos {
  let result = { ...logos };
  
  for (const involution of contour.involutions) {
    result = applyInvolution(result, involution);
  }
  
  result.boundary = [...result.boundary, ...contour.boundary];
  
  return result;
}

// Common involutions
export const involutions = {
  // Identity involution - maps logos to itself
  identity: (logos: Logos) => logos,
  
  // Reversal involution - reverses the source
  reverse: (logos: Logos) => ({
    ...logos,
    source: logos.source.split('').reverse().join(''),
    transformations: [...logos.transformations, 'reverse']
  }),
  
  // Duality involution - maps each element to its dual
  dualize: (logos: Logos) => ({
    ...logos,
    meta: {
      ...logos.meta,
      dual: true
    },
    transformations: [...logos.transformations, 'dualize']
  }),
  
  // Cyclic involution - rotates elements
  cycle: (logos: Logos) => ({
    ...logos,
    operators: {
      SATOR: logos.operators.ROTAS,
      AREPO: logos.operators.SATOR,
      TENET: logos.operators.AREPO,
      OPERA: logos.operators.TENET,
      ROTAS: logos.operators.OPERA
    },
    transformations: [...logos.transformations, 'cycle']
  }),
  
  // Reflection involution - reflects against an axis
  reflect: (logos: Logos) => ({
    ...logos,
    operators: {
      SATOR: logos.operators.ROTAS,
      AREPO: logos.operators.OPERA,
      TENET: logos.operators.TENET, // Remains fixed as the center
      OPERA: logos.operators.AREPO,
      ROTAS: logos.operators.SATOR
    },
    transformations: [...logos.transformations, 'reflect']
  })
};

// Predefined contours
export const contours: Record<string, Contour> = {
  // The "Route" contour for transforming route definitions
  route: {
    name: 'route',
    description: 'Transforms source into route definitions',
    involutions: [involutions.identity, involutions.dualize],
    boundary: ['path', 'component', 'layout']
  },
  
  // The "Component" contour for transforming component definitions
  component: {
    name: 'component',
    description: 'Transforms source into component definitions',
    involutions: [involutions.identity, involutions.dualize],
    boundary: ['name', 'props', 'children']
  },
  
  // The "Model" contour for transforming data models
  model: {
    name: 'model',
    description: 'Transforms source into data model definitions',
    involutions: [involutions.identity, involutions.dualize],
    boundary: ['name', 'fields', 'relations']
  },
  
  // The "Source" contour for transforming data sources
  source: {
    name: 'source',
    description: 'Transforms source into data source definitions',
    involutions: [involutions.identity, involutions.dualize, involutions.cycle],
    boundary: ['type', 'path', 'schema']
  },
  
  // The "Meta" contour for transforming metadata
  meta: {
    name: 'meta',
    description: 'Transforms source into metadata',
    involutions: [involutions.identity, involutions.reflect],
    boundary: ['title', 'description', 'type']
  }
};

// Apply the SATOR square to a linguistic element
export function applySatorSquare(source: string, contourName: string): Logos {
  const logos = createLogos(source);
  const contour = contours[contourName] || contours.route;
  
  // Apply the SATOR operators in order
  const withOperators = applySator(
    applySator(
      applySator(
        applySator(
          applySator(
            logos, 
            'SATOR', { type: 'creation', value: source }
          ),
          'AREPO', { type: 'movement', direction: 'forward' }
        ),
        'TENET', { type: 'binding', connections: contour.boundary }
      ),
      'OPERA', { type: 'action', actions: contour.involutions.map(i => i.name) }
    ),
    'ROTAS', { type: 'cycle', iterations: 1 }
  );
  
  // Apply the contour to the logos
  return applyContour(withOperators, contour);
}

// Convert a Logos to its output representation
export function logosToOutput(logos: Logos): Record<string, any> {
  const output: Record<string, any> = {
    source: logos.source,
    boundary: logos.boundary,
    transformations: logos.transformations
  };
  
  // Add contour-specific output processing
  if (logos.boundary.includes('path')) {
    output.route = {
      path: logos.source,
      component: logos.meta.component || 'Default',
      layout: logos.meta.layout
    };
  }
  
  if (logos.boundary.includes('name')) {
    output.component = {
      name: logos.meta.name || logos.source,
      props: logos.meta.props || {},
      children: logos.meta.children || []
    };
  }
  
  return output;
}

// Parse a source string using the Contour system
export function parseWithContour(source: string, contourName: string): Record<string, any> {
  const logos = applySatorSquare(source, contourName);
  return logosToOutput(logos);
}

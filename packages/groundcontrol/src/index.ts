/**
 * Groundcontrol - A modern headless CMS built with Astro and Drizzle ORM
 */

// Types
export type FieldType = 'text' | 'richText' | 'number' | 'boolean' | 'date';

export interface Field {
  name: string;
  type: FieldType;
  required?: boolean;
  label?: string;
  defaultValue?: any;
}

export interface Collection {
  slug: string;
  fields: Field[];
  label?: string;
  description?: string;
}

export interface GroundControlConfig {
  collections: Collection[];
}

// Collection definition function
export function defineCollection(collection: Collection): Collection {
  return collection;
}

// Main configuration function
export function defineConfig(config: GroundControlConfig): GroundControlConfig {
  return config;
}

// Export version
export const version = '0.0.1';

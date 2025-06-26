/**
 * Groundcontrol Astro Integration
 * This integration sets up the admin panel UI and API routes.
 */
import type { AstroIntegration } from 'astro';

interface GroundControlIntegrationOptions {
  configPath?: string;
}

export default function groundcontrol(options: GroundControlIntegrationOptions = {}): AstroIntegration {
  const configPath = options.configPath || './groundcontrol.config.ts';

  return {
    name: 'groundcontrol',
    hooks: {
      'astro:config:setup': async ({ updateConfig }) => {
        // Add our virtual modules and ensure API endpoints are handled
        updateConfig({
          vite: {
            // Future: Add any necessary Vite plugins
          },
        });
      },

      'astro:server:setup': async ({ server }) => {
        // Future: Set up admin API routes
      },

      'astro:build:setup': async ({ vite, target }) => {
        // Future: Handle build-time configuration
      },
    },
  };
}

// Export version
export const version = '0.0.1';

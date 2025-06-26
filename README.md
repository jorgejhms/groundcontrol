# Groundcontrol

> "A headless CMS, as a nod to David Bowie and the Astro space theme."

An open-source, modern Headless CMS built with Astro and Drizzle ORM. Designed to be a distributable package, inspired by the developer experience and flexibility of Payload CMS.

## Core Philosophy

Groundcontrol is built on a foundation of developer-centric principles, aiming to provide a powerful and transparent content management experience.

- **Code-First as the Source of Truth**: Content structures ("Collections") are defined in TypeScript configuration files. This enables robust version control (using Git), strong typing, and a clear separation of logic.

- **Native Schema Generation**: We reject the use of generic JSONB fields for content. Instead, a generation script reads your collection configuration and translates it into a native Drizzle ORM schema. This leverages the full power of your database engine, ensuring performance and data integrity.

- **UI-Driven Code Generation**: The long-term vision is to merge developer control with user-friendly editing. An integrated UI Schema Builder will allow non-developers to visually modify collections, which then runs the code generator to update the configuration files on disk.

## Development Workflow

This project is structured as a monorepo using pnpm workspaces. Here's how to work with it:

### Project Structure

```
.
├── apps/
│   ├── docs/                     # Starlight documentation website
│   └── playground/               # A basic Astro app for testing Groundcontrol locally
│
├── packages/
│   └── groundcontrol/            # The core CMS package (main development happens here)
│       ├── src/                  # Main source code
│       └── package.json
```

### Development Process

1. **Core Development**
   - All core CMS development happens in `packages/groundcontrol/src/`
   - This is where you implement new features, fix bugs, and enhance existing functionality

2. **Testing Changes**
   - Use the playground app (`apps/playground/`) to test your changes
   - Run `pnpm dev` from the root to start the playground
   - Changes in the core package are immediately reflected in the playground

3. **Documentation**
   - Documentation lives in `apps/docs/` using Starlight
   - Run `pnpm --filter docs dev` to work on the documentation
   - **Important**: Every new feature MUST be documented in Starlight
   - Documentation should include:
     - Feature description
     - Usage examples
     - API reference if applicable
     - Configuration options

### Getting Started

1. **Install Dependencies**
```sh
pnpm install
```

2. **Start Development Server**
```sh
# Start playground for development
pnpm dev

# Start documentation site
pnpm --filter docs dev
```

3. **Available Commands**
```sh
# Run playground
pnpm dev

# Run documentation
pnpm --filter docs dev

# Build all packages
pnpm build

# Run tests
pnpm test
```

### Documentation Guidelines

When adding new features:

1. Create corresponding documentation in `apps/docs/src/content/docs/`
2. Follow the existing documentation structure
3. Include:
   - Detailed explanation of the feature
   - Code examples
   - Configuration options
   - Best practices
4. Update the navigation sidebar in `apps/docs/astro.config.mjs` if needed
5. Test the documentation locally before committing

## Contributing

1. Fork and clone the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes in `packages/groundcontrol/src/`
4. Test your changes in the playground
5. Add documentation for your changes
6. Create a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Roadmap

- [ ] Setup Monorepo: Initialize the project with pnpm workspaces ✅
- [ ] Package Refactor: Abstract the core logic into the packages/groundcontrol directory
- [ ] Define Collection API: Finalize the API for defining collections and fields
- [ ] Schema Generation v1: Implement the core logic for schema generation
- [ ] Authentication Core: Implement user management and authentication
- [ ] Dynamic Admin UI: Create the reusable components and dynamic pages for the admin panel
- [ ] Setup Starlight Site: Initialize the apps/docs project ✅
- [ ] UI Schema Builder (Long-term): Design the interface for visually editing collections
- [ ] Advanced Fields & Relationships: Add support for complex relationships (one-to-many, etc.) in the schema generator
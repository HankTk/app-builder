# Application Builder - Angular Application

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Overview

This is a modern Angular application built with Nx, a powerful build system that provides first-class monorepo support and powerful integrations. The application is designed to be scalable, maintainable, and follows best practices for enterprise-level development.

## Features

- 🚀 Built with latest Angular and Nx
- 📦 Monorepo architecture
- 🎨 Material Design integration
- 🖥️ Electron support for desktop deployment
- 🧪 Comprehensive testing setup
- 🔄 Nx Cloud integration for enhanced build performance
- 📚 Sample library components for reference

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v23.3.0 or later)
- npm (v10 or later) or yarn (v1.22 or later)
- Git

## Getting Started

### Installation

1. Clone the repository:
```sh
git clone [repository-url]
cd app-builder
```

2. Install dependencies:
```sh
npm install
```

### Development

To start the development server:

```sh
npx nx serve
```

The application will be available at `http://localhost:4200`

### Running in Electron Mode

To start the application as a desktop application:

```sh
npm run app
```

## Project Structure

The workspace is organized into the following main components:

```mermaid
graph TD
    A[Application] --> B[Libraries]
    A --> C[Features]
    A --> D[Core]
    
    subgraph Libraries
        B --> B1[components]
        B --> B2[material]
        B --> B3[sample-lib]
    end
    
    subgraph Features
        C --> C1[feature]
        C --> C2[custom]
    end
    
    subgraph Core
        D --> D1[uicore]
        D --> D2[exuicore]
        D --> D3[assets]
        D --> D4[sandbox]
    end
```

### Sample Library

The project includes a sample library component (`sample-lib`) that demonstrates best practices for:
- Component architecture
- State management
- Testing patterns
- Documentation
- Reusable component design

## Available Commands

### Development
| Command | Description |
|---------|-------------|
| `npm run my-app` | Start development server |
| `npm run my-electron` | Start Electron application |
| `npm run electron:serve` | Run both web and Electron apps concurrently |

### Building and Releasing
| Command | Description |
|---------|-------------|
| `npm run electron:build:with-notarize` | Build with notarization for macOS |
| `npm run electron:build:no-notarize` | Build without notarization for macOS |
| `npm run electron:release:with-notarize` | Build and cleanup with notarization |
| `npm run electron:release:no-notarize` | Build and cleanup without notarization |

### Maintenance
| Command | Description |
|---------|-------------|
| `npm run cleanup` | Run cleanup script |
| `npm run generate-icons` | Generate application icons |
| `npm run postinstall` | Install Electron app dependencies |

### Code Generation
| Command | Description |
|---------|-------------|
| `npx nx g @nx/angular:component my-component` | Generate a new component |
| `npx nx g @nx/angular:service my-service` | Generate a new service |
| `npx nx g @nx/angular:lib my-lib` | Generate a new library |

## Nx Cloud Features

This workspace is connected to Nx Cloud, providing:
- 🚀 Remote caching for faster builds
- ⚡ Distributed task execution
- 🧪 Automated test splitting
- 🔍 Flaky test detection
- 📊 Build analytics and insights

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Useful Links

- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.io/docs)
- [Nx Console Extension](https://nx.dev/getting-started/editor-setup)
- [Angular Material](https://material.angular.io)
- [Electron Documentation](https://www.electronjs.org/docs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
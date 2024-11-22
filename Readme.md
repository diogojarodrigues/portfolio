# Portfolio

This is a React-based portfolio project using Vite as the development environment.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed (recommended version 16 or later).
- **Yarn**: Ensure Yarn is installed as the package manager.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Development

To start the development server:
```bash
yarn dev
```
This will launch the project in development mode and typically open it in your browser.

## Build

To create a production build:
```bash
yarn build
```
The build output will be in the `dist` directory.

## Preview

To preview the production build:
```bash
yarn preview
```

## Deployment

The project uses **GitHub Pages** for deployment. To deploy the site:
```bash
yarn deploy
```
This will build the project and push the contents of the `dist` folder to the `gh-pages` branch of your repository.

## Linting

To lint your code:
```bash
yarn lint
```

---

### Technologies Used

- **React**: Library for building user interfaces
- **Bootstrap**: CSS framework for styling
- **Vite**: Frontend build tool
- **EmailJS**: Email integration
- **GitHub Pages**: Deployment

### Scripts Overview

| Script       | Description                                      |
|--------------|--------------------------------------------------|
| `dev`        | Starts the development server                   |
| `build`      | Builds the project for production               |
| `preview`    | Previews the production build                   |
| `lint`       | Runs ESLint to analyze code                     |
| `deploy`     | Deploys the project to GitHub Pages             |
| `predeploy`  | Runs before the `deploy` script, builds project |

---

### Notes

- Ensure the repository's `gh-pages` branch is properly set up for deployment.
- Replace `<repository-url>` with your actual GitHub repository URL.

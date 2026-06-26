# BIMcollab Backstage Demo

This is a Backstage demo app configured with BIMcollab branding, GitHub sign-in, local demo catalog data, Technology Radar, and Announcements.

## Prerequisites

- Node.js 22 or 24
- Yarn 4, via Corepack
- A GitHub OAuth app for local sign-in

The GitHub OAuth app callback URL must be:

```text
http://localhost:7007/api/auth/github/handler/frame
```

## Local Configuration

Create a local config file from the example:

```sh
cp app-config.local.example.yaml app-config.local.yaml
```

Set the GitHub OAuth credentials as environment variables:

```sh
export GITHUB_OAUTH_CLIENT_ID="your-client-id"
export GITHUB_OAUTH_CLIENT_SECRET="your-client-secret"
```

`app-config.local.yaml` is ignored by git and should not contain committed secrets.

The local config imports demo catalog files from the repository root:

```yaml
catalog:
  locations:
    - type: file
      target: ../../../../demo/org.yaml
    - type: file
      target: ../../../../demo/bounded-context/space-admin/catalog-info.yaml
    - type: file
      target: ../../../../demo/bounded-context/document-management/catalog-info.yaml
```

## Install And Start

Install dependencies:

```sh
yarn install
```

Start the app:

```sh
yarn start
```

Open:

```text
http://localhost:3000
```

## Useful Checks

Validate config:

```sh
yarn backstage-cli config:check --config app-config.yaml --config app-config.local.yaml
```

Type-check:

```sh
yarn tsc
```

Build the frontend app:

```sh
yarn workspace app build
```

Build the backend:

```sh
yarn workspace backend build
```

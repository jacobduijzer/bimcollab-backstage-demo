import { SignInPage } from '@backstage/core-components';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { SignInPageBlueprint } from '@backstage/plugin-app-react';

const githubSignInPage = SignInPageBlueprint.make({
  name: 'github',
  params: {
    loader: async () => props => (
      <SignInPage
        {...props}
        provider={{
          id: 'github',
          title: 'GitHub',
          message: 'Sign in with your GitHub account',
          apiRef: githubAuthApiRef,
        }}
      />
    ),
  },
});

export const authModule = createFrontendModule({
  pluginId: 'app',
  extensions: [githubSignInPage],
});

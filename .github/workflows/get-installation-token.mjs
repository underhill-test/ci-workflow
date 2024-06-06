import { createAppAuth } from '@octokit/auth-app';
import * as core from '@actions/core';

async function getInstallationToken() {
  const auth = createAppAuth({
    appId: process.env.APP_ID_2,
    privateKey: process.env.PRIVATE_KEY_2
  });

  const authentication = await auth({ type: 'installation', installationId: process.env.INSTALLATION_ID_2 });
  const token = authentication.token;

  core.setOutput('token', token);
}

getInstallationToken();
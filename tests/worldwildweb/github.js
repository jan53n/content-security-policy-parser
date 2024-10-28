import { $parse } from "../parser.js";
import assert from "assert";

export default function github() {
  const csp = "default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ github.com/webpack/ github.com/assets/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com *.rel.tunnels.api.visualstudio.com wss://*.rel.tunnels.api.visualstudio.com objects-origin.githubusercontent.com copilot-proxy.githubusercontent.com proxy.individual.githubcopilot.com proxy.business.githubcopilot.com proxy.enterprise.githubcopilot.com *.actions.githubusercontent.com wss://*.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ productionresultssa10.blob.core.windows.net/ productionresultssa11.blob.core.windows.net/ productionresultssa12.blob.core.windows.net/ productionresultssa13.blob.core.windows.net/ productionresultssa14.blob.core.windows.net/ productionresultssa15.blob.core.windows.net/ productionresultssa16.blob.core.windows.net/ productionresultssa17.blob.core.windows.net/ productionresultssa18.blob.core.windows.net/ productionresultssa19.blob.core.windows.net/ github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com api.githubcopilot.com api.individual.githubcopilot.com api.business.githubcopilot.com api.enterprise.githubcopilot.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com copilot-workspace.githubnext.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com; img-src 'self' data: blob: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com private-avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github-production-user-asset-6210df.s3.amazonaws.com gist.github.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ github.com/webpack/ github.com/assets/ gist.github.com/assets-cdn/worker/";
  const result = $parse(csp);
  assert.deepEqual(result, {
    'default-src': ["'none'"],
    'base-uri': ["'self'"],
    'child-src': [
      'github.com/assets-cdn/worker/',
      'github.com/webpack/',
      'github.com/assets/',
      'gist.github.com/assets-cdn/worker/;',
      'connect-src',
      "'self'",
      'uploads.github.com',
      'www.githubstatus.com',
      'collector.github.com',
      'raw.githubusercontent.com',
      'api.github.com',
      'github-cloud.s3.amazonaws.com',
      'github-production-repository-file-5c1aeb.s3.amazonaws.com',
      'github-production-upload-manifest-file-7fdce7.s3.amazonaws.com',
      'github-production-user-asset-6210df.s3.amazonaws.com',
      '*.rel.tunnels.api.visualstudio.com',
      'wss://*.rel.tunnels.api.visualstudio.com',
      'objects-origin.githubusercontent.com',
      'copilot-proxy.githubusercontent.com',
      'proxy.individual.githubcopilot.com',
      'proxy.business.githubcopilot.com',
      'proxy.enterprise.githubcopilot.com',
      '*.actions.githubusercontent.com',
      'wss://*.actions.githubusercontent.com',
      'productionresultssa0.blob.core.windows.net/',
      'productionresultssa1.blob.core.windows.net/',
      'productionresultssa2.blob.core.windows.net/',
      'productionresultssa3.blob.core.windows.net/',
      'productionresultssa4.blob.core.windows.net/',
      'productionresultssa5.blob.core.windows.net/',
      'productionresultssa6.blob.core.windows.net/',
      'productionresultssa7.blob.core.windows.net/',
      'productionresultssa8.blob.core.windows.net/',
      'productionresultssa9.blob.core.windows.net/',
      'productionresultssa10.blob.core.windows.net/',
      'productionresultssa11.blob.core.windows.net/',
      'productionresultssa12.blob.core.windows.net/',
      'productionresultssa13.blob.core.windows.net/',
      'productionresultssa14.blob.core.windows.net/',
      'productionresultssa15.blob.core.windows.net/',
      'productionresultssa16.blob.core.windows.net/',
      'productionresultssa17.blob.core.windows.net/',
      'productionresultssa18.blob.core.windows.net/',
      'productionresultssa19.blob.core.windows.net/',
      'github-production-repository-image-32fea6.s3.amazonaws.com',
      'github-production-release-asset-2e65be.s3.amazonaws.com',
      'insights.github.com',
      'wss://alive.github.com',
      'api.githubcopilot.com',
      'api.individual.githubcopilot.com',
      'api.business.githubcopilot.com',
      'api.enterprise.githubcopilot.com',
      'github.githubassets.com'
    ],
    'font-src': ['github.githubassets.com'],
    'form-action': [
      "'self'",
      'github.com',
      'gist.github.com',
      'copilot-workspace.githubnext.com',
      'objects-origin.githubusercontent.com'
    ],
    'frame-ancestors': ["'none'"],
    'frame-src': [
      'viewscreen.githubusercontent.com',
      'notebooks.githubusercontent.com'
    ],
    'img-src': [
      "'self'",
      'data:',
      'blob:',
      'github.githubassets.com',
      'media.githubusercontent.com',
      'camo.githubusercontent.com',
      'identicons.github.com',
      'avatars.githubusercontent.com',
      'private-avatars.githubusercontent.com',
      'github-cloud.s3.amazonaws.com',
      'objects.githubusercontent.com',
      'secured-user-images.githubusercontent.com/',
      'user-images.githubusercontent.com/',
      'private-user-images.githubusercontent.com',
      'opengraph.githubassets.com',
      'github-production-user-asset-6210df.s3.amazonaws.com',
      'customer-stories-feed.github.com',
      'spotlights-feed.github.com',
      'objects-origin.githubusercontent.com',
      '*.githubusercontent.com'
    ],
    'manifest-src': ["'self'"],
    'media-src': [
      'github.com',
      'user-images.githubusercontent.com/',
      'secured-user-images.githubusercontent.com/',
      'private-user-images.githubusercontent.com',
      'github-production-user-asset-6210df.s3.amazonaws.com',
      'gist.github.com',
      'github.githubassets.com'
    ],
    'script-src': ['github.githubassets.com'],
    'style-src': ["'unsafe-inline'", 'github.githubassets.com'],
    'upgrade-insecure-requests': null,
    'worker-src': [
      'github.com/assets-cdn/worker/',
      'github.com/webpack/',
      'github.com/assets/',
      'gist.github.com/assets-cdn/worker/'
    ]
  });
}

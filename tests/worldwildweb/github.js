import { $parse } from "../parser.js";
import assert from "assert";

export default function github() {
  const csp = "default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ github.com/webpack/ github.com/assets/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com *.rel.tunnels.api.visualstudio.com wss://*.rel.tunnels.api.visualstudio.com objects-origin.githubusercontent.com copilot-proxy.githubusercontent.com proxy.individual.githubcopilot.com proxy.business.githubcopilot.com proxy.enterprise.githubcopilot.com *.actions.githubusercontent.com wss://*.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ productionresultssa10.blob.core.windows.net/ productionresultssa11.blob.core.windows.net/ productionresultssa12.blob.core.windows.net/ productionresultssa13.blob.core.windows.net/ productionresultssa14.blob.core.windows.net/ productionresultssa15.blob.core.windows.net/ productionresultssa16.blob.core.windows.net/ productionresultssa17.blob.core.windows.net/ productionresultssa18.blob.core.windows.net/ productionresultssa19.blob.core.windows.net/ github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com api.githubcopilot.com api.individual.githubcopilot.com api.business.githubcopilot.com api.enterprise.githubcopilot.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com copilot-workspace.githubnext.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com; img-src 'self' data: blob: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com private-avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github-production-user-asset-6210df.s3.amazonaws.com gist.github.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ github.com/webpack/ github.com/assets/ gist.github.com/assets-cdn/worker/";
  const result = $parse(csp);

  assert.deepEqual(result, {
    "default-src": [
      {
        "type": "keyword",
        "value": "none"
      }
    ],
    "base-uri": [
      {
        "type": "keyword",
        "value": "self"
      }
    ],
    "child-src": [
      {
        "type": "host",
        "value": "github.com/assets-cdn/worker/"
      },
      {
        "type": "host",
        "value": "github.com/webpack/"
      },
      {
        "type": "host",
        "value": "github.com/assets/"
      },
      {
        "type": "host",
        "value": "gist.github.com/assets-cdn/worker/"
      }
    ],
    "connect-src": [
      {
        "type": "keyword",
        "value": "self"
      },
      {
        "type": "host",
        "value": "uploads.github.com"
      },
      {
        "type": "host",
        "value": "www.githubstatus.com"
      },
      {
        "type": "host",
        "value": "collector.github.com"
      },
      {
        "type": "host",
        "value": "raw.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "api.github.com"
      },
      {
        "type": "host",
        "value": "github-cloud.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "github-production-repository-file-5c1aeb.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "github-production-upload-manifest-file-7fdce7.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "github-production-user-asset-6210df.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "*.rel.tunnels.api.visualstudio.com"
      },
      {
        "type": "host",
        "value": "wss://*.rel.tunnels.api.visualstudio.com"
      },
      {
        "type": "host",
        "value": "objects-origin.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "copilot-proxy.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "proxy.individual.githubcopilot.com"
      },
      {
        "type": "host",
        "value": "proxy.business.githubcopilot.com"
      },
      {
        "type": "host",
        "value": "proxy.enterprise.githubcopilot.com"
      },
      {
        "type": "host",
        "value": "*.actions.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "wss://*.actions.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "productionresultssa0.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa1.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa2.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa3.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa4.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa5.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa6.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa7.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa8.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa9.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa10.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa11.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa12.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa13.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa14.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa15.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa16.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa17.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa18.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "productionresultssa19.blob.core.windows.net/"
      },
      {
        "type": "host",
        "value": "github-production-repository-image-32fea6.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "github-production-release-asset-2e65be.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "insights.github.com"
      },
      {
        "type": "host",
        "value": "wss://alive.github.com"
      },
      {
        "type": "host",
        "value": "api.githubcopilot.com"
      },
      {
        "type": "host",
        "value": "api.individual.githubcopilot.com"
      },
      {
        "type": "host",
        "value": "api.business.githubcopilot.com"
      },
      {
        "type": "host",
        "value": "api.enterprise.githubcopilot.com"
      },
      {
        "type": "host",
        "value": "github.githubassets.com"
      }
    ],
    "font-src": [
      {
        "type": "host",
        "value": "github.githubassets.com"
      }
    ],
    "form-action": [
      {
        "type": "keyword",
        "value": "self"
      },
      {
        "type": "host",
        "value": "github.com"
      },
      {
        "type": "host",
        "value": "gist.github.com"
      },
      {
        "type": "host",
        "value": "copilot-workspace.githubnext.com"
      },
      {
        "type": "host",
        "value": "objects-origin.githubusercontent.com"
      }
    ],
    "frame-ancestors": [
      {
        "type": "keyword",
        "value": "none"
      }
    ],
    "frame-src": [
      {
        "type": "host",
        "value": "viewscreen.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "notebooks.githubusercontent.com"
      }
    ],
    "img-src": [
      {
        "type": "keyword",
        "value": "self"
      },
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "scheme",
        "value": "blob"
      },
      {
        "type": "host",
        "value": "github.githubassets.com"
      },
      {
        "type": "host",
        "value": "media.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "camo.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "identicons.github.com"
      },
      {
        "type": "host",
        "value": "avatars.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "private-avatars.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "github-cloud.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "objects.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "secured-user-images.githubusercontent.com/"
      },
      {
        "type": "host",
        "value": "user-images.githubusercontent.com/"
      },
      {
        "type": "host",
        "value": "private-user-images.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "opengraph.githubassets.com"
      },
      {
        "type": "host",
        "value": "github-production-user-asset-6210df.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "customer-stories-feed.github.com"
      },
      {
        "type": "host",
        "value": "spotlights-feed.github.com"
      },
      {
        "type": "host",
        "value": "objects-origin.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "*.githubusercontent.com"
      }
    ],
    "manifest-src": [
      {
        "type": "keyword",
        "value": "self"
      }
    ],
    "media-src": [
      {
        "type": "host",
        "value": "github.com"
      },
      {
        "type": "host",
        "value": "user-images.githubusercontent.com/"
      },
      {
        "type": "host",
        "value": "secured-user-images.githubusercontent.com/"
      },
      {
        "type": "host",
        "value": "private-user-images.githubusercontent.com"
      },
      {
        "type": "host",
        "value": "github-production-user-asset-6210df.s3.amazonaws.com"
      },
      {
        "type": "host",
        "value": "gist.github.com"
      },
      {
        "type": "host",
        "value": "github.githubassets.com"
      }
    ],
    "script-src": [
      {
        "type": "host",
        "value": "github.githubassets.com"
      }
    ],
    "style-src": [
      {
        "type": "keyword",
        "value": "unsafe-inline"
      },
      {
        "type": "host",
        "value": "github.githubassets.com"
      }
    ],
    "upgrade-insecure-requests": null,
    "worker-src": [
      {
        "type": "host",
        "value": "github.com/assets-cdn/worker/"
      },
      {
        "type": "host",
        "value": "github.com/webpack/"
      },
      {
        "type": "host",
        "value": "github.com/assets/"
      },
      {
        "type": "host",
        "value": "gist.github.com/assets-cdn/worker/"
      }
    ]
  });
}

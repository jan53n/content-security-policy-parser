import { $parse } from "../parser.js";
import assert from "assert";

export default function facebook() {
  const csp = "default-src data: blob: 'self' https://*.fbsbx.com 'unsafe-inline' *.facebook.com *.fbcdn.net 'unsafe-eval';script-src *.facebook.com *.fbcdn.net *.facebook.net 127.0.0.1:* 'unsafe-inline' blob: data: 'self' connect.facebook.net 'unsafe-eval' https://*.google-analytics.com *.google.com;style-src *.fbcdn.net data: *.facebook.com 'unsafe-inline' https://fonts.googleapis.com;connect-src *.facebook.com facebook.com *.fbcdn.net *.facebook.net wss://*.facebook.com:* wss://*.whatsapp.com:* wss://*.fbcdn.net attachment.fbsbx.com ws://localhost:* blob: *.cdninstagram.com 'self' http://localhost:3103 wss://gateway.facebook.com wss://edge-chat.facebook.com wss://snaptu-d.facebook.com wss://kaios-d.facebook.com/ v.whatsapp.net *.fbsbx.com *.fb.com https://*.google-analytics.com;font-src data: *.facebook.com *.fbcdn.net *.fbsbx.com https://fonts.gstatic.com;img-src *.fbcdn.net *.facebook.com data: https://*.fbsbx.com facebook.com *.cdninstagram.com fbsbx.com fbcdn.net connect.facebook.net *.carriersignal.info blob: android-webview-video-poster: *.whatsapp.net *.fb.com *.oculuscdn.com *.tenor.co *.tenor.com *.giphy.com https://paywithmybank.com/ https://*.paywithmybank.com/ https://www.googleadservices.com https://googleads.g.doubleclick.net https://*.google-analytics.com;media-src *.cdninstagram.com blob: *.fbcdn.net *.fbsbx.com www.facebook.com *.facebook.com data: *.tenor.co *.tenor.com https://*.giphy.com;frame-src *.facebook.com *.fbsbx.com fbsbx.com data: www.instagram.com *.fbcdn.net https://paywithmybank.com/ https://*.paywithmybank.com/ https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://td.doubleclick.net *.google.com *.doubleclick.net;worker-src blob: *.facebook.com data:;block-all-mixed-content;upgrade-insecure-requests;";
  const result = $parse(csp);

  assert.deepEqual(result, {
    "default-src": [
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "scheme",
        "value": "blob"
      },
      {
        "type": "keyword",
        "value": "self"
      },
      {
        "type": "host",
        "value": "https://*.fbsbx.com"
      },
      {
        "type": "keyword",
        "value": "unsafe-inline"
      },
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "keyword",
        "value": "unsafe-eval"
      }
    ],
    "script-src": [
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "host",
        "value": "*.facebook.net"
      },
      {
        "type": "host",
        "value": "127.0.0.1:*"
      },
      {
        "type": "keyword",
        "value": "unsafe-inline"
      },
      {
        "type": "scheme",
        "value": "blob"
      },
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "keyword",
        "value": "self"
      },
      {
        "type": "host",
        "value": "connect.facebook.net"
      },
      {
        "type": "keyword",
        "value": "unsafe-eval"
      },
      {
        "type": "host",
        "value": "https://*.google-analytics.com"
      },
      {
        "type": "host",
        "value": "*.google.com"
      }
    ],
    "style-src": [
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "keyword",
        "value": "unsafe-inline"
      },
      {
        "type": "host",
        "value": "https://fonts.googleapis.com"
      }
    ],
    "connect-src": [
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "host",
        "value": "facebook.com"
      },
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "host",
        "value": "*.facebook.net"
      },
      {
        "type": "host",
        "value": "wss://*.facebook.com:*"
      },
      {
        "type": "host",
        "value": "wss://*.whatsapp.com:*"
      },
      {
        "type": "host",
        "value": "wss://*.fbcdn.net"
      },
      {
        "type": "host",
        "value": "attachment.fbsbx.com"
      },
      {
        "type": "host",
        "value": "ws://localhost:*"
      },
      {
        "type": "scheme",
        "value": "blob"
      },
      {
        "type": "host",
        "value": "*.cdninstagram.com"
      },
      {
        "type": "keyword",
        "value": "self"
      },
      {
        "type": "host",
        "value": "http://localhost:3103"
      },
      {
        "type": "host",
        "value": "wss://gateway.facebook.com"
      },
      {
        "type": "host",
        "value": "wss://edge-chat.facebook.com"
      },
      {
        "type": "host",
        "value": "wss://snaptu-d.facebook.com"
      },
      {
        "type": "host",
        "value": "wss://kaios-d.facebook.com/"
      },
      {
        "type": "host",
        "value": "v.whatsapp.net"
      },
      {
        "type": "host",
        "value": "*.fbsbx.com"
      },
      {
        "type": "host",
        "value": "*.fb.com"
      },
      {
        "type": "host",
        "value": "https://*.google-analytics.com"
      }
    ],
    "font-src": [
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "host",
        "value": "*.fbsbx.com"
      },
      {
        "type": "host",
        "value": "https://fonts.gstatic.com"
      }
    ],
    "img-src": [
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "host",
        "value": "https://*.fbsbx.com"
      },
      {
        "type": "host",
        "value": "facebook.com"
      },
      {
        "type": "host",
        "value": "*.cdninstagram.com"
      },
      {
        "type": "host",
        "value": "fbsbx.com"
      },
      {
        "type": "host",
        "value": "fbcdn.net"
      },
      {
        "type": "host",
        "value": "connect.facebook.net"
      },
      {
        "type": "host",
        "value": "*.carriersignal.info"
      },
      {
        "type": "scheme",
        "value": "blob"
      },
      {
        "type": "scheme",
        "value": "android-webview-video-poster"
      },
      {
        "type": "host",
        "value": "*.whatsapp.net"
      },
      {
        "type": "host",
        "value": "*.fb.com"
      },
      {
        "type": "host",
        "value": "*.oculuscdn.com"
      },
      {
        "type": "host",
        "value": "*.tenor.co"
      },
      {
        "type": "host",
        "value": "*.tenor.com"
      },
      {
        "type": "host",
        "value": "*.giphy.com"
      },
      {
        "type": "host",
        "value": "https://paywithmybank.com/"
      },
      {
        "type": "host",
        "value": "https://*.paywithmybank.com/"
      },
      {
        "type": "host",
        "value": "https://www.googleadservices.com"
      },
      {
        "type": "host",
        "value": "https://googleads.g.doubleclick.net"
      },
      {
        "type": "host",
        "value": "https://*.google-analytics.com"
      }
    ],
    "media-src": [
      {
        "type": "host",
        "value": "*.cdninstagram.com"
      },
      {
        "type": "scheme",
        "value": "blob"
      },
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "host",
        "value": "*.fbsbx.com"
      },
      {
        "type": "host",
        "value": "www.facebook.com"
      },
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "host",
        "value": "*.tenor.co"
      },
      {
        "type": "host",
        "value": "*.tenor.com"
      },
      {
        "type": "host",
        "value": "https://*.giphy.com"
      }
    ],
    "frame-src": [
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "host",
        "value": "*.fbsbx.com"
      },
      {
        "type": "host",
        "value": "fbsbx.com"
      },
      {
        "type": "scheme",
        "value": "data"
      },
      {
        "type": "host",
        "value": "www.instagram.com"
      },
      {
        "type": "host",
        "value": "*.fbcdn.net"
      },
      {
        "type": "host",
        "value": "https://paywithmybank.com/"
      },
      {
        "type": "host",
        "value": "https://*.paywithmybank.com/"
      },
      {
        "type": "host",
        "value": "https://www.googleadservices.com"
      },
      {
        "type": "host",
        "value": "https://googleads.g.doubleclick.net"
      },
      {
        "type": "host",
        "value": "https://www.google.com"
      },
      {
        "type": "host",
        "value": "https://td.doubleclick.net"
      },
      {
        "type": "host",
        "value": "*.google.com"
      },
      {
        "type": "host",
        "value": "*.doubleclick.net"
      }
    ],
    "worker-src": [
      {
        "type": "scheme",
        "value": "blob"
      },
      {
        "type": "host",
        "value": "*.facebook.com"
      },
      {
        "type": "scheme",
        "value": "data"
      }
    ],
    "block-all-mixed-content": null,
    "upgrade-insecure-requests": null
  });
}
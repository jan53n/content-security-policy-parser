import { $parse } from "../parser.js";
import assert from "assert";

export default function facebook() {
  const csp = "default-src data: blob: 'self' https://*.fbsbx.com 'unsafe-inline' *.facebook.com *.fbcdn.net 'unsafe-eval';script-src *.facebook.com *.fbcdn.net *.facebook.net 127.0.0.1:* 'unsafe-inline' blob: data: 'self' connect.facebook.net 'unsafe-eval' https://*.google-analytics.com *.google.com;style-src *.fbcdn.net data: *.facebook.com 'unsafe-inline' https://fonts.googleapis.com;connect-src *.facebook.com facebook.com *.fbcdn.net *.facebook.net wss://*.facebook.com:* wss://*.whatsapp.com:* wss://*.fbcdn.net attachment.fbsbx.com ws://localhost:* blob: *.cdninstagram.com 'self' http://localhost:3103 wss://gateway.facebook.com wss://edge-chat.facebook.com wss://snaptu-d.facebook.com wss://kaios-d.facebook.com/ v.whatsapp.net *.fbsbx.com *.fb.com https://*.google-analytics.com;font-src data: *.facebook.com *.fbcdn.net *.fbsbx.com https://fonts.gstatic.com;img-src *.fbcdn.net *.facebook.com data: https://*.fbsbx.com facebook.com *.cdninstagram.com fbsbx.com fbcdn.net connect.facebook.net *.carriersignal.info blob: android-webview-video-poster: *.whatsapp.net *.fb.com *.oculuscdn.com *.tenor.co *.tenor.com *.giphy.com https://paywithmybank.com/ https://*.paywithmybank.com/ https://www.googleadservices.com https://googleads.g.doubleclick.net https://*.google-analytics.com;media-src *.cdninstagram.com blob: *.fbcdn.net *.fbsbx.com www.facebook.com *.facebook.com data: *.tenor.co *.tenor.com https://*.giphy.com;frame-src *.facebook.com *.fbsbx.com fbsbx.com data: www.instagram.com *.fbcdn.net https://paywithmybank.com/ https://*.paywithmybank.com/ https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://td.doubleclick.net *.google.com *.doubleclick.net;worker-src blob: *.facebook.com data:;block-all-mixed-content;upgrade-insecure-requests;";
  const result = $parse(csp);
  assert.deepEqual(result, {
    'default-src': [
      'data:',
      'blob:',
      "'self'",
      'https://*.fbsbx.com',
      "'unsafe-inline'",
      '*.facebook.com',
      '*.fbcdn.net',
      "'unsafe-eval'"
    ],
    'script-src': [
      '*.facebook.com',
      '*.fbcdn.net',
      '*.facebook.net',
      '127.0.0.1:*',
      "'unsafe-inline'",
      'blob:',
      'data:',
      "'self'",
      'connect.facebook.net',
      "'unsafe-eval'",
      'https://*.google-analytics.com',
      '*.google.com'
    ],
    'style-src': [
      '*.fbcdn.net',
      'data:',
      '*.facebook.com',
      "'unsafe-inline'",
      'https://fonts.googleapis.com'
    ],
    'connect-src': [
      '*.facebook.com',
      'facebook.com',
      '*.fbcdn.net',
      '*.facebook.net',
      'wss://*.facebook.com:*',
      'wss://*.whatsapp.com:*',
      'wss://*.fbcdn.net',
      'attachment.fbsbx.com',
      'ws://localhost:*',
      'blob:',
      '*.cdninstagram.com',
      "'self'",
      'http://localhost:3103',
      'wss://gateway.facebook.com',
      'wss://edge-chat.facebook.com',
      'wss://snaptu-d.facebook.com',
      'wss://kaios-d.facebook.com/',
      'v.whatsapp.net',
      '*.fbsbx.com',
      '*.fb.com',
      'https://*.google-analytics.com'
    ],
    'font-src': [
      'data:',
      '*.facebook.com',
      '*.fbcdn.net',
      '*.fbsbx.com',
      'https://fonts.gstatic.com'
    ],
    'img-src': [
      '*.fbcdn.net',
      '*.facebook.com',
      'data:',
      'https://*.fbsbx.com',
      'facebook.com',
      '*.cdninstagram.com',
      'fbsbx.com',
      'fbcdn.net',
      'connect.facebook.net',
      '*.carriersignal.info',
      'blob:',
      'android-webview-video-poster:',
      '*.whatsapp.net',
      '*.fb.com',
      '*.oculuscdn.com',
      '*.tenor.co',
      '*.tenor.com',
      '*.giphy.com',
      'https://paywithmybank.com/',
      'https://*.paywithmybank.com/',
      'https://www.googleadservices.com',
      'https://googleads.g.doubleclick.net',
      'https://*.google-analytics.com'
    ],
    'media-src': [
      '*.cdninstagram.com',
      'blob:',
      '*.fbcdn.net',
      '*.fbsbx.com',
      'www.facebook.com',
      '*.facebook.com',
      'data:',
      '*.tenor.co',
      '*.tenor.com',
      'https://*.giphy.com'
    ],
    'frame-src': [
      '*.facebook.com',
      '*.fbsbx.com',
      'fbsbx.com',
      'data:',
      'www.instagram.com',
      '*.fbcdn.net',
      'https://paywithmybank.com/',
      'https://*.paywithmybank.com/',
      'https://www.googleadservices.com',
      'https://googleads.g.doubleclick.net',
      'https://www.google.com',
      'https://td.doubleclick.net',
      '*.google.com',
      '*.doubleclick.net'
    ],
    'worker-src': ['blob:', '*.facebook.com', 'data:'],
    'block-all-mixed-content': null,
    'upgrade-insecure-requests': null
  });
}
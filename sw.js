if(!self.define){let s,e={};const t=(t,n)=>(t=new URL(t+".js",n).href,e[t]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=t,s.onload=e,document.head.appendChild(s)}else s=t,importScripts(t),e()})).then((()=>{let s=e[t];if(!s)throw new Error(`Module ${t} didn’t register its module`);return s})));self.define=(n,c)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let a={};const o=s=>t(s,i),u={module:{uri:i},exports:a,require:o};e[i]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(c(...s),a)))}}define(["./workbox-6fb8223f"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/WERSZtgGyY6hkUVVzvFut/_buildManifest.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/WERSZtgGyY6hkUVVzvFut/_middlewareManifest.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/WERSZtgGyY6hkUVVzvFut/_ssgManifest.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/1057-d1f1c9f4b6c52f34.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/1206-6de5238c65860ee0.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/1220-234bd7e6165a1be0.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/2389-311884fb216c5328.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/2646-465be49fca550990.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/2737-06d9a5e7495b6fa3.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/3859-05bb027d042e4917.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/4076-c01c2e50f0275b80.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/4389-185df7de55decba3.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/4736-b3d73d31b428bae0.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/4753-6689feadc8aa9961.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/5171.df3dddfdebbcb662.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/5447-e3335392f991bacf.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/5651-f11088e6691e2eb1.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/5889-d48b1ba8e5afa2c3.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/6429-03c264fdc7458119.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/7730-a24a46a273d1ad35.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/8242-612f5f2cadd9b672.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/850-24eb41a030b30604.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/8529-035b130bee6da33c.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/9238-19fa6ef488edbbcf.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/framework-9fb5a1929308ee93.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/main-883b4cac7401f72d.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/404-21576b4e371e6650.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/_app-218b847d20a249a3.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/_error-25839e52160ad85d.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs-9b4f8a9a56ed049e.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/colors-5ba6967f644179ab.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Badge-17b6943c983b13db.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Breadcrumb-c661c54619090922.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Button-3fd3cef27e7ced78.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Card-2f8aee6791605770.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/CheckGroup-a394be998969891a.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Checkbox-17195f76e435e3f4.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Chips-83e1f89bc5c245f7.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Code-a337bb9500187e84.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Column-b12c4ecf9c473fd8.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Container-85e4816cec7f5dda.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/CssBaseline-ead9725041dc55d8.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Dialog-c8b9ebaeb3712987.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Divider-95a3adbf96ab1d25.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Flex-42a874dd1d9ca79a.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/FormControl-ddfec5d05d6fdfff.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Icon-074196bb07437a8c.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Image-f83f888a453ce250.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/InputAdornment-ac0a2668c680c225.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/InputSlider-299e9c41d1a7c210.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/InputStepper-67bea620e637816d.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Menu-1b176e199fae60ec.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Radio-e8e6becb1a0bf253.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/RadioGroup-1a9e8b568f43b93a.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Row-5732465ac328859d.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Select-b19ef18f56cd91b3.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Snackbar-f7c040f5f04fd9b4.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Spinners-7d092aadedad7175.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Switch-0734a4624841c8a1.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/TabBar-79026680da9d207b.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Table-8bc027d66d5862b5.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Tag-521f704c1137140f.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Text-ea390af31947a6b3.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/TextArea-603a72306200f979.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/TextField-2acf5494f728ba0f.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/components/Tooltip-d1f1d4d4d31c6ddc.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/installation-37140ced0f42cd70.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/packages/icons-b0631eabfa77d3dc.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/server-side-rendering-79057fb4bc23d2c1.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/styling-977eb7d270b8a002.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/docs/theming-3e14ba60fd0c89d4.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/pages/index-0f07a3e0d43fa3ca.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/_next/static/chunks/webpack-b87c1541d8520351.js",revision:"WERSZtgGyY6hkUVVzvFut"},{url:"/android-chrome-192x192.png",revision:"719a15487c06e634997d88c77a857571"},{url:"/android-chrome-512x512.png",revision:"9a0a5de1cea847396452bb4abe928b38"},{url:"/android-chrome-maskable-256x256.jpg",revision:"c17e62c013f67d8983bc6aec53e62a4d"},{url:"/apple-touch-icon.png",revision:"50364e2cff000f565fb4a518df046616"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"e959a15a8541839149e83e02d2478e75"},{url:"/favicon-32x32.png",revision:"ebe15604738fbd26fe9ddb39296fc039"},{url:"/favicon.ico",revision:"2af328c7c6daf8572cec7b8f8d84f63e"},{url:"/manifest.json",revision:"f8117409c2a979907f67c9e6241f6a0b"},{url:"/meta-image-compressed.png",revision:"567edc68c4735f8fce56411c5f9db4d2"},{url:"/mstile-144x144.png",revision:"6b94ddff154918ef390ab65c36df3fbe"},{url:"/mstile-150x150.png",revision:"15bc84178c38783f5f8ec80ec85c385b"},{url:"/mstile-310x150.png",revision:"f3f6d21986f74783c516ea83c30d2007"},{url:"/mstile-310x310.png",revision:"628a609a77c69ac0000cbc5660068486"},{url:"/mstile-70x70.png",revision:"c7057e31d48d3418705a31ce9accd037"},{url:"/robots.txt",revision:"3ad0652bd17ff826a31fa29366021cfd"},{url:"/safari-pinned-tab.svg",revision:"f746d72124037ce82fbe613ecf0dd28c"},{url:"/static/media/landing-illustration-640.png",revision:"76c960d0b4799716895750347c7842db"},{url:"/static/media/landing-illustration.png",revision:"62b55a44faf9af73a5a2a4fc38445ab8"},{url:"/static/sonnat-icons.zip",revision:"0c90bd9084a99145c8a15464d69160be"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
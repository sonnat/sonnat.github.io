(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2314],{3586:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/server-side-rendering",function(){return n(4078)}])},4078:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return u},default:function(){return m}});n(7294);var r=n(3905),o=n(5048),i=n(3814),s=n(9522),a=n(9008),l=n(9118),h=n(5175);function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u={title:"Server-side Rendering",description:"The most common use case for server-side rendering is to handle the initial render when a user (or search engine crawler) first requests your app.",getLayout:function(){return function(e){return(0,r.kt)(s.Z,{mdxType:"WithSidebar"},e)}}},p={meta:u};function m(e){var t=e.components,n=c(e,["components"]);return(0,r.kt)("wrapper",Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.default,{mdxType:"Head"},(0,h.aT)("".concat(u.title," | Sonnat Developer Tools, React Components & Resources")),(0,h.u2)(u.description),(0,h.ai)("".concat(l.z,"/docs/server-side-rendering")),(0,h.hL)(d(l.t).concat(["server-side rendering","server side rendering","ssr"]))),(0,r.kt)("h1",null,(0,r.kt)("span",null,u.title),(0,r.kt)(i.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,r.kt)(o.Z,{href:"pages/docs/serverside-rendering.mdx",mdxType:"PageEditButton"})),(0,r.kt)("p",null,u.description),(0,r.kt)("p",null,"When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties."),(0,r.kt)("p",null,"We are using"," ",(0,r.kt)("a",{href:"https://cssinjs.org/react-jss",rel:"noopener noreferrer",target:"_blank"},"ReactJSS (css-in-js styling solution)")," ","to styling our components. And since Material-UI v4 was using the same styling solution with such a User-friendly API that led to great DX (Developer Experience), we have decided to use an API which is similar to Material-UI's."),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Sonnat-UI on the Server"),(0,r.kt)(i.Z,{anchorId:"sonnat-ui-on-the-server",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"It's important to provide the page with the required CSS, otherwise the page will render with just the HTML then wait for the CSS to be injected by the client, causing it to flicker (FOUC). To inject the style down to the client, we need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Create a fresh, new ",(0,r.kt)("inlineCode",null,"ServerStyleSheets")," instance on every request."),(0,r.kt)("li",null,"Render the React tree with the server-side collector."),(0,r.kt)("li",null,"Pull the CSS out."),(0,r.kt)("li",null,"Pass the CSS along to the client.")),(0,r.kt)("p",null,"On the client side, the CSS will be injected a second time before removing the server-side injected CSS."),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Setting Up"),(0,r.kt)(i.Z,{anchorId:"setting-up",mdxType:"AnchorButton"})),(0,r.kt)("h3",null,(0,r.kt)("span",null,"Theme Object"),(0,r.kt)(i.Z,{anchorId:"theme-object",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"Create a theme object that will be shared between the client and the server. If you don't provide a theme object the theming will be defaults to"," ",(0,r.kt)("a",{href:"/docs/theming#default-theme"},"Default Theme"),".",(0,r.kt)("br",null),"(For more detailed information about theming, take a look at"," ",(0,r.kt)("a",{href:"/docs/theming"},"this doc"),".)"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// file: theme.js\n\nimport createTheme from "@sonnat/ui/styles/createTheme";\n\n// Create a theme instance.\nconst theme = createTheme({\n  // Your theme options\n});\n\nexport default theme;\n')),(0,r.kt)("h3",null,(0,r.kt)("span",null,"Server-side"),(0,r.kt)(i.Z,{anchorId:"serverside",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"The first thing that we need to do on every request is create a new"," ",(0,r.kt)("inlineCode",null,"ServerStyleSheets"),". When rendering, we will wrap App, the root component, inside a"," ",(0,r.kt)("inlineCode",null,"<SonnatInitializer>")," to make the style configuration and the theme available to all components in the component tree."),(0,r.kt)("p",null,"The key step in server-side rendering is to render the initial HTML of the component before we send it to the client side. To do this, we use"," ",(0,r.kt)("inlineCode",null,"ReactDOMServer.renderToString()"),". We then get the CSS from the sheets using ",(0,r.kt)("inlineCode",null,"sheets.toString()"),".",(0,r.kt)("br",null),"The final step on the server-side is to inject the initial component HTML and CSS into a template to be rendered on the client side."),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// file: server.js\n\nimport express from "express";\nimport React from "react";\nimport ReactDOMServer from "react-dom/server";\nimport ServerStyleSheets from "@sonnat/ui/styles/ServerStyleSheets";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\nimport CssBaseline from "@sonnat/ui/CssBaseline";\nimport App from "./App";\nimport theme from "./theme";\n\nfunction renderFullPage(html, css) {\n  return `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>My page</title>\n        <style id="sonnat-jss-ssr">${css}</style>\n      </head>\n      <body>\n        <div id="root">${html}</div>\n      </body>\n    </html>\n  `;\n}\n\nfunction handleRender(req, res) {\n  const sheets = new ServerStyleSheets();\n\n  // Render the component to a string.\n  const html = ReactDOMServer.renderToString(\n    sheets.collect(\n      <SonnatInitializer theme={theme}>\n        <CssBaseline />\n        <App />\n      </SonnatInitializer>\n    )\n  );\n\n  // Grab the CSS from the sheets.\n  const css = sheets.toString();\n\n  // Send the rendered page back to the client.\n  res.send(renderFullPage(html, css));\n}\n\nconst app = express();\n\napp.use("/build", express.static("build"));\n\n// This is fired every time the server-side receives a request.\napp.use(handleRender);\n\nconst port = 3000;\napp.listen(port);\n')),(0,r.kt)("div",{"data-notebox":!0,style:{marginBottom:"1rem"}},"Check out the documentations of"," ",(0,r.kt)("a",{href:"/docs/styling#sonnat-initializer",title:"SonnatInitializer documentation"},(0,r.kt)("strong",null,"<SonnatInitializer>"))," ","and"," ",(0,r.kt)("a",{href:"/docs/components/CssBaseline",title:"CssBaseline documentation"},(0,r.kt)("strong",null,"<CssBaseline>")),", to learn more about them."),(0,r.kt)("h3",null,(0,r.kt)("span",null,"Client-side"),(0,r.kt)(i.Z,{anchorId:"clientside",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"The client side is straightforward. All we need to do is remove the server-side generated CSS."),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// file: client.js\n\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\nimport CssBaseline from "@sonnat/ui/CssBaseline";\nimport App from "./App";\nimport theme from "./theme";\n\nfunction Main() {\n  React.useEffect(() => {\n    const jssStyles = document.querySelector("#sonnat-jss-ssr");\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n\n  return (\n    <SonnatInitializer theme={theme}>\n      <CssBaseline />\n      <App />\n    </SonnatInitializer>\n  );\n}\n\nReactDOM.hydrate(<Main />, document.querySelector("#root"));\n')),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Next.js"),(0,r.kt)(i.Z,{anchorId:"nextjs",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"We host nextjs implementation which you can find in the"," ",(0,r.kt)("a",{href:"https://github.com/sonnat/sonnat-ui",rel:"noopener noreferrer",target:"_blank"},"GitHub repository")," ","under the"," ",(0,r.kt)("a",{href:"https://github.com/sonnat/sonnat-ui/tree/master/examples/with-nextjs",rel:"noopener noreferrer",target:"_blank"},"/examples")," ","folder."))}m.isMDXComponent=!0}},function(e){e.O(0,[8242,2389,9774,2888,179],(function(){return t=3586,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
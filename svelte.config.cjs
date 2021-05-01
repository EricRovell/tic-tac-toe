const sveltePreprocess = require('svelte-preprocess');
//const node = require('@sveltejs/adapter-node');
const adapterStatic = require("@sveltejs/adapter-static");
const pkg = require('./package.json');
const { resolve } = require("path");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapterStatic(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: 'body',
    path: {
      base: "/tic-tac-toe"
    },
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
      resolve: {
        alias: {
          "$components": resolve(__dirname, "./src/lib/components"),
          "$stores": resolve(__dirname, "./src/lib/stores"),
          "$utils": resolve(__dirname, "./src/lib/utils"),
          "$views": resolve(__dirname, "./src/lib/views"),
          "$types": resolve(__dirname, "./src/types")
        }
      }
		}
	}
};

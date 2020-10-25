const fs = require('fs');
// const svelte = require('svelte/compiler')
require('svelte/register');

// const app = fs.readFileSync('./src/App.svelte', {encoding:'utf8', flag:'r'})

// const ssrResult = svelte.compile(app, {generate: 'ssr', format: 'cjs', hydratable: true})
// const domResult = svelte.compile(app, {generate: 'dom', format: 'esm', hydratable: true})

// fs.writeFileSync('./src/ssr.js', ssrResult.js.code)
// fs.writeFileSync('dom.js', domResult.js.code)

const App = require('./src/App.svelte').default;
const result = App.render();

// write to HTML file with result.head, result.css.code, and result.html

fs.writeFileSync('./public/index.html', 

`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>Svelte app</title>

	<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel='stylesheet' href='/global.css'>
    ${result.head}
    <style>${result.css.code}</style>
    <script defer src='/build/bundle.js'></script>
</head>

<body>
${result.html}
</body>
<script>document.body.innerHTML = ''</script>
</html>
`
)
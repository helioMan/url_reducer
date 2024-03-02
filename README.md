<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-4 text-gray-800">URL Shortener Project</h1>
        <p class="mb-6 text-gray-600">A simple URL shortener project built with Node.js, Express, and MongoDB.</p>
        <h2 class="text-2xl font-bold mb-2 text-gray-800">How to Run</h2>
        <ol class="list-decimal list-inside mb-6">
            <li class="mb-2">Clone the repo:</li>
            <pre><code class="mb-2">git clone https://github.com/helioMan/url_reducer.git</code></pre>
            <li class="mb-2">Move to project directory:</li>
            <pre><code class="mb-2">cd url_reducer</code></pre>
            <li class="mb-2">Install dependencies:</li>
            <pre><code class="mb-2">npm install</code></pre>
            <li class="mb-2">Start development server:</li>
            <pre><code class="mb-2">npm run devStart</code></pre>
            <li>Open <a href="http://localhost:5000" class="text-blue-600">http://localhost:5000</a> in your browser.</li>
        </ol>
        <h2 class="text-2xl font-bold mb-2 text-gray-800">Project Structure</h2>
        <p class="mb-6 text-gray-600">The project consists of:</p>
        <ul class="list-disc list-inside mb-6">
            <li><strong>index.ejs:</strong> HTML template for URL shortener interface.</li>
            <li><strong>urlsmall.js:</strong> Mongoose model for URL shortener data.</li>
            <li><strong>server.js:</strong> Main server file with route handlers and setup.</li>
        </ul>
        <h2 class="text-2xl font-bold mb-2 text-gray-800">Dependencies</h2>
        <ul class="list-disc list-inside mb-6">
            <li><strong>Express:</strong> Fast, minimalist web framework for Node.js.</li>
            <li><strong>Mongoose:</strong> MongoDB object modeling tool for async environments.</li>
            <li><strong>EJS:</strong> Embedded JavaScript templates for dynamic HTML.</li>
        </ul>
    </div>
</body>
</html>

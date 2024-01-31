<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Shortener Project</title>
</head>
<body>
    <h1>URL Shortener Project</h1>
    <p>This is a simple URL shortener project built using Node.js, Express, and MongoDB.</p>
    <h2>How to Run the Project</h2>
    <ol>
        <li>Clone the repository to your local machine:</li>
        <pre><code>git clone https://github.com/helioMan/url_reducer.git</code></pre>
        <li>Move into the project directory:</li>
        <pre><code>cd url_reducer</code></pre>
        <li>Install the required dependencies:</li>
        <pre><code>npm install</code></pre>
        <li>Start the development server:</li>
        <pre><code>npm run devStart</code></pre>
        <li>Open your web browser and go to <code>http://localhost:5000</code> to access the URL shortener application.</li>
    </ol>
    <h2>Project Structure</h2>
    <p>The project consists of the following files:</p>
    <ul>
        <li><strong>index.ejs:</strong> HTML template for the URL shortener interface.</li>
        <li><strong>urlsmall.js:</strong> Mongoose model for URL shortener data.</li>
        <li><strong>server.js:</strong> Main server file containing route handlers and server setup.</li>
    </ul>
    <h2>Dependencies</h2>
    <ul>
        <li><strong>Express:</strong> Fast, unopinionated, minimalist web framework for Node.js.</li>
        <li><strong>Mongoose:</strong> MongoDB object modeling tool designed to work in an asynchronous environment.</li>
        <li><strong>EJS:</strong> Embedded JavaScript templates for generating dynamic HTML content.</li>
    </ul>
</body>
</html>

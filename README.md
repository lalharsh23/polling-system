<h1 align="center">Polling System 🗳️</h1>
<p align="center">
    A simple polling system API built with <a href="https://nodejs.org/">Node.js</a>, <a href="https://expressjs.com/">Express.js</a>, and <a href="https://www.mongodb.com/">MongoDB</a>.<br>
    Users can create questions with multiple options, vote on them, and view the poll results.
</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#built-with">Built with</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#setup-and-running-instructions">Setup and Running Instructions</a></li>
    <li><a href="#postman-collection-import-guide">Postman Collection Import Guide</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#deployed-link">Deployed Link</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
    <li>Create a question with multiple options.</li>
    <li>Add votes to an option.</li>
    <li>View a question along with its options and vote counts.</li>
    <li>Delete a question (optional: restricted if any option has votes).</li>
    <li>Delete an option (optional: restricted if it has votes).</li>
</ul>

<h2 id="built-with">Built with</h2>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://mongoosejs.com/">Mongoose</a></li>
    <li><a href="https://www.postman.com/">Postman</a> (for API testing)</li>
</ul>

<h2 id="folder-structure">Folder Structure</h2>
<pre>
polling-system/
│
├── controllers/         # Handles API logic
│   └── questionController.js
│   └── optionController.js
│
├── models/              # MongoDB schema definitions
│   └── Question.js
│   └── Option.js
│
├── routes/              # Routes for handling HTTP requests
│   └── questionRoutes.js
│   └── optionRoutes.js
│
├── config/              # Database configuration
│   └── db.js
│
├── app.js               # Main app entry point
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
</pre>

<h2 id="setup-and-running-instructions">Setup and Running Instructions</h2>

<h3>Backend Setup</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/lalharsh23/polling-system.git;
cd polling-system
        </code></pre>
    </li>
    <li>Install backend dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Set up MongoDB:
        <p>Ensure MongoDB is running on your machine or update the connection string in <code>config/db.js</code> with your MongoDB URL.</p>
    </li>
    <li>Start the server:
        <pre><code>npm start</code></pre>
    </li>
    <li>Test API endpoints:
        <p>You can now access the APIs at <a href="http://localhost:8000">http://localhost:8000</a>.</p>
    </li>
</ol>

<h2 id="postman-collection-import-guide">Postman Collection Import Guide</h2>
<p>The Postman collection for the API is included as <code>PollingSystemAPICollection.json</code>. Follow the steps below to import it into Postman and start testing the APIs:</p>
<ol>
    <li>Open Postman.</li>
    <li>Click the "Import" button.</li>
    <li>Select "Choose Files" and navigate to the <code>PollingSystemAPICollection.json</code> file in the project directory.</li>
    <li>Once imported, the collection will be visible in Postman.</li>
    <li>Use the collection to test the various APIs (question creation, option addition, voting, etc.).</li>
</ol>

<h2 id="author">Author</h2>
<p>Created by <strong>Harsh Lal</strong>.</p>

<h2 id="deployed-link">Deployed Link</h2>
<p><a href="https://polling-system-h996.onrender.com">Click here</a></p>

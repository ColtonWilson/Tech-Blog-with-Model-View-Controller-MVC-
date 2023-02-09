# Tech-Blog-with-Model-View-Controller-MVC
![License Badge](https://shields.io/badge/license-MIT-yellow)
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
Creating a tech blog by using a CMS-style, a SQL server, handlebars, express, and sequelize to be able to add posts and comment on posts as long as the user is logged in.
<br>
Working code: [Link to website](https://tech-blog-with-mvc.herokuapp.com/)
<br>
Screenshot:
<br>
![screenshot of working products](https://github.com/ColtonWilson/Tech-Blog-with-Model-View-Controller-MVC-/blob/main/public/images/working.png)

Example login to use:
<br>
Username: test2
<br>
Email: test2@test.com
<br>
Password:123456
<br>


## Installation

###Server setup steps when seeding database with a JavaScript file:

1. Set login information in .env file
<pre>
DB_NAME='your_mysql_database_name'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password' 
</pre>

2. Login into mysql
<pre>
mysql -u root -p
</pre>

3. Source the schema
<pre>
source db/schema.sql;
</pre>

4. Exit out of mysql terminal
<pre>
quit
</pre>

5. Install node packages
<pre>
npm i
</pre>

6. Install Prettier
<pre>
npm install
npm install prettier eslint-config-prettier --save-dev
</pre>

a. To use prettier

<pre>
npx prettier --write example.js
</pre>

b. For additional prettier rules create a `.prettierrc.json` to root directory
<br> See file for example rule

c. For prettier ignore additional file with a `.prettierignore` in root directory
<br> See file for example rule

d. Inform ESLint that we are using Prettier
<br>Open the `.eslintrc.json` file and add the following property to the config object:

```json
"extends": ["prettier"]
```

## Hints

- Double-check that Prettier formatted your code the way you intended. Sometimes Prettier makes incorrect assumptions, particularly with HTML documents.

- More information on how to set up Prettier can be found in the [Prettier install guide](https://prettier.io/docs/en/install.html).

- The [Prettier documentation on options](https://prettier.io/docs/en/options.html) explains other configurations that you can add to the `.prettierrc.json` file.

7. Install Lint
<pre>
npm install eslint
</pre>

8. Install Handlebars
<pre>
npm install express-handlebars
</pre>

9. Install Mysql
<pre>
npm install --save mysql2
</pre>

10. Install Sequelize
<pre>
npm install --save sequelize
</pre>

11. Install dotenv
<pre>
npm install dotenv --save
</pre>

12. Install bcrypt
<pre>
npm install bcrypt
</pre>

13. Install Express-session
<pre>
npm install express-session
</pre>

14. Install Connect Session Store using Sequelize
<pre>
npm install connect-session-sequelize
</pre>

15. Seed the database
<pre>
node ./seeds/index.js
</pre>

16. Start Server
<pre>
npm start
</pre>

## Usage
running code
## Contributing
Submit bug and feature requests.
<br>
Missing features like add comments and add post. Currently only pulls up posts that are in the database and the comments each post currently has. 
## Tests
No Tests Provided
## License
Please see https://mit-license.org/ to get detailed information for this license

## Questions
You can find me [HERE](https://github.com/ColtonWilson) on Github
You can email me at colton_wilson93@yahoo.com if you have any additional questions.

# Project setup
#### Some assumptions
* familiarity with command line, git, node, npm and javascript

## Things to install

* [Install the Github CLI](https://git-scm.com/download/win)
* [Github UI Tool (optional)](https://help.github.com/desktop/guides/getting-started/installing-github-desktop/#platform-windows)
* [Nodejs](http://example.com)

#### Create a [github](https://github.com/) account if you do not have one
#### Create a github project and clone it to your machine
#### Create an .npmrc file at C:\Users\username\
#### In the .npmrc file add the proxy information
```
proxy=http://<username>:<pass>@proxyhost:<port>
https-proxy=http://<uname>:<pass>@proxyhost:<port>
```

#### Test everything is working using the following in a terminal/command prompt:
```
// check node
node -v

// check npm
npm -v

// check git if you decided to use the git command line tools
git version
```
#### Using the terminal or command prompt navigate to the project you cloned
#### Create a package.json by typing the following into the command prompt
```
// this will create the package.json file by asking a few questions
// for now just press the enter key until the questions are completed
npm init
```
#### Again in the command prompt type the following
```
// this is to install angular's test running framework -- karma

npm install -g karma 
```
#### Next create the karma.conf file by typing the following
```
karma init
// press the up arrow key and find mocha
// require.js = no
// capturing browsers = PhantomJS
// the file patterns should look like the following
'js/src/**/*.js' // hit enter
'test/**/*.spec.js' //hit enter
// exclude files = hit enter
// watch for changes = yes
```
#### Install some dependencies
```
npm install karma mocha --save-dev

npm install phantomjs-prebuilt --save-dev
```
#### Run karma
```
karma start

// should output something like the following

21 05 2016 11:13:32.048:WARN [karma]: No captured browser, open http://localhost:9876/
21 05 2016 11:13:32.054:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
21 05 2016 11:13:32.058:INFO [launcher]: Starting browser PhantomJS
21 05 2016 11:13:33.328:INFO [PhantomJS 1.9.8 (Mac OS X 0.0.0)]: Connected on socket /#jPywR_5_pZc43t1UAAAA with id 14569283
PhantomJS 1.9.8 (Mac OS X 0.0.0): Executed 0 of 0 ERROR (0.002 secs / 0 secs)
```

#### In the karma.conf.js file add this to line 30
```
preprocessors: {
  'test/**/*.spec.js': ['jshint'],
  'src/**/*.js': ['jshint']
},
```
#### jshint will be our javascript syntax and formatting validator
```
npm install jshint --save-dev
npm install jshint -g
```
#### Test jshint is working
##### create two folders src/ and test/
##### create a hello.js file in src and add the following to the file
```
function sayHello() {
    return 'Hello, World!'
}
```
#### Run jshint against the file
```
jshint src/hello.js
```
#### You should get the following error
```
$ jshint src/hello.js
src/hello.js: line 2, col 27, Missing semicolon.

1 error
```
#### Add the semicolon where it needs to be
```
function sayHello() {
    return 'Hello, World!';
}
```
#### Run jshint again
```
jshint src/hello.js
```
# You should be up and running to begin TDD in javascript

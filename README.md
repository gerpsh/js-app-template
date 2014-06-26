# PROJECT_LABEL

## Development

_Interested in contributing? Please read the CONTRIBUTING.md guide prior to sending pull requests._

### Dependencies

- Node + NPM
- Ruby + Sass

### Setup

The template uses two variables `PROJECT_NAME` and `PROJECT_LABEL` which needs to be replaced throughout the project where `PROJECT_NAME` must be a valid JavaScript variable and `PROJECT_LABEL` is the human readable verbose name. Run the following script to replace the variables in-place.

```bash
./replace.sh "myapp" "My App"
```

Install development dependencies for the Gruntfile:

```bash
npm install
```

Start working:

```bash
grunt work
```

In another shell, start the server:

```bash
grunt serve
```

Go to http://localhost:8125/demo/ in your browser

### Testing

To run the tests, simply do:

```bash
grunt test
```

### Distribution

```bash
grunt release
```

- Bumps the version to the final, e.g. `1.0.0-beta` to `1.0.0`
- Tags a release
- Freshly compiles and optimizes code
- Creates zip and tarball binaries
- Prints instructions to push and upload it to GitHub
- Bumps the patch version, e.g. `1.0.0` to `1.0.1-beta`

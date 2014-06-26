#!/bin/bash

export PROJECT_NAME="$1"
export PROJECT_LABEL="$2"

# Replace file contents (tested on Mac OS X only)
grep -l -r 'PROJECT_NAME' . | grep -v 'replace.sh\|.git' | xargs sed -i '' "s/PROJECT_NAME/$PROJECT_NAME/g"
grep -l -r 'PROJECT_LABEL' . | grep -v 'replace.sh\|.git' | xargs sed -i '' "s/PROJECT_LABEL/$PROJECT_LABEL/g"

# Rename a few files/directories
mv src/js/PROJECT_NAME src/js/$PROJECT_NAME
mv src/js/PROJECT_NAME.js src/js/$PROJECT_NAME.js
mv src/scss/PROJECT_NAME.scss src/scss/$PROJECT_NAME.scss

// command to lint and fix files and also run prettier

module.exports = {
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint --fix ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  "*.{css,scss,less,md}": (filenames) => `yarn prettier --write ${filenames.join(" ")}`,
};

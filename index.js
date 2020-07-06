"use strict";

module.exports = function ({ types: t }) {
  return {
    name: "transform-node-filepath",
    visitor: {
      Identifier(path) {
        if (path.matchesPattern("__filename")) {
          path.replaceWith(t.valueToNode(__filename));
        }
        if (path.matchesPattern("__dirname")) {
          path.replaceWith(t.valueToNode(__dirname));
        }
      },
    },
  };
};

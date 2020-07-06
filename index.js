"use strict";

module.exports = function ({ types: t }) {
  return {
    name: "transform-node-filepath",
    visitor: {
      Identifier(path) {
        if (path.isReferencedIdentifier({ name: "__filename" })) {
          path.replaceWith(t.valueToNode(__filename));
        }
        if (path.isReferencedIdentifier({ name: "__dirname" })) {
          path.replaceWith(t.valueToNode(__dirname));
        }
      },
    },
  };
};

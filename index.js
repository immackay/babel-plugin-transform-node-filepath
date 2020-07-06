"use strict";

module.exports = function ({ types: t }) {
  return {
    name: "transform-node-filepath",
    visitor: {
      Identifier(path) {
        if (path.isReferencedIdentifier({ name: "__filename" })) {
          path.replaceWith(t.valueToNode(path.hub.file.getModuleName()));
        }
        if (path.isReferencedIdentifier({ name: "__dirname" })) {
          path.replaceWith(t.valueToNode(path.hub.file.opts.filename));
        }
      },
    },
  };
};

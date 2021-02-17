const withTM = require("next-transpile-modules")(["@test/components", "@test/visualizations"]);
module.exports = withTM();
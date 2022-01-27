const utilities = () => ({
  'html[dir="rtl"] .float-start': { float: "right" },
  'html[dir="rtl"] .float-end': { float: "left" },
  'html:not([dir="rtl"]) .float-end': { float: "right" },
  'html:not([dir="rtl"]) .float-start': { float: "left" },
});

module.exports = utilities;

const utilities = () => ({
  'html:not([dir="rtl"]) .clear-start': { clear: "left" },
  'html:not([dir="rtl"]) .clear-end': { clear: "right" },
  'html[dir="rtl"] .clear-start': { clear: "right" },
  'html[dir="rtl"] .clear-end': { clear: "left" },
});

module.exports = utilities;

const utilities = () => ({
  'html[dir="rtl"] .text-start': { "text-align": "right" },
  'html[dir="rtl"] .text-end': { "text-align": "left" },
  'html:not([dir="rtl"]) .text-end': { "text-align": "right" },
  'html:not([dir="rtl"]) .text-start': { "text-align": "left" },
});

module.exports = utilities;

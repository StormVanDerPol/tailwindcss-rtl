const nameClass = require("./util/nameClass.js");

module.exports = (theme) => {
  const generators = [
    ([modifier, size]) => ({
      ['html[dir="rtl"] ' + nameClass("start", modifier)]: {
        right: size,
      },
      ['html[dir="rtl"] ' + nameClass("end", modifier)]: {
        left: size,
      },
      ['html:not([dir="rtl"]) ' + nameClass("end", modifier)]: {
        right: size,
      },
      ['html:not([dir="rtl"]) ' + nameClass("start", modifier)]: {
        left: size,
      },
    }),
  ];
  return generators.flatMap((generator) =>
    Object.entries(theme("inset")).flatMap(generator)
  );
};

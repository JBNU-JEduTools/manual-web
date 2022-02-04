const sanitizeHtml = require('sanitize-html');
const fs = require('fs');

const markdownJsonOutput = {
  tutorials: require('./outputs/tutorials.json'),
  'kata-platform': require('./outputs/kata-platform.json'),
  'kata-omnichat': require('./outputs/kata-omnichat.json'),
  'business-dashboard': require('./outputs/business-dashboard.json'),
  qios: require('./outputs/qios.json'),
  global: require('./outputs/global.json'),
};

const sanitizeString = (sentences) => {
  return sanitizeHtml(sentences, {
    allowedTags: [],
    allowedAttributes: {},
  })
    .replace(/[\n\r]/g, ' ') // \n \r
    .replace(/(?:https?|ftp):\/\/[\n\S]+/g, '') // URL
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    ) // Emoji
    .replace(/[^\w\s]/gi, '') // Special Symbol;
    .replace(/ +(?= )/g, ''); // double space
};

Object.keys(markdownJsonOutput).forEach((product) => {
  console.log(`Begin sanitizing ${product}`);
  const output = markdownJsonOutput[product];
  const newData = output.data.map(({ contents, excerpt, ...rest }) => {
    return { contents: sanitizeString(contents), excerpt: sanitizeString(excerpt), ...rest };
  });
  fs.writeFile(
    `./markdown-to-json/outputs/${product}.json`,
    JSON.stringify({ app: output.app, data: newData }),
    'utf-8',
    function (err) {
      if (err) throw err;
      console.log(`Finish sanitizing ${product}`);
    }
  );
});

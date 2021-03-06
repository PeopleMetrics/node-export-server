
const pkg = require('./package.json');
const fs = require('fs');

const version = process.env.HIGHCHARTS_VERSION;
const useNPM = process.env.HIGHCHARTS_USE_NPM || (process.env.HIGHCHARTS_CDN === 'npm');

if (useNPM) {

  pkg.dependencies.highcharts = version || '*';

  console.log(`Preinstall: adding Highcharts@${pkg.dependencies.highcharts} dependency`);

  fs.writeFileSync('./package.json', JSON.stringify(pkg, 0, '  '));
} else {
  console.log('Preinstall: no tasks to be done, skipping');
}

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const toml = require('@iarna/toml');

// Load TOML config
function loadConfig(configPath) {
  const raw = fs.readFileSync(configPath, 'utf8');
  return toml.parse(raw);
}

// Gulp task: Compile ordered MDs into README using TOML config
function generateReadme(done) {
  const config = loadConfig('./build/readme.config.toml');
  const mdDir = config.input_dir || './docs';
  const output = config.output || './README.md';
  const order = config.order || [];

  // Securely resolve and filter files
  const files = order.map(filename => path.join(mdDir, filename)).filter(f => fs.existsSync(f));

  // Optionally, insert a template header/footer
  let template = '';
  if (config.template) {
    template = fs.readFileSync(config.template, 'utf8');
  }

  // Read all md files, concatenate, and write output
  const content = files.map(f => fs.readFileSync(f, 'utf8')).join('\n\n');
  const final = template + content;
  fs.writeFileSync(output, final);
  done();
}

gulp.task('generate-readme', generateReadme);
gulp.task('default', gulp.series('generate-readme'));

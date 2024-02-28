'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Gene Surov'),
  handle: chalk.white('esurov'),
  work: chalk.white('Web Developer at nic.at GmbH'),
  twitter: chalk.cyan('https://twitter.com/esurov'),
  github: chalk.cyan('https://github.com/esurov'),
  linkedin: chalk.cyan('https://linkedin.com/in/genesurov'),
  npx: chalk.white('npx esurov'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelMastodon: chalk.white.bold('Mastodon:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               newline +  // Add another blank line
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))

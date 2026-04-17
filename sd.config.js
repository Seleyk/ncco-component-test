import StyleDictionary from 'style-dictionary'

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose'
  },
  source: [
    'tokens/ncco-primitives.json',
    'tokens/ncco-semantic.json',
    'tokens/spacing.json',
    'tokens/radius.json',
    'tokens/typography.json'
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ncco',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
})

await sd.buildAllPlatforms()
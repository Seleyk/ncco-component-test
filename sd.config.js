import StyleDictionary from 'style-dictionary'

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose'
  },
  source: [
    'tokens/primitives.json',
    'tokens/semantic.json'
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
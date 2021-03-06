const path = require('path')

module.exports = {
  input: {
    candidatesByFile: require('../../find-candidates/base').output,
    intelliByFile: require('../../intelli/extract/base').output,
    config: {
      stack: 'less',
      fileExtension: '.less'
    }
  },
  output: {
    "suggestionData": [
      {
        "propertyDefinitions": [
          {
            "lineNumber": 3,
            "property": "background",
            "value": "white",
            "suggestions": [
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": [
                  {
                    "variable": "global-background",
                    "value": "#fff",
                    "lineNumber": 12
                  }
                ]
              },
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
                "suggestions": []
              }
            ]
          },
          {
            "lineNumber": 4,
            "property": "color",
            "value": "#fff",
            "suggestions": [
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": []
              },
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
                "suggestions": []
              }
            ]
          },
          {
            "lineNumber": 8,
            "property": "color",
            "value": "#ddd",
            "suggestions": [
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/has-variables.less"),
                "suggestions": []
              },
              {
                "filePath": path.resolve("test/fixtures/pipeline/intelli/extract/no-variables.less"),
                "suggestions": []
              }
            ]
          }
        ],
        "filePath": path.resolve("/test/fixtures/typical-stylesheet.less")
      }
    ]
}
}

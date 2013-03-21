module.exports = (grunt)->
  grunt.initConfig
    jshint:
      options:
        laxbreak: false
        laxcomma: true
        expr: true
        curly: !true
        eqeqeq: !true
        unused: true
        eqnull: true
        browser: !true
      files: ['lib/*.js', '!lib/mustache.js', '!lib/showdown.js']

  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.registerTask 'default', ['jshint']

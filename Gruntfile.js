module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        curly: !true,
        eqeqeq: !true,
        eqnull: !true,
        browser: !true,
        globals: {
        }
      },
      files: ['!lib/showdown.js', 'lib/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('travis', ['jshint']);
};

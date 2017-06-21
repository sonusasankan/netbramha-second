module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/main.css': 'sass/main.scss',       // 'destination': 'source'
        }
      }
    },

    watch: {
  scripts: {
    files: ['**/*.css','**/*.scss'],
    tasks: ['sass'],
    options: {
      spawn: false,
    },
  },
},
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};

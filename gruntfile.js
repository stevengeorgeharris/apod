/*
  For more information, visit http://gruntjs.com/sample-gruntfile.
*/

module.exports = function(grunt) {

  grunt.initConfig({
      // Register sass compiler.
      sass: {
        dist: {
          options: {
            // Add your own options here. See https://github.com/gruntjs/grunt-contrib-sass.
            style: 'expanded',
            sourcemap: 'none',
          },
          // Format = destination : source (You can add multiple files, seperate with a comma).
          files: {
            'css/app.css': 'sass/app.scss',
          }
        }
      },
      // Register watch task.
      watch: {
        // Watches all files ending .scss in sass/.
        files: ['sass/**/*.scss'],
        // If any target file changes, run these tasks.
        tasks: ['sass'],
      },
  });

  // Load any plugins used.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register your tasks. You can also call each task directly i.e. grunt watch/grunt sass.
  grunt.registerTask('default', ['watch']);
};

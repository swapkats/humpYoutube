module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {                       // Target options
          style: 'compressed'
       },
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ["js/app.js","js/routes.js","js/controllers/*","js/directives/*","js/services/*"],
        dest: "js/script.js"
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'js/main.js': ['js/script.js']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/main.js']
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/main.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/main.css']
      }
    },
    watch: {
      css: {
        files: 'sass/main.scss',
        tasks: ['sass','csslint'],
      },
      js: {
        files: ["js/app.js","js/routes.js","js/controllers/*","js/directives/*","js/services/*"],
        tasks: ['concat','uglify','jshint'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);
};
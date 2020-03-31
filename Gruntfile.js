"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    less: {
    	style: {
    		files: {
    			"src/css/style.css": "src/less/style.less"
    		}
      }
    },

    postcss: {
    	style: {
    		options: {
    			processors: [
    				require("autoprefixer")()
    		]
    	},
    	src: "src/css/*.css"
    }
   },

  browserSync: {
    server: {
    	bsFiles: {
    		 src: [
    		 	"src/index.html",
    		 	"src/css/*.css"
    		 ]        			
    		},
    		options: {
    			server: "src/",
    			watchTask: true,
    			notify: false,
    			open: true,
    			cors: true,
    			ui: false
    		}
    	}
    },

    watch: {
    	html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
    	style: {
    		files: ["src/less/**/*.less"],
    		tasks: ["less", "postcss"]
    	}
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-browser-sync");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-postcss");

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", ["less", "postcss"]);
};
 
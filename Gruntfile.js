// Any grunt script must be specified inside
module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		requirejs: {
			compile: {
				options: {
					mainConfigFile: 'httpdocs/js/build.js',
					baseUrl: 'httpdocs/js',
					name: 'main',
					include: ['build'],
					out: 'httpdocs/js/main.min.js'
				}
			}
		},

		coffee: {
			app: {
				expand: true,
				flatten: true,
				cwd: 'src/js',
				src: ['*.coffee'],
				dest: 'httpdocs/js/',
				ext: '.js'
				// src: ['src/js/**/*.coffee'],
				// dest: 'httpdocs/js',
				// options: {
				// 	bare: false,
				// 	preserve_dirs: true,
				// 	base_path: 'src/js'
				// }
			}
		},
		// Files which will be syntax checked
		jshint: {

		},
		// Files to be concated
		concat: {
			app: {
				src: [
					'httpdocs/js/main.js'
				],
				dest: 'httpdocs/js/app.js',
				separator: ';'
			}
		},
		// Files to minified
		uglify: {
			// options: {
			// 		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			// },
			// build: {
			// 	src: 'src/<%= pkg.name %>.js',
			// 	dest: 'build/<%= pkg.name %>.min.js'
			// }
		},
		watch: {

		},
		copy: {
			vendor: {
			    expand: true,
			    cwd: 'src/js/vendor',
			    src: '**',
			    dest: 'httpdocs/js/vendor/',
			    flatten: false,
			    filter: 'isFile',
			}
		}
		// Copy files from the development to production folder
		// copy: {
		// 	targets: {
		// 		files: {
		// 			// Copy all files and folders from dev folder into prod/ folder
		// 			'prod/': ['dev/**']
		// 		}
		// 	}
		// }

	});

  	// Load the plugin that provides the "uglify" task.
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// command: grunt watch
	// grunt.loadNpmTasks('grunt-contrib-watch');

	// Define tasks
	// grunt.registerTask('default', ['uglify','jshint','concat', 'watch']);
	grunt.registerTask('default', 'coffee:app');
	grunt.registerTask('production', ['default', 'copy:vendor' ,'requirejs']);

}
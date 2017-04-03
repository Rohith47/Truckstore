module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		sass : {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/main.css': 'css/main.scss'
				}
			}
		},

		concat: {
		    options: {
		     	separator: ';',
		    },
		    dist: {
		    	src: ['js/main.js', 'js/controller/controller.js', 'js/routing/route.js','js/services/service.js'],
		    	dest: 'js/project.js',
		    },
		}


	})

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['sass','concat']);
}
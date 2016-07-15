//校验压缩合并
module.exports = function (grunt) {
	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['src/*.js'],
			options: {
				globals: {
				  jQuery: true
				}
			}
		},
		uglify: {
			"my_target": {
				"files": {
					'dest/libs.min.js': ['src/*.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// 默认任务
	grunt.registerTask('default', ['jshint', 'uglify']);
};
module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //concat: {
        //    // 2. Configuration for concatinating files goes here.
        //}
        imagemin: {
            dynamic_img: {
                files: [{
                        expand: true,
                        cwd: 'private/img/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'img/'
                    }]
            },
            dynamic_views: {
                files: [{
                        expand: true,
                        cwd: 'private/views/images/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'views/images/'
                    }]
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // grunt.registerTask('default', ['concat']);
    // grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
    grunt.registerTask('default', ['imagemin']);

};



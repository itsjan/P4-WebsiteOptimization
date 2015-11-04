module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //concat: {
        //    // 2. Configuration for concatinating files goes here.
        //}

        responsive_images: {
            dynamic_img: {
                options: {engine: 'im',
                    newFilesOnly: true,
                    sizes: [{
                            name: 'small',
                            width: '30%',
                            //suffix: '_small',
                            quality: 20
                        }, {
                            name: 'large',
                            width: '50%',
                            //suffix: '_large',
                            quality: 40
                        }]},
                files: [{
                        expand: true,
                        cwd: 'private/img/',
                        src: ['**/*.{jpg,gif,png}'],
                        dest: 'img/'
                    }]
            },
            dynamic_views: {
                options: {engine: 'im',
                    newFilesOnly: true,
                    sizes: [{
                            name: 'small',
                            width: '100px',
                            //suffix: '_small',
                            quality: 100
                        }, {
                            name: 'large',
                            width: '50%',
                            //suffix: '_large',
                            quality: 100
                        }]},
                files: [{
                        expand: true,
                        cwd: 'private/views/images/',
                        src: ['**/*.{jpg,gif,png}'],
                        dest: 'views/images/'
                    }]
            }

        },
        imagemin: {
            dynamic_img: {
                files: [{
                        expand: true,
                        cwd: 'img/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'img/'
                    }]
            },
            dynamic_views: {
                files: [{
                        expand: true,
                        cwd: 'views/images/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'views/images/'
                    }]
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // grunt.registerTask('default', ['concat']);
    // grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
    grunt.registerTask('default', ['responsive_images', 'imagemin']);

};



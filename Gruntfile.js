module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //concat: {
        //    // 2. Configuration for concatinating files goes here.
        //}

        responsive_images: {
            
            
            dynamic_views: {
                options: {engine: 'im',
                    newFilesOnly: true,
                    sizes: [{
                            name: 'optimized',
                            height: '73px',
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
                        src: ['pizza.png'],
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
        },
        inlinecss: {
            main: {
                options: {
                },
                src: '_index.html',
                css: ['css/*.css'],
                dest: 'index.html'

                        //files: {
                        //    '_index.html': 'index.html'
            }
        }
    });


    //});

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-inline-css');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // grunt.registerTask('default', ['concat']);
    // grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
    grunt.registerTask('default', ['responsive_images', 'imagemin', 'inlinecss']);

};



module.exports = function ( grunt )
{
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        htmlmin: {
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [ {
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.html',
                    dest: 'dist/'
                }]
            }
        },

        cssmin: {
            conbine: {
                files: {
                    'dist/css/style.min.css': [
                        './node_modules/normalize.css/normalize.css',
                        './src/css/main.css'
                    ]
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/js/script.min.js': [
                        './src/js/main.js'
                    ]
                }
            }
        },

        image: {
            static: {
                options: {
                    pngquant: true,
                    optipng: false,
                    zopflipng: true,
                    jpegRecompress: false,
                    jpegoptim: true,
                    mozjpeg: true,
                    gifsicle: true,
                    svgo: true
                }
            },
            dynamic: {
                files: [ {
                    expand: true,
                    cwd: 'src/img/',
                    src: [ '**/*.{png,jpg,gif,svg}' ],
                    dest: 'dist/img/'
                }]
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-image' );

    grunt.registerTask( 'default', [ 'htmlmin', 'cssmin', 'uglify', 'image' ] );
    grunt.registerTask( 'minify', [ 'htmlmin', 'cssmin', 'uglify' ] );
}
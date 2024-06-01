

const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
       require('tailwindcss'),
   ])
   .browserSync('localhost:8000'); // Adjust to match your development URL

mix.options({
    processCssUrls: false
});

/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],
    theme: {
      extend: {
        colors: {
            // Using modern `rgb`
            primary:          "rgb(var(--color-primary) / )",
            "primary-soft":   "rgb(var(--color-primary-soft) / )",
            secondery:        "rgb(var(--color-secondery) / )",
            bgbody:           "rgb(var(--color-bgbody) / )",
          },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  }

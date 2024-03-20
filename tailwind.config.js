/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base:'var(--color-text-base)',
          muted:'var(--color-light-muted)',
          inverted:'var(--color-text-inverted)',
        }
      },
      backgroundColor:{
        skin:{
          fill:'var(--color-fill)',
          'button-accent':'var(--color-button-accent)',
          'button-accent-hover':'var(--color-button-accent-hover)',
          'button-muted':'var(--color-button-muted)',
          'button-muted-hover':'var(--color-button-muted-hover)',
          'text-muted':'var(--color-light-muted)',
        }
      },
      borderColor:{
        skin:{
          inverted:'var(--color-border-inverted)',
        }
      },
      gradientColorStops:{
        skin:{
          hue:'var(--color-fill))'
        }
      }
    },
  },
  plugins: [require("daisyui",'flowbite/plugin')],
};

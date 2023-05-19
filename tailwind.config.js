/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        'cst': '0px 2px 50px rgba(0, 0, 0, 0.2)',
      },
      height:{
        '17':'17px',
        '1080': '1080px',
        '341': '341px',
        '449': '449px',
        
      },
      width:{
        '400':'400px',
        '1440':'1440px',
        '1080': '1080px',
        '237': '237px',
        '335': '335.75px',
      },
      inset:{
        '1448':'1448px',
        '547':'547px',
        '902':'902px',
        '845':'845px',
        '330':'330px',
        '571':'571px',
        '944':'944px',
        '429':'429px',
        '241':'241px',
        '865':'865px',
        '796':'769px',
        '':'',
      }

    },
  },
  plugins: [],
}


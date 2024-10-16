/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["Newsreader_400Regular"],
        newsreaderSemiBold: ["Newsreader_600SemiBold"],
        newsreaderBold: ["Newsreader_700Bold"],
        poppins: ["Poppins_400Regular"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
        poppinsBold: ["Poppins_700Bold"],
        knewave: ["Knewave_400Regular"],
        inter: ["Inter_400Regular"],
        interMedium: ["Inter_500Medium"],
        interSemiBold: ["Inter_600SemiBold"],
        interBold: ["Inter_700Bold"],
        fugazOne: ["FugazOne_400Regular"],
        gabaritoSemiBold: ["Gabarito_600SemiBold"],
        gabaritoExtraBold: ["Gabarito_800ExtraBold"],
      },
    },
  },
  plugins: [],
};

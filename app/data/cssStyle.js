import { FontStyle } from "./fontStyle";

export default class MyCSS {
    static heading = `text-3xl md:text-6xl  text-center
        bg-clip-text text-transparent
        bg-gradient-to-b
        pb-2
        mt-4
        from-neutral-900 to-neutral-700
        bg-opacity-50
        dark:from-neutral-100 dark:to-neutral-500
        dark:bg-opacity-50
        animate-gradient-x`;
    static subHeading = `sub-heading text-neutral-400 dark:text-neutral-500 text-md mb-4 text-center ${FontStyle.jetbrains}`;
    static gradientTheme = `bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text`;
    // #ff6ec7, #9b5de5, #f3a683
}

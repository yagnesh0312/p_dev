import { Montserrat, JetBrains_Mono } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
});

export const FontStyle = {
    montserrat: montserrat.className,
    jetbrains: jetbrains.className,
};


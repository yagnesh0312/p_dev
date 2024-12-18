import { content } from "@/tailwind.config";
import  Content  from "../data/content";
import IconFooter from "./icon_footer";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center py-4 border-t">
            <h1 className="text-xl md:text-4xl font-bold pb-2 md:pb-4">{Content.PROJECT_TITLE}</h1>
            <p className="text-center text-md md:text-xl italic pb-2 md:pb-4 max-w-xs md:max-w-md mx-auto px-2 md:px-0 text-gradient">
                {Content.FOOTER_QUOTE}
            </p>
            <div className="flex space-x-4 pb-4">
                <IconFooter url={Content.GITHUB_URL} iconLink="https://img.icons8.com/ios11/512/FFFFFF/github.png" title="GitHub" />
                <IconFooter url={Content.LINKEDIN_URL} iconLink="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png" title="LinkedIn" />
                <IconFooter url={Content.INSTAGRAM_URL} iconLink="https://img.icons8.com/ios-glyphs/512/FFFFFF/instagram.png" title="Instagram" />
                {/* <IconFooter url="https://www.figma.com/" iconLink="https://img.icons8.com/ios-glyphs/512/FFFFFF/figma.png" title="Figma" /> */}

            </div>


            <p className="text-sm">{Content.FOOTER_TEXT}</p>
        </footer>
    );

}


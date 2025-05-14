import { Inter } from "next/font/google"
import StoreProvider from "./StoreProvider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
    title: "AliK - Unicode",
    description: `AliK to Unicode Converter\n
    Welcome to the AliK to Unicode Converter, your go-to tool for seamless text conversion. This online platform is designed to effortlessly transform text encoded in the AliK format into standard Unicode, ensuring compatibility across various systems and applications.\n
    \n
    - Key Features:\n
      - Easy Conversion: With a simple and intuitive interface, converting text from AliK to Unicode (and vice versa) is a breeze. Just paste your text and click convert.\n
      - Accurate Results: Our advanced algorithms guarantee precise conversion, maintaining the integrity and meaning of your text.\n
      - Batch Processing: Convert multiple lines or paragraphs at once, saving time and effort.\n
      - Cross-Platform Compatibility: Whether you’re on a PC, Mac, tablet, or smartphone, our web-based tool works flawlessly on any device.\n
      - Security and Privacy: We prioritize your data security. All conversions are performed locally on your device, ensuring that your text remains private and secure.\n
      - Free and Accessible: No registration required. Access the full range of features at no cost.\n
    - How to Use:\n
      1. Input Your Text: Paste or type the AliK encoded text into the input box.\n
      2. Convert: No need to click any button to transform the text into Unicode, it does it automatically.\n
      3. Copy and Use: Copy the converted Unicode text and use it in your desired application.\n
    - Why Choose Us?\n
    Our converter stands out due to its reliability and ease of use. Whether you are a developer, linguist, or anyone needing text conversion, our tool provides a hassle-free experience. Say goodbye to compatibility issues and ensure your text is readable and usable everywhere with the AliK to Unicode Converter.`,
};

export default function RootLayout({ children }) {
    return (

        <StoreProvider>
            <html lang="ar" className="scroll-smooth">
                <body className={inter.className}>
                    <div className="bg-background/80">{children}</div>
                </body>
            </html>
        </StoreProvider>
    );
}

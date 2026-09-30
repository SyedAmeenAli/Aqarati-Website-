import { Cormorant_Garamond, Inter, Noto_Naskh_Arabic, Noto_Sans_Arabic } from "next/font/google";

export const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant", display: "swap" });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const naskh = Noto_Naskh_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600"], variable: "--font-noto-naskh", display: "swap" });
export const sansArabic = Noto_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600"], variable: "--font-noto-sans-arabic", display: "swap" });

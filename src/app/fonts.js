import { Inter, Open_Sans, Press_Start_2P} from "next/font/google";

// Configuración de fuentes
export const inter = Inter({ subsets: ["latin"] });

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const pressStart2P = Press_Start_2P({
  subsets: ['latin'], 
  weight: '400'       
});

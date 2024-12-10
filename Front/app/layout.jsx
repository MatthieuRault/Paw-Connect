import { ToastProvider } from './context/toastContext';
import './globals.css';
import { Caveat } from 'next/font/google';
import Toast from './ui/Toast';
import { AuthProvider } from './context/authContext';
import 'leaflet/dist/leaflet.css';
import { AnimalProvider } from './context/animalContext';

const caveat = Caveat({ subsets: ['latin'] });

export const metadata = {
  title: 'Paw Connect',
  description: 'Refuge et famille d"accueil',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={caveat.className}>
        <AuthProvider>
          <ToastProvider>
            <AnimalProvider>
              {children}
              <Toast />
            </AnimalProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

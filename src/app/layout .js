
export const metadata = {
  title: "BacBepc.com - Sujets BEPC & BAC",
  description: "Télécharge les anciens sujets corrigés pour te préparer à l’examen",
  manifest: "/manifest.json",
  themeColor: "#3B82F6"
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

import "./globals.css";


export const metadata = {
  title: "Demo",
  description: "Demo Desk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

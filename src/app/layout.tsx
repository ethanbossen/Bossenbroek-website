import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import "@mantine/core/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
    title: "Ethan Bossenbroek's Site",
    description: "The website of software developer and hobby guitarist, Ethan Bossenbroek.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript />
        </head>
        <body>
        <MantineProvider>{children}</MantineProvider>
        <SpeedInsights />
        <Analytics />
        </body>
        </html>
    );
}

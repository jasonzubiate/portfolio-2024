import { Metadata } from "next";

export function constructMetaData({
  title = "Jason Zubiate | Designer & Developer",
  description = "I can help you with Web Design, Development, SEO, Motion Design, UI / UX Design. Professional, friendly and talented. Get in touch!",
  image = "/img/OGImage.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@jasonzubiate",
    },
    icons,
    metadataBase: new URL("https://www.jasonzubiate.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import { client } from '../../../../sanity/lib/client';
import { PortableText } from '@portabletext/react';

// Veriyi çeken fonksiyon
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    mainImage,
    "imageUrl": mainImage.asset->url,
    body
  }`;
  return await client.fetch(query, { slug });
}

// Zengin Metin (Rich Text) Stil Ayarları
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
          <img
            src={value.asset._ref} // Gerçek projede urlBuilder kullanmak daha iyidir ama şimdilik bu çalışır
            alt={value.alt || 'Blog görseli'}
            className="object-cover w-full h-full"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-white mt-10 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-primary pl-4 italic text-white my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-5 text-muted-foreground mb-4 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-5 text-muted-foreground mb-4 space-y-2">{children}</ol>,
  },
};

type Props = {
  params: Promise<{ slug: string }>; // Tip tanımını Promise yaptık
};

// 2. YENİ EKLENEN KISIM: Dinamik Metadata Fonksiyonu
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // URL'den slug'ı al
  const { slug } = await params;
  
  // Veriyi çek (Next.js aynı veriyi 2 kere çekmez, cache'ler. Merak etme.)
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
      description: "Aradığınız blog yazısına ulaşılamadı.",
    };
  }

  return {
    // Tarayıcı sekmesinde yazacak başlık
    title: `${post.title} | Berk Ali Meral`, 
    
    // Google açıklaması (Post'un ilk 150 karakterini alabiliriz veya sabit bir şey yazabiliriz)
    description: "Mobil uygulama geliştirme ve teknoloji üzerine notlarım.",
    
    // Sosyal Medya Paylaşım Ayarları (Open Graph)
    openGraph: {
      title: post.title,
      description: "Mobil uygulama geliştirme üzerine detaylı inceleme.",
      url: `https://berkalimeral.com/blog/${slug}`, // (Domain alınca burayı güncellersin)
      siteName: 'Berk Ali Meral Portfolyo',
      images: [
        {
          url: post.imageUrl || "", // Blogun kapak resmi
          width: 1200,
          height: 630,
        },
      ],
      locale: 'tr_TR',
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost((await params).slug);

  if (!post) return <div className="text-center py-20 text-white">Yazı bulunamadı.</div>;

  return (
    <article className="pt-10 pb-20 px-4 flex justify-center min-h-screen">
      <div className="max-w-3xl w-full">
        
        {/* Başlık ve Tarih */}
        <div className="mb-8 text-center">
            <span className="text-primary text-sm font-medium">
                {new Date(post.publishedAt).toLocaleDateString('tr-TR', { dateStyle: 'long' })}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
                {post.title}
            </h1>
        </div>

        {/* Kapak Resmi */}
        {post.imageUrl && (
            <div className="w-full h-[400px] relative rounded-2xl overflow-hidden mb-10 border border-white/10 shadow-2xl">
                <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                />
            </div>
        )}

        {/* İçerik */}
        <div className="prose prose-invert prose-lg max-w-none">
            <PortableText value={post.body} components={ptComponents} />
        </div>

      </div>
    </article>
  );
}
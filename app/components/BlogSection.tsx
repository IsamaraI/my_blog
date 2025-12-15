import { client } from '../../sanity/lib/client'; // Sanity client yolunu ayarla
import BlogList from './ui/BlogList';

// Sanity'den son 3 yazıyı çeken sorgu
async function getRecentPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
  }`;
  return await client.fetch(query);
}

export default async function BlogSection() {
  const posts = await getRecentPosts();

  return (
    <section id="blog" className="py-10 px-10 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col gap-8">
        
        <div className="flex justify-between items-end">
             <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Blog Yazıları</h2>
                <p className="text-muted-foreground">Teknoloji ve yazılım üzerine notlarım.</p>
             </div>
             {/* Tümünü gör butonu opsiyonel */}
             {/* <Link href="/blog" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                Tümünü Gör <FiArrowRight />
             </Link> */}
        </div>

       <BlogList posts={posts}/>
      </div>
    </section>
  );
}
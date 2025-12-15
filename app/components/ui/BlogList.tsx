/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"; // Burası Client Component

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function BlogList({ posts }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className="group">
              <div className="bg-card/50 border border-white/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 h-full flex flex-col">
                {/* Resim */}
                {post.imageUrl ? (
                    <div className="h-48 w-full overflow-hidden">
                        <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                ) : (
                    <div className="h-48 w-full bg-zinc-800 flex items-center justify-center text-zinc-600">Resim Yok</div>
                )}
                
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs text-primary mb-2 block">
                    {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {/* Kısa Açıklama (Body'den çekilen) */}
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto text-sm font-medium text-white flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Devamını Oku <FiArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
  );
}
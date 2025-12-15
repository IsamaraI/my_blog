import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Kısa Yolu (Slug)',
      type: 'slug',
      options: {
        source: 'title', // Başlığı otomatik slug'a çevirir
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Kapak Resmi',
      type: 'image',
      options: {
        hotspot: true, // Resmin odak noktasını seçmeni sağlar
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayınlanma Tarihi',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'İçerik',
      type: 'array', // Zengin metin editörü (Bold, Italic, Resim vb. için)
      of: [
        { type: 'block' },
        { type: 'image' }
      ],
    }),
  ],
})
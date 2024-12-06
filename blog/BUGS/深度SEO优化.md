# 深度 SEO 优化

## SEO 优化思路

1. 页面结构优化
   语义化标签（meta、title、h1、header、nav、footer...）
2. 内容优化
   保证页面中关键词的覆盖率
3. 技术向 SEO 优化

   - 站点地图

   ```txt
   # robots.txt
   User-agent: *
   Disallow: /private/

   Sitemap: https://www.example.com/sitemap.xml
   ```

   - 结构化数据

   ```html
   <script type="application/ld+json">
     {
       "@context": "https://schema.org",
       "@type": "Article",
       "headline": "Benefits of SEO Optimization",
       "author": "John Doe",
       "datePublished": "2023-07-01",
       "image": "https://www.example.com/images/seo-benefits.jpg"
     }
   </script>
   ```

   - 移动端兼容处理

   ```css
   /**响应式设计 */
   @media (max-width: 600px) {
     body {
       font-size: 16px;
     }
   }
   ```

   - 外部链接优化、内部链接优化、资源压缩相关的优化

  {/* Blog Preview Section */}
  <section className="container mx-auto px-4 py-16 relative z-10">
  <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
    LATEST ARTICLES
  </h2>
  <BlogPreview />

  <div className="text-center mt-10">
    <Button asChild size="lg" variant="outline" className="rounded-full font-retro">
      <Link href="/blog">VIEW ALL ARTICLES</Link>
    </Button>
  </div>
</section>

// Remove all imports and keep only the component code
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://instagram.com", label: "Instagram" }
  ];

  const quickLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" }
  ];

  return (
    <footer class="w-full border-t bg-background">
      <div class="container py-12 mx-auto px-4">
        {/* Company Info */}
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div class="md:col-span-5">
            <a href="/" class="inline-block mb-6">
              <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Desir Technologies
              </span>
            </a>
            <p class="text-base text-muted-foreground max-w-md mb-8">
              Empowering businesses with innovative technology solutions to drive growth and success. We specialize in
              web development, mobile apps, cloud solutions, and IT consulting.
            </p>
            
            {/* Social Links */}
            <div class="flex flex-wrap gap-4">
              {socialLinks.map(social => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-colors"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div class="md:col-span-7">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-medium mb-4">Contact Us</h3>
                <div class="space-y-3">
                  <p class="text-muted-foreground">
                    123 Tech Avenue<br />
                    San Francisco, CA 94107
                  </p>
                  <a href="tel:+15551234567" class="text-muted-foreground hover:text-foreground">
                    +1 (555) 123-4567
                  </a>
                  <a href="mailto:info@desirtechnologies.com" class="block text-muted-foreground hover:text-foreground">
                    info@desirtechnologies.com
                  </a>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-medium mb-4">Quick Links</h3>
                <div class="space-y-3">
                  {quickLinks.map(link => (
                    <a
                      href={link.href}
                      class="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div class="border-t border-primary/10 pt-8">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-sm text-muted-foreground">
              © {currentYear} Desir Technologies. All rights reserved.
            </p>
            <div class="flex items-center gap-6 text-sm">
              <a href="/privacy" class="text-muted-foreground hover:text-foreground">Privacy</a>
              <a href="/terms" class="text-muted-foreground hover:text-foreground">Terms</a>
              <a href="/sitemap" class="text-muted-foreground hover:text-foreground">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
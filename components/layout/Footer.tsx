import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Artists', href: '/artists' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'For Studios', href: '/for-studios' },
      { label: 'For Artists', href: '/artists' },
      { label: 'Blog', href: '/blog' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/haekainteractive', icon: 'X' },
    { label: 'Instagram', href: 'https://instagram.com/haekainteractive', icon: 'IG' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/haeka', icon: 'LI' },
  ];

  return (
    <footer className="relative mt-24 border-t border-indigo-light/30 bg-gradient-to-b from-obsidian to-indigo-dark/50">
      {/* Main Footer Content */}
      <div className="container-base py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/80 rounded-lg flex items-center justify-center font-display font-bold text-xl text-obsidian shadow-md">
                H
              </div>
              <span className="font-display font-bold text-2xl">HAEKA</span>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Publishing the future of African interactive media. Games, music, film, and art that tell uniquely African stories for global audiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-indigo/50 border border-indigo-light/30 flex items-center justify-center text-xs font-display font-bold text-gray-300 hover:text-gold hover:border-gold/50 hover:shadow-glow transition-all duration-fast"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-gold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-fast"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-gold mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-fast"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-gold mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-fast"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-light/30">
        <div className="container-base py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} Haeka Interactive. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <span className="text-gold">⚡</span>
              <span>in Africa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

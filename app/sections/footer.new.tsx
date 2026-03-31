const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/alok-kiran",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alokkiran/",
  },
  {
    name: "Email",
    href: "mailto:alokkiran777@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background w-full py-12 border-t border-border/15">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6">
        <div className="text-lg font-bold text-foreground font-heading">AK</div>
        <div className="text-[0.6875rem] uppercase tracking-[0.05em] text-muted-foreground">
          &copy; {new Date().getFullYear()} AK. Built with precision.
        </div>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.6875rem] uppercase tracking-[0.05em] text-muted-foreground hover:text-obsidian transition-colors opacity-80 hover:opacity-100"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

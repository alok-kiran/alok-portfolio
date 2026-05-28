export default function Footer() {
  return (
    <footer
      className="flex flex-wrap justify-between items-center gap-3"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "20px clamp(16px,4vw,40px)",
        fontSize: 10,
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        background: "var(--background)",
      }}
    >
      <span>© 2026 · alok kiran</span>
      <span className="hidden sm:inline">set in jetbrains mono</span>
      <span>built in vim, deployed at 02:14</span>
    </footer>
  );
}

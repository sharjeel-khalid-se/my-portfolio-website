const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.8 5.8 0 0 0-1.6-4.1 5.4 5.4 0 0 0-.1-4s-1.3-.4-4 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-4-1.4-4-1.4a5.4 5.4 0 0 0-.1 4 5.8 5.8 0 0 0-1.6 4.1c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0F0E17] text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-gray-400">
          © {new Date().getFullYear()} Sharjeel Khalid. Built with Next.js & ☕
        </p>
        <span className="font-display font-bold tracking-widest text-brand-accent">
          sharjeelac.me
        </span>
        <div className="flex gap-4">
          <a href="https://github.com/sharjeel-khalid-se" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/sharjeel-khalid-dev" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon />
          </a>
          <a href="https://www.upwork.com/freelancers/~01157dd14870c2171e" target="_blank" className="text-gray-400 hover:text-white font-body font-bold flex items-center transition-colors">
            <span className="text-lg leading-none">U<span className="text-[10px] align-top">p</span></span>
          </a>
        </div>
      </div>
    </footer>
  );
}

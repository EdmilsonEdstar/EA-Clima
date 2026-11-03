export function Footer() {
  return (
    <footer className="w-full mt-auto py-6 px-4">
      <div className="w-full max-w-6xl mx-auto border-t border-blue-500/10 pt-5">
        <p className="text-center text-xs text-[var(--text-color)] opacity-50">
          &copy; {new Date().getFullYear()} Edmilson António. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

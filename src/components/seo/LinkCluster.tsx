import Link from 'next/link';

interface ClusterLink {
  title: string;
  href: string;
  description: string;
}

interface LinkClusterProps {
  title: string;
  links: ClusterLink[];
  currentPath?: string;
  maxLinks?: number;
}

export function LinkCluster({ title, links, currentPath, maxLinks = 4 }: LinkClusterProps) {
  const visibleLinks = links
    .filter((link) => link.href !== currentPath)
    .slice(0, maxLinks);

  if (visibleLinks.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {visibleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold text-emerald-300">{link.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Helper function to get all pages recursively
function getPages(dir, basePath = '') {
  const pages = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (['api', 'sitemap'].includes(item)) continue;
      if (item.startsWith('_') || item.startsWith('.')) continue;

      // Handle dynamic route segments
      const isDynamicRoute = item.startsWith('[') && item.endsWith(']');
      if (isDynamicRoute) continue; // Skip dynamic routes in sitemap

      // Recursively get pages from subdirectories
      pages.push(...getPages(fullPath, relativePath));
    } else if (item.match(/^page\.(js|jsx|tsx)$/)) {
      // Convert file path to URL path
      let urlPath = basePath.replace(/\\/g, '/');
      if (urlPath === '') urlPath = '/';
      
      // Skip paths containing dynamic segments
      if (!urlPath.includes('[')) {
        pages.push(urlPath);
      }
    }
  }

  return pages;
}

// Group pages by their first segment
function groupPages(pages) {
  const groups = {};
  
  pages.forEach(page => {
    const segments = page.split('/').filter(Boolean);
    const mainSection = segments[0] || 'main';
    
    if (!groups[mainSection]) {
      groups[mainSection] = [];
    }
    groups[mainSection].push(page);
  });

  return groups;
}

export const metadata = {
  title: 'Site Contents',
  description: 'A complete listing of all pages on our website',
};

export default function ContentsPage() {
  // Get the app directory path
  const appDir = path.join(process.cwd(), 'app');
  const pages = getPages(appDir);
  const groupedPages = groupPages(pages);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Site Contents</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(groupedPages).map(([section, pages]) => (
          <div key={section} className="mb-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 capitalize">
              {section === 'main' ? 'Main Pages' : section}
            </h2>
            <ul className="space-y-2">
              {pages.map((page) => {
                const displayPath = page === '/' ? 'Home' : page;
                return (
                  <li key={page}>
                    <Link 
                      href={page} 
                      className="text-blue-600 hover:underline"
                    >
                      {displayPath}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 
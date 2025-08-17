import React from 'react';

/**
 * SplitHeading
 * props:
 * - before: string (left/muted)
 * - highlight: string (accent/orange)
 * - after: string (right/muted, optional)
 * - level: string tag name (h2/h3/etc)
 * - className: additional classes
 */
export default function SplitHeading({ before = '', highlight = '', after = '', level = 'h2', className = '' }) {
  const Tag = level;
  return (
    <Tag className={`text-3xl md:text-4xl font-bold mb-6 ${className}`}>
      {before ? <span className="text-muted">{before}{before && highlight ? ' ' : ''}</span> : null}
      {highlight ? <span className="text-accent">{highlight}{after ? ' ' : ''}</span> : null}
      {after ? <span className="text-muted">{after}</span> : null}
    </Tag>
  );
}

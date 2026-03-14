import React from 'react';

interface RichTextProps {
  content: string;
  className?: string;
}

/**
 * Simple rich text renderer that supports:
 * - [link text](url) - Markdown-style links
 * - **bold text** - Bold formatting
 * - Line breaks and spacing preserved
 * - French typography (non-breaking spaces before punctuation)
 */
export const RichText: React.FC<RichTextProps> = ({ content, className = '' }) => {
  const renderContent = (text: string) => {
    if (!text) return null;
    
    // Apply French typography: non-breaking space before : ; ! ?
    text = text.replace(/\s+([:;!?])/g, '\u00A0$1');
    
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Regex to match [text](url) or **bold**
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      if (match[1] && match[2]) {
        // It's a link [text](url)
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80 transition-colors"
          >
            {match[1]}
          </a>
        );
      } else if (match[3]) {
        // It's bold **text**
        parts.push(<strong key={match.index}>{match[3]}</strong>);
      }
      
      lastIndex = regex.lastIndex;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts;
  };

  if (!content) return null;
  
  return (
    <div className={className}>
      {renderContent(content)}
    </div>
  );
};

interface RichTextListProps {
  items: string[];
  className?: string;
}

/**
 * Renders a list of rich text items
 */
export const RichTextList: React.FC<RichTextListProps> = ({ items, className = '' }) => {
  return (
    <ul className={`list-none pl-0 space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index}>
          <RichText content={item} />
        </li>
      ))}
    </ul>
  );
};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InlineSearchBarProps {
  subjectSlug?: string;
  placeholder?: string;
}

export default function InlineSearchBar({ subjectSlug, placeholder }: InlineSearchBarProps) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (v: string) => {
    setValue(v);
    const params = new URLSearchParams();
    if (v) params.set('q', v);
    if (subjectSlug) params.set('subject', subjectSlug);
    navigate(`/search?${params.toString()}`, { replace: true });
  };

  return (
    <input
      className="inline-search-bar"
      type="text"
      placeholder={placeholder ?? 'Search…'}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

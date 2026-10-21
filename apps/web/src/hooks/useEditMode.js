import { useEffect, useState } from 'react';

/**
 * Detects whether the Horizons visual editor ("Select and edit" mode) is
 * active on the current preview. The editor toggles a `data-edit-mode-enabled`
 * attribute on the `#root` element; we observe it so React can react live when
 * the owner turns editing on/off.
 *
 * Always returns `false` on the public/published site (the attribute is never
 * set there), so any UI gated on this hook is invisible to visitors.
 *
 * @returns {boolean}
 */
export default function useEditMode() {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return undefined;

    const read = () =>
      root.getAttribute('data-edit-mode-enabled') === 'true';

    setEditMode(read());

    const observer = new MutationObserver(() => setEditMode(read()));
    observer.observe(root, { attributes: true, attributeFilter: ['data-edit-mode-enabled'] });

    return () => observer.disconnect();
  }, []);

  return editMode;
}

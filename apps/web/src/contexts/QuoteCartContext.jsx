import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const QuoteCartContext = createContext(null);

const STORAGE_KEY = 'medicalex_quote_cart_v1';

const loadCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const clampQty = (value) => {
  const n = parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
};

export const QuoteCartProvider = ({ children }) => {
  const [items, setItems] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / privacy errors */
    }
  }, [items]);

  const addItem = (product, qty = 1) => {
    const quantity = clampQty(qty);
    setItems((prev) => {
      const idx = prev.findIndex((it) => it.productId === product.productId);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + quantity };
        return next;
      }
      return [...prev, { ...product, qty: quantity }];
    });
  };

  const setQty = (productId, qty) => {
    const quantity = clampQty(qty);
    setItems((prev) =>
      prev.map((it) => (it.productId === productId ? { ...it, qty: quantity } : it)),
    );
  };

  const incrementQty = (productId, delta) => {
    setItems((prev) =>
      prev.map((it) =>
        it.productId === productId ? { ...it, qty: Math.max(1, it.qty + delta) } : it,
      ),
    );
  };

  const removeItem = (productId) => {
    setItems((prev) => prev.filter((it) => it.productId !== productId));
  };

  const clearCart = () => setItems([]);

  const totalQty = useMemo(
    () => items.reduce((sum, it) => sum + it.qty, 0),
    [items],
  );
  const lineCount = items.length;

  const value = useMemo(
    () => ({
      items,
      addItem,
      setQty,
      incrementQty,
      removeItem,
      clearCart,
      totalQty,
      lineCount,
    }),
    [items, totalQty, lineCount],
  );

  return <QuoteCartContext.Provider value={value}>{children}</QuoteCartContext.Provider>;
};

export const useQuoteCart = () => useContext(QuoteCartContext);

export default QuoteCartContext;

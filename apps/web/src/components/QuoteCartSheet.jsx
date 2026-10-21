import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { useQuoteCart } from '@/contexts/QuoteCartContext';
import { useLanguage } from '@/contexts/LanguageContext';

const QuoteCartSheet = ({ open, onOpenChange }) => {
  const { t } = useLanguage();
  const { items, incrementQty, removeItem, clearCart, totalQty } = useQuoteCart();
  const navigate = useNavigate();

  const goToProducts = () => {
    onOpenChange(false);
    navigate('/products');
  };

  const proceed = () => {
    onOpenChange(false);
    navigate('/contact?subject=quote#devis');
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 bg-white p-0 sm:max-w-md"
      >
        <div className="flex items-center gap-2 border-b border-border px-6 py-5 pr-12">
          <ShoppingCart className="h-5 w-5 text-brand-green" strokeWidth={2} />
          <SheetTitle className="font-display text-lg font-extrabold text-brand-blue">
            {t.quoteCart.title}
          </SheetTitle>
          {totalQty > 0 && (
            <span className="ml-auto flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-brand-navy px-1.5 text-xs font-extrabold leading-none text-white">
              {totalQty}
            </span>
          )}
        </div>
        <SheetDescription className="sr-only">{t.quoteCart.title}</SheetDescription>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.quoteCart.empty}
            </p>
            <button
              type="button"
              onClick={goToProducts}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full border-2 border-brand-blue px-6 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              {t.quoteCart.emptyCta}
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map((it) => (
                <div key={it.productId} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-bold leading-snug text-brand-navy">
                        {it.productName}
                      </p>
                      <p className="mt-1 font-mono text-xs font-semibold text-brand-blue">
                        {t.quoteCart.reference} {it.ref}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {t.quoteCart.supplier} : {it.supplierName}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(it.productId)}
                      aria-label={t.quoteCart.remove}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => incrementQty(it.productId, -1)}
                      aria-label="-1"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-blue/20 text-brand-blue transition-colors hover:bg-brand-mist disabled:opacity-40"
                      disabled={it.qty <= 1}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-brand-navy">
                      {it.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => incrementQty(it.productId, 1)}
                      aria-label="+1"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-blue/20 text-brand-blue transition-colors hover:bg-brand-mist"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <span className="ml-1 text-xs font-medium text-muted-foreground">
                      {t.quoteCart.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">
                  {t.quoteCart.totalItems}
                </span>
                <span className="font-display text-lg font-extrabold text-brand-navy">
                  {totalQty}
                </span>
              </div>
              <button
                type="button"
                onClick={proceed}
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-bold text-white transition-all hover:bg-brand-green-dark active:scale-[0.98]"
              >
                {t.quoteCart.proceed}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full text-center text-xs font-semibold text-muted-foreground transition-colors hover:text-destructive"
              >
                {t.quoteCart.clearAll}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default QuoteCartSheet;

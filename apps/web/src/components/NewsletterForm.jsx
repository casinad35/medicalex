import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterForm = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | success | duplicate | error

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setStatus('sending');
        try {
            await pb.collection('newsletter_subscribers').create({ email: email.trim() });
            setStatus('success');
            setEmail('');
        } catch (err) {
            const code = err?.data?.data?.email?.code || err?.response?.data?.email?.code;
            setStatus(code === 'validation_not_unique' ? 'duplicate' : 'error');
        }
    };

    return (
        <div className="rounded-3xl bg-brand-blue px-6 py-10 sm:px-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                <div className="max-w-md">
                    <p className="flex items-center justify-center gap-2 font-display text-xl font-extrabold text-white md:justify-start">
                        <Mail className="h-5 w-5 text-brand-green" strokeWidth={2} />
                        {t.newsletter.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{t.newsletter.subtitle}</p>
                </div>
                {status === 'success' || status === 'duplicate' ? (
                    <p className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-5 w-5 text-brand-green" strokeWidth={2} />
                        {status === 'success' ? t.newsletter.success : t.newsletter.duplicate}
                    </p>
                ) : (
                    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                        <label htmlFor="newsletter-email" className="sr-only">
                            {t.newsletter.placeholder}
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t.newsletter.placeholder}
                            className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:border-brand-green focus:outline-none"
                        />
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-bold text-white transition-all hover:bg-brand-green-dark active:scale-[0.98] disabled:opacity-60"
                        >
                            {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
                            {status === 'sending' ? t.newsletter.sending : t.newsletter.button}
                        </button>
                    </form>
                )}
            </div>
            {status === 'error' && (
                <p className="mt-3 text-center text-sm font-medium text-red-200 md:text-right">
                    {t.newsletter.error}
                </p>
            )}
        </div>
    );
};

export default NewsletterForm;

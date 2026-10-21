import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuoteCart } from '@/contexts/QuoteCartContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const initialState = {
    name: '',
    hospital: '',
    specialty: '',
    email: '',
    phone: '',
    subject: 'quote',
    message: '',
};

const ContactForm = () => {
    const { t, lang } = useLanguage();
    const { items: cartItems, clearCart } = useQuoteCart();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    useEffect(() => {
        const subject = searchParams.get('subject');
        const product = searchParams.get('product');
        const ref = searchParams.get('ref');
        setForm((prev) => {
            const next = { ...prev };
            if (['quote', 'technical', 'general'].includes(subject)) {
                next.subject = subject;
            }
            if (cartItems.length > 0) {
                const header =
                    lang === 'en'
                        ? 'Quote request for the following products:'
                        : 'Demande de devis pour les produits suivants :';
                const lines = cartItems
                    .map(
                        (it, i) =>
                            `${i + 1}. ${it.productName} (réf. ${it.ref}) — ${
                                lang === 'en' ? 'Supplier' : 'Fournisseur'
                            } : ${it.supplierName} — ${lang === 'en' ? 'Qty' : 'Qté'} : ${it.qty}`,
                    )
                    .join('\n');
                next.message = `${header}\n\n${lines}`;
            } else if (product) {
                const line = `Demande concernant : ${product}${ref ? ` (réf. ${ref})` : ''}`;
                if (!prev.message.includes(product)) {
                    next.message = prev.message ? `${prev.message}\n\n${line}` : line;
                }
            }
            return next;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await pb.collection('quote_requests').create({
                name: form.name.trim(),
                hospital: form.hospital.trim(),
                specialty: form.specialty.trim(),
                email: form.email.trim(),
                phone: form.phone.trim(),
                subject: form.subject,
                message: form.message.trim(),
            });
            // Only confirm after a successful create — the record is persisted
            // and the PocketBase hook has emailed it to contact@medi-calex.com.
            if (cartItems.length > 0) clearCart();
            setStatus('success');
            navigate('/confirmation');
        } catch (err) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border-2 border-brand-green/40 bg-brand-mist p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-brand-green" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-2xl font-extrabold text-brand-blue">
                    {t.contact.formSuccessTitle}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {t.contact.formSuccessText}
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setForm(initialState);
                        setStatus('idle');
                    }}
                    className="mt-6 inline-flex h-11 items-center rounded-full border-2 border-brand-blue px-6 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                >
                    {t.contact.formAgain}
                </button>
            </div>
        );
    }

    const fieldClass =
        'h-12 rounded-xl border-input bg-white text-sm focus-visible:ring-brand-blue';

    return (
        <form
            onSubmit={onSubmit}
            className="rounded-3xl border-2 border-brand-blue/15 bg-white p-6 shadow-sm sm:p-8"
        >
            <h3 className="font-display text-xl font-extrabold text-brand-blue">
                {t.contact.formTitle}
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="cf-name">{t.contact.formName} *</Label>
                    <Input
                        id="cf-name"
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder={t.contact.formNamePh}
                        className={fieldClass}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="cf-hospital">{t.contact.formHospital}</Label>
                    <Input
                        id="cf-hospital"
                        value={form.hospital}
                        onChange={set('hospital')}
                        placeholder={t.contact.formHospitalPh}
                        className={fieldClass}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="cf-specialty">{t.contact.formSpecialty}</Label>
                    <Input
                        id="cf-specialty"
                        value={form.specialty}
                        onChange={set('specialty')}
                        placeholder={t.contact.formSpecialtyPh}
                        className={fieldClass}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="cf-email">{t.contact.formEmail} *</Label>
                    <Input
                        id="cf-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder={t.contact.formEmailPh}
                        className={fieldClass}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="cf-phone">{t.contact.formPhone}</Label>
                    <Input
                        id="cf-phone"
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder={t.contact.formPhonePh}
                        className={fieldClass}
                    />
                </div>
                <div className="grid gap-2">
                    <Label>{t.contact.formSubject} *</Label>
                    <Select
                        value={form.subject}
                        onValueChange={(v) => setForm((prev) => ({ ...prev, subject: v }))}
                    >
                        <SelectTrigger className={fieldClass}>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="quote">{t.contact.subjectQuote}</SelectItem>
                            <SelectItem value="technical">{t.contact.subjectTechnical}</SelectItem>
                            <SelectItem value="general">{t.contact.subjectGeneral}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="cf-message">{t.contact.formMessage}</Label>
                    <Textarea
                        id="cf-message"
                        rows={5}
                        value={form.message}
                        onChange={set('message')}
                        placeholder={t.contact.formMessagePh}
                        className="rounded-xl border-input bg-white text-sm focus-visible:ring-brand-blue"
                    />
                </div>
            </div>
            {status === 'error' && (
                <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                    {t.contact.formError}
                </p>
            )}
            <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-bold text-white transition-all hover:bg-brand-green-dark active:scale-[0.98] disabled:opacity-60 sm:w-auto"
            >
                {status === 'sending' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <Send className="h-4 w-4" strokeWidth={2} />
                )}
                {status === 'sending' ? t.contact.formSending : t.contact.formSubmit}
            </button>
        </form>
    );
};

export default ContactForm;

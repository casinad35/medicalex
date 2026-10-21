import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import { QuoteCartProvider } from './contexts/QuoteCartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SupplierPage from './pages/SupplierPage';
import {
    CatalogSegPage,
    CatalogSeg2Page,
    CatalogProductPage,
} from './pages/CatalogRoutePages';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
    return (
        <LanguageProvider>
          <QuoteCartProvider>
            <Router>
                <ScrollToTop />
                <div className="flex min-h-[100dvh] flex-col">
                    <Header />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/products/:supplierId" element={<SupplierPage />} />
                            <Route path="/products/:supplierId/:browseMode" element={<CatalogSegPage />} />
                            <Route
                                path="/products/:supplierId/:browseMode/:groupId"
                                element={<CatalogSeg2Page />}
                            />
                            <Route
                                path="/products/:supplierId/:browseMode/:groupId/:productId"
                                element={<CatalogProductPage />}
                            />
                            <Route path="/news" element={<NewsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/confirmation" element={<ConfirmationPage />} />
                            <Route path="*" element={<HomePage />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
          </QuoteCartProvider>
        </LanguageProvider>
    );
}

export default App;

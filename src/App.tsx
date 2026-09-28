import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Pillars } from './components/Pillars/Pillars';
import { ShopByBenefit, BenefitCategory } from './components/Benefits/ShopByBenefit';
import { ShopByGoal } from './components/Goals/ShopByGoal';
import { NewRelease } from './components/NewRelease/NewRelease';
import { ProductCatalog } from './components/Products/ProductCatalog';
import { ProductModal } from './components/Products/ProductModal';
import { ReviewsSlider } from './components/Reviews/ReviewsSlider';
import { About } from './components/About/About';
import { Leadership } from './components/Leadership/Leadership';
import { Footer } from './components/Footer/Footer';
import { CartDrawer } from './components/Modals/CartDrawer';
import { SearchOverlay } from './components/Modals/SearchOverlay';
import { AccountModal } from './components/Modals/AccountModal';
import { Toast } from './components/UI/Toast';
import { Chatbot } from './components/Chatbot/Chatbot';
import { products } from './data/products';
import { Product } from './types';

const MainApp: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProductId, setActiveModalProductId] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [customFilteredProducts, setCustomFilteredProducts] = useState<Product[] | null>(null);

  const handleOpenProductModal = (productId: number) => {
    setActiveModalProductId(productId);
  };

  const handleCloseProductModal = () => {
    setActiveModalProductId(null);
  };

  const handleSelectBenefit = (benefit: BenefitCategory) => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const topOffset = productsSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
    setSelectedCategory('all');
    setCustomFilteredProducts(products.filter(p => benefit.productIds.includes(p.id)));
  };

  const handleSelectGoal = (goal: 'muscle' | 'energy' | 'recovery') => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const topOffset = productsSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }

    if (goal === 'muscle') {
      setSelectedCategory('all');
      setCustomFilteredProducts(products.filter(p => p.id === 3 || p.id === 5));
    } else if (goal === 'energy') {
      setSelectedCategory('all');
      setCustomFilteredProducts(products.filter(p => p.id === 2));
    } else if (goal === 'recovery') {
      setSelectedCategory('all');
      setCustomFilteredProducts(products.filter(p => p.id === 7 || p.id === 4 || p.id === 8));
    }
  };

  const handleCategoryChange = (category: string) => {
    setCustomFilteredProducts(null);
    setSelectedCategory(category);
  };

  const selectedProduct = activeModalProductId !== null
    ? products.find(p => p.id === activeModalProductId) || null
    : null;

  const currentProductsList = customFilteredProducts || products;

  return (
    <div className="app-root">
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      <main>
        <Hero />
        <Pillars />
        <ShopByBenefit onSelectBenefit={handleSelectBenefit} />
        <ShopByGoal onSelectGoal={handleSelectGoal} />
        <NewRelease onOpenModal={handleOpenProductModal} />

        <ProductCatalog
          products={currentProductsList}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          onOpenModal={handleOpenProductModal}
        />
        <ReviewsSlider />
        <About />
        <Leadership />
      </main>

      <Footer onSelectCategory={handleCategoryChange} />

      <ProductModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleOpenProductModal}
      />

      <CartDrawer />
      <AccountModal />
      <Chatbot onOpenProductModal={handleOpenProductModal} />
      <Toast />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

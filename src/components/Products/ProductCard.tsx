import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenModal: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { addToCart } = useCart();

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="compact-product-card" onClick={() => onOpenModal(product.id)}>
      {/* Product Image Container */}
      <div className="compact-img-wrap">
        <span className="compact-series-badge">{product.seriesName}</span>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="compact-product-img"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/mass_gainer.png';
          }}
        />
      </div>

      {/* Product Info: Name, Price, Add to Cart, View Science & Ingredients */}
      <div className="compact-card-info">
        <h3 className="compact-product-name">{product.name}</h3>

        <div className="compact-price-row">
          <span className="compact-current-price">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.mrpPrice > product.price && (
            <span className="compact-mrp-price">
              ₹{product.mrpPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        <div className="compact-card-actions">
          <button
            type="button"
            className="compact-add-cart-btn"
            onClick={handleAddClick}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={15} />
            <span>Add to Cart</span>
          </button>

          <button
            type="button"
            className="compact-view-science-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product.id);
            }}
          >
            <span>View Science & Ingredients</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

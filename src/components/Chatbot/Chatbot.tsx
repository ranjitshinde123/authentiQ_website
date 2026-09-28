import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  recommendedProducts?: Product[];
  timestamp: string;
}

interface ChatbotProps {
  onOpenProductModal: (productId: number) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenProductModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showGreetingTooltip, setShowGreetingTooltip] = useState(true);
  const { addToCart } = useCart();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hi there! I'm your **authentiQ Nutrition AI Advisor**.\n\nHow can I help power your training and fitness goals today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickQuestions = [
    "💪 Best for Muscle Growth",
    "🔥 Burn Fat & Weight Loss",
    "😴 Improve Sleep & Recovery",
    "⚡ Pre-Workout Recommendations",
    "📦 Shipping & COD info"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowGreetingTooltip(false);
    }
  }, [messages, isOpen]);

  const generateBotResponse = (userText: string) => {
    const text = userText.toLowerCase();

    if (text.includes('muscle') || text.includes('gain') || text.includes('protein') || text.includes('bulk') || text.includes('mass')) {
      const recs = products.filter(p => p.id === 3 || p.id === 5 || p.id === 1);
      return {
        text: "For **Muscle Growth & Strength**, we recommend stacking **Whey Protein** (fast absorption + digestive enzymes) with **Micronized Creatine** (ATP replenishment) or **Mass Gainer** for bulking phases!",
        recommendedProducts: recs
      };
    }

    if (text.includes('fat') || text.includes('burn') || text.includes('shred') || text.includes('weight loss') || text.includes('cut')) {
      const recs = products.filter(p => p.id === 9 || p.id === 4);
      return {
        text: "For **Fat Loss & Metabolic Acceleration**, our flagship formulation is **Shred Factor** (L-Carnitine, CLA, Thermogenic Green Coffee). Pair it with **EAA + BCAA** to preserve lean muscle while in a caloric deficit!",
        recommendedProducts: recs
      };
    }

    if (text.includes('sleep') || text.includes('recovery') || text.includes('sore') || text.includes('rest') || text.includes('cramp')) {
      const recs = products.filter(p => p.id === 7 || p.id === 4 || p.id === 6);
      return {
        text: "For **Deep Restorative Sleep & Recovery**, **ZMA Nighttime Formula** (Magnesium Bisglycinate, L-Theanine & Tart Cherry) delivers 30% deeper sleep cycles. **L-Glutamine** and **EAA+BCAA** will also stop muscle soreness!",
        recommendedProducts: recs
      };
    }

    if (text.includes('energy') || text.includes('pre-workout') || text.includes('pump') || text.includes('focus') || text.includes('workout')) {
      const recs = products.filter(p => p.id === 2 || p.id === 4);
      return {
        text: "For **Explosive Energy & Massive Muscle Pumps**, our **Pre-Workout** delivers 3000mg Citrulline Malate, 1500mg Beta-Alanine, Alpha-GPC, and Caffeine with zero itchiness or crashes!",
        recommendedProducts: recs
      };
    }

    if (text.includes('wellness') || text.includes('liver') || text.includes('detox') || text.includes('health') || text.includes('vitamin')) {
      const recs = products.filter(p => p.id === 8 || p.id === 10);
      return {
        text: "For **General Wellness & Vitality**, check out **Liver Cleanse** (Milk Thistle Silymarin & herbal detox) and **Multivitamin for Men** (complete daily micronutrient & testosterone support)!",
        recommendedProducts: recs
      };
    }

    if (text.includes('shipping') || text.includes('delivery') || text.includes('cod') || text.includes('order') || text.includes('payment')) {
      return {
        text: "🚚 **Shipping & Order Information**:\n• **Worldwide Shipping Available** with dispatch in 24 hours.\n• **Payment Methods**: Razorpay (UPI, Google Pay, Credit/Debit Cards, NetBanking) and **Cash on Delivery (COD)**.\n• Delivered directly from our Pune headquarters (VMS Multiventures Healthcare Pvt. Ltd.)."
      };
    }

    if (text.includes('price') || text.includes('cost') || text.includes('discount') || text.includes('offer')) {
      return {
        text: "🏷️ **Special Offers**: Enjoy flat introductory discounts across our full range (e.g. Creatine at ₹1,299, Pre-Workout at ₹2,499, Whey at ₹4,999). Subscribe to the **Inno Circle** newsletter at the footer for early VIP promo codes!"
      };
    }

    return {
      text: "Thanks for asking! AuthentIQ formulations are 100% transparent, third-party tested, and clinically dosed for athletes. Would you like a recommendation for **Muscle Growth**, **Fat Loss**, **Explosive Energy**, or **Deep Recovery**?"
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const { text, recommendedProducts } = generateBotResponse(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text,
        recommendedProducts,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-widget-container">
      {/* Floating Greeting Bubble (if closed) */}
      {!isOpen && showGreetingTooltip && (
        <div className="chatbot-greeting-tooltip" onClick={() => setIsOpen(true)}>
          <Sparkles size={14} className="sparkle-icon" />
          <span>Need supplement guidance? Ask AuthentIQ AI!</span>
          <button
            className="tooltip-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowGreetingTooltip(false);
            }}
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          className="chatbot-floating-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open AuthentIQ AI Chatbot"
        >
          <div className="trigger-icon-wrap">
            <Bot size={26} />
            <span className="online-indicator-dot" />
          </div>
        </button>
      )}

      {/* Active Chatbot Modal / Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar-wrap">
                <Bot size={20} />
                <span className="chatbot-online-badge" />
              </div>
              <div>
                <h4 className="chatbot-title">authentiQ AI Coach</h4>
                <span className="chatbot-status">Online • Science-Backed Nutrition</span>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chatbot"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="chatbot-messages-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="chat-msg-avatar">
                    <Bot size={15} />
                  </div>
                )}
                <div className="chat-bubble-container">
                  <div className={`chat-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                    <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>

                    {/* Render Recommended Product Cards inside Chat */}
                    {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
                      <div className="chat-recommended-products">
                        {msg.recommendedProducts.map((p) => (
                          <div key={p.id} className="chat-product-card">
                            <img src={p.image} alt={p.name} className="chat-prod-img" />
                            <div className="chat-prod-info">
                              <div className="chat-prod-name">{p.name}</div>
                              <div className="chat-prod-price">₹{p.price.toLocaleString('en-IN')}</div>
                              <div className="chat-prod-actions">
                                <button
                                  className="chat-add-btn"
                                  onClick={() => addToCart(p)}
                                >
                                  <ShoppingBag size={12} /> Add
                                </button>
                                <button
                                  className="chat-view-btn"
                                  onClick={() => onOpenProductModal(p.id)}
                                >
                                  Science <ArrowRight size={11} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="chat-timestamp">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row bot-row">
                <div className="chat-msg-avatar">
                  <Bot size={15} />
                </div>
                <div className="chat-bubble bot-bubble typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="chatbot-quick-chips">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                className="quick-chip-btn"
                onClick={() => handleSendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="chatbot-input-bar">
            <input
              type="text"
              placeholder="Ask about supplements, fitness goals..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="chatbot-send-btn"
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

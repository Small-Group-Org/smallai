import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import {
  Star, Share2, CheckCircle, ChevronLeft, Lock,
  CreditCard, Loader2, Mail, ArrowRight
} from "lucide-react";

// --- IMPORT DATA ---

import { PRODUCTS, Product } from "@/commons/cards";

// --- COMPONENTS ---

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => (
  <div onClick={onClick} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
    <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{product.title}</h3>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-black text-black" />)}
        <span className="text-gray-500 text-sm ml-1">({product.ratingCount})</span>
      </div>
      <div className="mt-auto">
        <div className="inline-block bg-[] border border-black text-black font-bold px-3 py-1 text-sm rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {product.priceDisplay}
        </div>
      </div>
    </div>
  </div>
);

// --- PRODUCT DETAIL ---
const ProductDetail = ({ product, onBack, onAddToCart }: { product: Product; onBack: () => void; onAddToCart: (p: Product) => void }) => {
  const [customPrice, setCustomPrice] = useState<string>(product.price.toString());

  const handleAddToCartClick = () => {
    const priceValue = parseFloat(customPrice);
    if (isNaN(priceValue)) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (priceValue < product.price) {
      toast.error(`The minimum price for this item is $${product.price}`);
      return;
    }
    const productWithCustomPrice = { ...product, price: priceValue };
    onAddToCart(productWithCustomPrice);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium">
        <ChevronLeft size={20} /> Back to Store
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src={product.image} alt={product.title} className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            {product.details ? (
              <div>{product.details}</div>
            ) : (
              <div>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{product.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="bg-yellow-100 p-1 rounded">💡</span> What This Workflow Does
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={18} className="mt-1 text-gray-400 shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Name a fair price:</label>
              <div className="flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">$</span>
                <input type="number" min={product.price} step="0.01" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} placeholder={`${product.price}+`} className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-md border border-gray-300 focus:ring-black focus:border-black sm:text-lg" />
              </div>
            </div>
            <button onClick={handleAddToCartClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-sm hover:shadow transition-all mb-4 border border-black/5">
              Add to cart
            </button>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6 px-1">
              <span>Size: {product.fileSize}</span>
              <button className="flex items-center gap-1 hover:text-black"><Share2 size={16} /> Share</button>
            </div>
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Ratings</span>
                <div className="flex text-yellow-500">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              </div>
              <p className="text-sm text-gray-500 text-right">{product.ratingCount} ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUCCESS PAGE ---
const SuccessPage = ({ email, onHome }: { email: string; onHome: () => void }) => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
    <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="text-green-600 w-12 h-12" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Payment Successful!</h1>
      <p className="text-gray-500 text-lg">Thank you for your purchase. Your order is confirmed.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <Mail className="text-blue-600 w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Check your inbox</h3>
          <p className="text-sm text-gray-600 mt-1">
            We have sent a receipt and your download links to <span className="font-bold text-gray-900">{email || "your email"}</span>.
          </p>
        </div>
      </div>
      <div className="space-y-3 pt-6">
        <button onClick={onHome} className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          Back to Store <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
);

// --- CHECKOUT COMPONENT ---
const Checkout = ({ cart, onBack, onRemove, onPay }: { cart: Product[]; onBack: () => void; onRemove: (id: number) => void; onPay: (email: string) => void }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    } else if (name === "cardNumber") {
      const clean = value.replace(/\D/g, "");
      const truncated = clean.slice(0, 16);
      formattedValue = truncated.replace(/(\d{4})(?=\d)/g, "$1 ");
    } else if (name === "expiry") {
      const clean = value.replace(/\D/g, "");
      const truncated = clean.slice(0, 4);
      const nativeEvent = e.nativeEvent as any;
      const isDeleting = nativeEvent.inputType === "deleteContentBackward" || nativeEvent.inputType === "deleteContentForward";

      if (truncated.length >= 2 && !isDeleting) {
        formattedValue = truncated.slice(0, 2) + "/" + truncated.slice(2);
      } else {
        if (truncated.length > 2) {
          formattedValue = truncated.slice(0, 2) + "/" + truncated.slice(2);
        } else {
          formattedValue = truncated;
        }
      }
    } else if (name === "cvv") {
      const clean = value.replace(/\D/g, "");
      formattedValue = clean.slice(0, 4);
    }
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handlePay = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    if (!formData.email || !formData.name || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      toast.error("Please fill in all required fields to proceed.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (formData.name.trim().length === 0) {
      toast.error("Name is required.");
      return;
    }
    const cleanCardNum = formData.cardNumber.replace(/\s/g, "");
    if (!/^\d{16}$/.test(cleanCardNum)) {
      toast.error("Card number must be exactly 16 digits.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      toast.error("Expiry date must be in MM/YY format.");
      return;
    }
    const [expMonth, expYear] = formData.expiry.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    const numExpYear = parseInt(expYear, 10);
    const numExpMonth = parseInt(expMonth, 10);
    if (numExpMonth < 1 || numExpMonth > 12) {
      toast.error("Invalid month.");
      return;
    }
    if (numExpYear < currentYear || (numExpYear === currentYear && numExpMonth < currentMonth)) {
      toast.error("Card has expired.");
      return;
    }
    if (!/^\d{3,4}$/.test(formData.cvv)) {
      toast.error("CVV must be 3 or 4 digits.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://5jsanjhv.rpcl.app/webhook/emailnotification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          product_titles: cart.map(p => p.title).join(", "),
          order_total: total.toFixed(2)
        })
      });
      if (response.ok) {
        toast.success(`Purchase successful! Sent to ${formData.email}`);
        setLoading(false);
        onPay(formData.email);
      } else {
        toast.success("Purchase successful!");
        setLoading(false);
        onPay(formData.email);
      }
    } catch (e) {
      console.error(e);
      toast.success("Purchase successful!");
      setLoading(false);
      onPay(formData.email);
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-2xl text-gray-900 font-medium">Checkout</h1>
          <button onClick={onBack} className="text-gray-600 hover:text-black text-sm border border-gray-300 px-4 py-2 rounded transition-colors">
            Continue shopping
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cart Items */}
          <div>
            <div className="space-y-4 mb-6">
              {cart.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4 transition-all hover:border-gray-300 shadow-sm">
                  <img src={item.image} alt={item.title} className="w-20 h-14 object-cover rounded bg-gray-100" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-gray-900 font-medium text-sm">{item.title}</h3>
                      <span className="text-gray-900 font-bold">US${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                    <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                      <span>Qty: 1</span>
                      <div className="flex gap-3">
                        <button onClick={() => onRemove(item.id)} className="hover:text-red-500 underline">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {cart.length === 0 && <div className="p-8 text-center text-gray-500 bg-gray-50 rounded border border-gray-200">Your cart is empty.</div>}
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 space-y-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>US${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>GST (18%)</span>
                <span>US${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-900 text-lg font-bold pt-4 border-t border-gray-200 mt-2">
                <span>Total</span>
                <span>US${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6 sticky top-6 shadow-sm">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pay with</label>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Name on card <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Card information <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="text" name="cardNumber" maxLength={19} value={formData.cardNumber} onChange={handleInputChange} placeholder="1234 5678 1234 5678" className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 pl-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                      <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                    <div className="flex gap-2 mt-2">
                      <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="MM / YY" className="w-1/2 bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                      <input type="text" name="cvv" maxLength={4} value={formData.cvv} onChange={handleInputChange} placeholder="CVV" className="w-1/2 bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Country</label>
                <select className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <button
                onClick={handlePay}
                disabled={loading || cart.length === 0}
                className={`w-full font-bold py-4 rounded transition-colors flex items-center justify-center gap-2 mt-4 shadow-md ${loading || cart.length === 0
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                  }`}
              >
                {loading ? (<> <Loader2 className="animate-spin" size={20} /> Processing... </>) : (<> <Lock size={16} /> Pay US${total.toFixed(2)} </>)}
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">Powered by Small Group Payments. Secure SSL Connection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN STORE COMPONENT ---
const Store = () => {
  const [view, setView] = useState<'grid' | 'detail' | 'checkout' | 'success'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [customerEmail, setCustomerEmail] = useState("");

  // History API for Browser Back Button Logic
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setView(event.state.view);
        // FIX: Using productId to fetch from the imported PRODUCTS list
        if (event.state.productId) {
          const found = PRODUCTS.find(p => p.id === event.state.productId);
          setSelectedProduct(found || null);
        }
      } else {
        setView('grid');
        setSelectedProduct(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (newView: 'grid' | 'detail' | 'checkout' | 'success', product?: Product) => {
    // FIX: Storing only productId in history state to prevent crashes
    const state = { view: newView, productId: product ? product.id : null };
    window.history.pushState(state, '', `#${newView}`);
    setView(newView);
    if (product) setSelectedProduct(product);
  };

  const handleProductClick = (product: Product) => {
    navigateTo('detail', product);
  };

  const handleAddToCart = (product: Product) => {
    if (!cart.find(p => p.id === product.id)) {
      setCart([...cart, product]);
    } else {
      setCart(cart.map(p => p.id === product.id ? product : p));
    }
    navigateTo('checkout');
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePaymentSuccess = (email: string) => {
    setCustomerEmail(email);
    setCart([]);
    navigateTo('success');
  };

  const handleBackToStore = () => {
    if (window.history.state && window.history.state.view !== 'grid') {
      window.history.back();
    } else {
      navigateTo('grid');
    }
  };

  if (view === 'checkout') {
    return <Checkout cart={cart} onBack={handleBackToStore} onRemove={handleRemoveFromCart} onPay={handlePaymentSuccess} />;
  }

  if (view === 'success') {
    return <SuccessPage email={customerEmail} onHome={() => navigateTo('grid')} />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {view === 'detail' && selectedProduct ? (
            <ProductDetail product={selectedProduct} onBack={handleBackToStore} onAddToCart={handleAddToCart} />
          ) : (
            <div className="animate-in fade-in duration-500">
              <div className="mb-10 flex justify-between items-end">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Store</h1>
                  <p className="text-gray-500">Premium AI templates and workflows.</p>
                </div>
                {cart.length > 0 && (
                  <button onClick={() => navigateTo('checkout')} className="text-blue-600 font-medium hover:underline">
                    View Cart ({cart.length})
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
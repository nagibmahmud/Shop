// Sample data for products with enhanced details
const products = [
    {
        id: 1,
        name: "Modern Sofa",
        category: "furniture",
        price: 899.99,
        originalPrice: 1099.99,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        description: "Experience ultimate comfort with our Modern Sofa. Featuring premium fabric upholstery, high-density foam cushions, and a solid hardwood frame. Perfect for contemporary living spaces.",
        longDescription: "This stunning modern sofa combines style and comfort in one elegant package. The generously padded seat cushions provide exceptional comfort for long periods of sitting, while the backrest offers optimal lumbar support. The solid hardwood frame ensures durability and longevity, making this sofa a worthwhile investment for your home. The neutral fabric color complements any interior design scheme, from minimalist to eclectic.",
        dimensions: "80\" W x 36\" D x 32\" H",
        weight: "120 lbs",
        material: "Premium fabric upholstery, high-density foam, solid hardwood frame",
        colors: ["Natural Beige", "Charcoal Gray", "Navy Blue"],
        sizes: ["2-Seater", "3-Seater", "L-Shape"],
        rating: 4.8,
        reviewCount: 256,
        sku: "SOF-MOD-001",
        availability: "In Stock",
        shippingTime: "2-3 business days",
        features: ["Easy Assembly", "Stain Resistant", "Pet Friendly", "Eco-Friendly Materials"],
        careInstructions: "Vacuum regularly with upholstery attachment. Spot clean with mild detergent. Professional cleaning recommended annually."
    },
    {
        id: 2,
        name: "LED Floor Lamp",
        category: "lighting",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1517495306984-43d255825e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1517495306984-43d255825e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1513506003013-d5347811d629?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        description: "Energy-efficient LED floor lamp with adjustable brightness and color temperature. Modern design complements any room.",
        longDescription: "Illuminate your space with sophistication using our LED Floor Lamp. This versatile lighting solution features adjustable brightness levels and color temperature settings, allowing you to create the perfect ambiance for any occasion. The sleek, minimalist design seamlessly blends with contemporary decor, while the energy-efficient LED technology reduces electricity costs. The sturdy base ensures stability, and the flexible gooseneck allows precise light direction.",
        dimensions: "65\" H x 12\" W x 12\" D",
        weight: "8.5 lbs",
        material: "Aluminum alloy, ABS plastic, LED module",
        colors: ["Matte Black", "Brushed Silver", "White"],
        sizes: ["Standard"],
        rating: 4.6,
        reviewCount: 189,
        sku: "LMP-LED-002",
        availability: "In Stock",
        shippingTime: "1-2 business days",
        features: ["Dimmable", "Color Temperature Control", "Energy Star Certified", "Touch Control"],
        careInstructions: "Dust with soft, dry cloth. Do not use chemical cleaners. LED module lifespan: 50,000 hours."
    },
    {
        id: 3,
        name: "Ceramic Vase",
        category: "decor",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1581783342308-f792ca11df53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        description: "Handcrafted ceramic decorative vase with unique glaze finish. Perfect for fresh or dried flowers.",
        longDescription: "Add a touch of artisanal elegance to your home with our Handcrafted Ceramic Vase. Each piece is individually crafted by skilled artisans, resulting in unique variations in the glaze that make every vase one-of-a-kind. The timeless silhouette works beautifully with both fresh and dried floral arrangements, or it can stand alone as a sculptural accent. The neutral color palette ensures versatility across various design styles.",
        dimensions: "12\" H x 6\" W x 6\" D",
        weight: "3.2 lbs",
        material: "High-fired stoneware ceramic, food-safe glaze",
        colors: ["Cream White", "Sage Green", "Terracotta"],
        sizes: ["Small (8\")", "Medium (12\")", "Large (16\")"],
        rating: 4.9,
        reviewCount: 342,
        sku: "VSE-CER-003",
        availability: "In Stock",
        shippingTime: "2-3 business days",
        features: ["Handmade", "Waterproof", "Unique Glaze", "Artisan Crafted"],
        careInstructions: "Wipe clean with damp cloth. Not dishwasher safe. Handle with care."
    },
    {
        id: 4,
        name: "Wooden Dining Table",
        category: "furniture",
        price: 599.99,
        originalPrice: 799.99,
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        description: "Solid oak wood dining table with natural grain finish. Seats 6-8 people comfortably.",
        longDescription: "Gather around our beautiful Wooden Dining Table, crafted from sustainably sourced solid oak. The natural wood grain creates a unique pattern on each table, making your piece truly one-of-a-kind. The generous surface comfortably accommodates family dinners and dinner parties alike. The sturdy construction ensures this table will be the centerpiece of your dining room for generations. A protective finish resists scratches and stains while enhancing the wood's natural beauty.",
        dimensions: "72\" L x 36\" W x 30\" H",
        weight: "95 lbs",
        material: "Solid oak wood, natural oil finish",
        colors: ["Natural Oak", "Walnut Stain", "Espresso"],
        sizes: ["6-Seater", "8-Seater", "10-Seater"],
        rating: 4.7,
        reviewCount: 178,
        sku: "TBL-DIN-004",
        availability: "In Stock",
        shippingTime: "3-5 business days",
        features: ["Solid Wood", "Extendable", "Scratch Resistant", "Sustainable"],
        careInstructions: "Dust regularly. Use coasters and placemats. Reapply wood oil annually."
    },
    {
        id: 5,
        name: "Cotton Throw Pillow",
        category: "textiles",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.unsplash.com/photo-1523369833772-0f1715e8304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1523369833772-0f1715e8304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1579656381226-5fc70361b2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1589139261863-55490a588dc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        description: "Soft cotton throw pillow with modern geometric pattern. Includes removable, washable cover.",
        longDescription: "Add comfort and style to any seating area with our Cotton Throw Pillow. The 100% cotton cover features a contemporary geometric pattern that adds visual interest without overwhelming your decor. The hypoallergenic polyester fill provides plush support while maintaining its shape over time. The hidden zipper closure allows for easy removal of the cover for machine washing, making maintenance a breeze.",
        dimensions: "18\" x 18\" x 6\"",
        weight: "1.1 lbs",
        material: "100% cotton cover, polyester fill",
        colors: ["Blue Geometric", "Gray Abstract", "Blush Pink", "Sage Green"],
        sizes: ["16\" x 16\"", "18\" x 18\"", "20\" x 20\""],
        rating: 4.5,
        reviewCount: 421,
        sku: "PIL-COT-005",
        availability: "In Stock",
        shippingTime: "1-2 business days",
        features: ["Machine Washable", "Hypoallergenic", "Hidden Zipper", "Insert Included"],
        careInstructions: "Machine wash cold on gentle cycle. Tumble dry low. Do not bleach."
    },
    {
        id: 6,
        name: "Minimalist Wall Clock",
        category: "decor",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        images: [
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1508057198891-41791b841bc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        ],
        description: "Sleek minimalist wall clock with silent quartz movement. Perfect for modern homes and offices.",
        longDescription: "Keep time in style with our Minimalist Wall Clock. The clean, uncluttered face features simple hour markers for easy reading at a glance. The silent quartz movement ensures peaceful environments in bedrooms, offices, or living spaces. The sleek metal frame adds a touch of sophistication, while the neutral color complements any decor style. Easy to hang with the integrated keyhole mount.",
        dimensions: "14\" diameter x 2\" D",
        weight: "2.4 lbs",
        material: "Aluminum frame, glass face, quartz movement",
        colors: ["Black", "White", "Gold", "Silver"],
        sizes: ["10\"", "14\"", "18\""],
        rating: 4.4,
        reviewCount: 267,
        sku: "CLK-WAL-006",
        availability: "In Stock",
        shippingTime: "1-2 business days",
        features: ["Silent Movement", "Easy to Read", "Battery Operated", "Easy Installation"],
        careInstructions: "Dust with soft, dry cloth. Use AA battery (not included)."
    }
];

// Sample data for interior designs
const designs = [
    {
        id: 1,
        title: "Modern Minimalist",
        image: "https://images.unsplash.com/photo-1618229259454-f07085060a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Clean lines and neutral colors create a peaceful, clutter-free environment.",
        price: 1500
    },
    {
        id: 2,
        title: "Scandinavian Style",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Light, airy spaces with natural materials and cozy textiles.",
        price: 1800
    },
    {
        id: 3,
        title: "Industrial Chic",
        image: "https://images.unsplash.com/photo-1583847268904-4d051945828e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Exposed brick, metal accents, and raw materials for an urban feel.",
        price: 2000
    },
    {
        id: 4,
        title: "Bohemian Retreat",
        image: "https://images.unsplash.com/photo-1582582621959-48d27397dc09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Eclectic mix of patterns, colors, and textures for a cozy vibe.",
        price: 1600
    }
];

// Shopping cart functionality
let cart = [];
let currentProduct = null; // Track currently viewed product

// DOM Elements - with null checks for pages that don't have all elements
const productsGrid = document.getElementById('products-grid');
const designsGrid = document.getElementById('designs-grid');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');
const checkoutBtn = document.getElementById('checkout-btn');
const continueShoppingBtn = document.getElementById('continue-shopping');
const checkoutModal = document.getElementById('checkout-modal');
const successModal = document.getElementById('success-modal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    if (productsGrid) loadProducts();
    if (designsGrid) loadDesigns();
    setupEventListeners();
    updateCartCount();
    initTheme();
});

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.style.backgroundColor = '#16213e';
        document.body.style.color = '#f8f9fa';
        updateThemeIcon('dark');
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// Toggle theme function (called from onclick)
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        // Force dark mode styles
        document.body.style.backgroundColor = '#16213e';
        document.body.style.color = '#f8f9fa';
    } else {
        document.documentElement.removeAttribute('data-theme');
        // Reset to light mode styles
        document.body.style.backgroundColor = '#f8f9fa';
        document.body.style.color = '#2d3436';
    }
    
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Load products into the DOM
function loadProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Calculate savings percentage
        let savingsHtml = '';
        if (product.originalPrice) {
            const savings = ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0);
            savingsHtml = `<div class="product-badge">Save ${savings}%</div>`;
        }
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${savingsHtml}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                    ${product.originalPrice ? `<span>$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn-primary add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn-secondary" onclick="viewProduct(${product.id})">View Details</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// View product details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Store current product
    currentProduct = product;

    // Set main product information
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-price').textContent = '$' + product.price.toFixed(2);
    document.getElementById('detail-description').textContent = product.longDescription || product.description;
    
    // Set SKU and availability
    const skuElement = document.getElementById('detail-sku');
    if (skuElement) skuElement.textContent = product.sku || '';
    
    // Update rating with actual product data
    const ratingContainer = document.querySelector('.product-rating');
    if (ratingContainer && product.rating) {
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        let starsHtml = '';
        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        ratingContainer.innerHTML = `${starsHtml}<span>(${product.rating})</span><span class="review-count">• ${product.reviewCount} Reviews</span>`;
    }

    // Set up image gallery with multiple images
    if (product.images && product.images.length > 0) {
        const thumbnails = document.querySelectorAll('.thumb-btn img');
        const thumbBtns = document.querySelectorAll('.thumb-btn');
        product.images.forEach((img, index) => {
            if (thumbnails[index]) {
                thumbnails[index].src = img;
                thumbBtns[index].style.display = 'block';
            } else {
                // Hide extra thumbnail buttons if product has fewer images
                if (thumbBtns[index]) thumbBtns[index].style.display = 'none';
            }
        });
    }

    // Update price with original price and savings
    const priceContainer = document.querySelector('.product-price-container');
    if (priceContainer) {
        const originalPriceEl = priceContainer.querySelector('.price-original');
        const savingsEl = priceContainer.querySelector('.price-savings');
        if (originalPriceEl && product.originalPrice) {
            originalPriceEl.textContent = '$' + product.originalPrice.toFixed(2);
            originalPriceEl.style.display = 'inline';
        }
        if (savingsEl && product.originalPrice) {
            const savings = ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0);
            savingsEl.textContent = `Save ${savings}%`;
            savingsEl.style.display = 'inline-block';
        }
    }

    // Update color options based on product
    const colorOptionsContainer = document.querySelector('.color-options');
    if (colorOptionsContainer && product.colors && product.colors.length > 0) {
        const colorBtns = colorOptionsContainer.querySelectorAll('.color-btn');
        product.colors.forEach((color, index) => {
            if (colorBtns[index]) {
                colorBtns[index].style.display = 'block';
                const tooltip = colorBtns[index].querySelector('.color-tooltip');
                if (tooltip) tooltip.textContent = color;
            }
        });
        // Hide extra color buttons
        for (let i = product.colors.length; i < colorBtns.length; i++) {
            colorBtns[i].style.display = 'none';
        }
    }

    // Update size options based on product
    const sizeOptionsContainer = document.querySelector('.size-options');
    if (sizeOptionsContainer && product.sizes && product.sizes.length > 0) {
        const sizeBtns = sizeOptionsContainer.querySelectorAll('.size-btn');
        product.sizes.forEach((size, index) => {
            if (sizeBtns[index]) {
                sizeBtns[index].textContent = size;
                sizeBtns[index].style.display = 'block';
            }
        });
        // Hide extra size buttons
        for (let i = product.sizes.length; i < sizeBtns.length; i++) {
            sizeBtns[i].style.display = 'none';
        }
    }

    // Update stock info
    const stockInfo = document.querySelector('.stock-info span');
    if (stockInfo) {
        stockInfo.textContent = `${product.availability || 'In Stock'} • Ships in ${product.shippingTime || '2-3 days'}`;
    }

    // Update product specs
    const specsElements = {
        'detail-dimensions': product.dimensions,
        'detail-material': product.material,
        'detail-colors': `Available in ${product.colors ? product.colors.length : 3} colors`,
        'detail-weight': product.weight ? `Weight: ${product.weight}` : '',
        'detail-sku': product.sku ? `SKU: ${product.sku}` : ''
    };
    
    Object.keys(specsElements).forEach(id => {
        const el = document.getElementById(id);
        if (el && specsElements[id]) {
            if (id === 'detail-dimensions') {
                el.innerHTML = `<i class="fas fa-ruler-combined"></i><span>${specsElements[id]}</span>`;
            } else if (id === 'detail-material') {
                el.innerHTML = `<i class="fas fa-couch"></i><span>${specsElements[id]}</span>`;
            } else if (id === 'detail-colors') {
                el.innerHTML = `<i class="fas fa-palette"></i><span>${specsElements[id]}</span>`;
            } else if (id === 'detail-weight') {
                el.innerHTML = `<i class="fas fa-weight"></i><span>${specsElements[id]}</span>`;
            } else if (id === 'detail-sku') {
                el.innerHTML = `<i class="fas fa-barcode"></i><span>${specsElements[id]}</span>`;
            }
        }
    });

    // Update features badges
    const featuresContainer = document.querySelector('.product-features');
    if (featuresContainer && product.features && product.features.length > 0) {
        const featureIcons = {
            'Easy Assembly': 'fa-tools',
            'Stain Resistant': 'fa-tint',
            'Pet Friendly': 'fa-paw',
            'Eco-Friendly Materials': 'fa-leaf',
            'Dimmable': 'fa-lightbulb',
            'Color Temperature Control': 'fa-sliders-h',
            'Energy Star Certified': 'fa-star',
            'Touch Control': 'fa-hand-pointer',
            'Handmade': 'fa-hands',
            'Waterproof': 'fa-tint',
            'Unique Glaze': 'fa-paint-brush',
            'Artisan Crafted': 'fa-medal',
            'Solid Wood': 'fa-tree',
            'Extendable': 'fa-arrows-alt-h',
            'Scratch Resistant': 'fa-shield-alt',
            'Sustainable': 'fa-recycle',
            'Machine Washable': 'fa-tshirt',
            'Hypoallergenic': 'fa-feather',
            'Hidden Zipper': 'fa-compress-arrows-alt',
            'Insert Included': 'fa-check-circle',
            'Silent Movement': 'fa-volume-mute',
            'Easy to Read': 'fa-eye',
            'Battery Operated': 'fa-battery-full',
            'Easy Installation': 'fa-wrench'
        };
        
        let featuresHtml = '';
        product.features.forEach(feature => {
            const icon = featureIcons[feature] || 'fa-check';
            featuresHtml += `
                <div class="feature-badge">
                    <i class="fas ${icon}"></i>
                    <span>${feature}</span>
                </div>
            `;
        });
        featuresContainer.innerHTML = featuresHtml;
    }

    // Update care instructions
    const careElement = document.getElementById('detail-care');
    if (careElement && product.careInstructions) {
        careElement.innerHTML = `
            <h4><i class="fas fa-sparkles"></i> Care Instructions</h4>
            <p>${product.careInstructions}</p>
        `;
        careElement.style.display = 'block';
    }

    // Set up add to cart button
    const addToCartBtn = document.getElementById('detail-add-to-cart');
    addToCartBtn.onclick = function() {
        const quantity = parseInt(document.getElementById('detail-quantity').value) || 1;
        addToCart(product.id, null, quantity);
    };

    // Show modal
    const modal = document.getElementById('product-detail-modal');
    modal.style.display = 'block';

    // Close button
    document.getElementById('product-detail-close').onclick = function() {
        modal.style.display = 'none';
    };

    // Initialize product options
    initializeProductOptions();
    
    // Load related products and reviews
    loadRelatedProducts(product);
    renderReviews(product.id);
}

// Initialize product options
function initializeProductOptions() {
    // Color selection
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(btn => {
        btn.onclick = function() {
            colorButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        };
    });
    
    // Size selection
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        btn.onclick = function() {
            sizeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        };
    });
}

// Adjust quantity
function adjustQuantity(amount) {
    const input = document.getElementById('detail-quantity');
    let value = parseInt(input.value) || 1;
    value = Math.max(1, Math.min(10, value + amount));
    input.value = value;
}

// Change image in gallery
function changeImage(index) {
    const thumbnails = document.querySelectorAll('.thumb-btn');
    const mainImage = document.getElementById('detail-image');
    
    thumbnails.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    // Change main image if current product has multiple images
    if (currentProduct && currentProduct.images && currentProduct.images[index]) {
        mainImage.src = currentProduct.images[index];
    }
}

// Zoom image functionality
function zoomImage() {
    const mainImage = document.getElementById('detail-image');
    const modal = document.getElementById('product-detail-modal');
    
    // Create zoom overlay
    const zoomOverlay = document.createElement('div');
    zoomOverlay.style.position = 'fixed';
    zoomOverlay.style.top = '0';
    zoomOverlay.style.left = '0';
    zoomOverlay.style.width = '100vw';
    zoomOverlay.style.height = '100vh';
    zoomOverlay.style.background = 'rgba(0,0,0,0.9)';
    zoomOverlay.style.display = 'flex';
    zoomOverlay.style.alignItems = 'center';
    zoomOverlay.style.justifyContent = 'center';
    zoomOverlay.style.zIndex = '9999';
    zoomOverlay.style.cursor = 'zoom-out';
    
    const zoomedImage = document.createElement('img');
    zoomedImage.src = mainImage.src;
    zoomedImage.style.maxWidth = '90vw';
    zoomedImage.style.maxHeight = '90vh';
    zoomedImage.style.objectFit = 'contain';
    
    zoomOverlay.appendChild(zoomedImage);
    document.body.appendChild(zoomOverlay);
    
    zoomOverlay.onclick = function() {
        document.body.removeChild(this);
    };
}

// Add to wishlist
function addToWishlist() {
    showNotification('Added to wishlist!');
}

// Sample reviews data
const productReviews = [
    {
        productId: 1,
        reviews: [
            { id: 1, user: "Sarah M.", rating: 5, date: "2024-02-15", title: "Absolutely love this sofa!", content: "The quality is exceptional and it's so comfortable. Assembly was easier than expected. Highly recommend!", helpful: 45 },
            { id: 2, user: "James K.", rating: 5, date: "2024-01-28", title: "Perfect for our living room", content: "Beautiful design and very sturdy. The fabric feels premium and the color matches perfectly with our decor.", helpful: 32 },
            { id: 3, user: "Emily R.", rating: 4, date: "2024-01-10", title: "Great value for money", content: "Really happy with this purchase. Only minor issue was delivery took a bit longer than expected, but the product itself is fantastic.", helpful: 28 }
        ]
    },
    {
        productId: 2,
        reviews: [
            { id: 1, user: "Michael T.", rating: 5, date: "2024-02-20", title: "Excellent lamp!", content: "The brightness adjustment is perfect for reading. Modern look and very well built.", helpful: 23 },
            { id: 2, user: "Lisa W.", rating: 4, date: "2024-02-05", title: "Stylish and functional", content: "Love the design. The touch controls are responsive. Would give 5 stars but the cord could be longer.", helpful: 18 }
        ]
    },
    {
        productId: 3,
        reviews: [
            { id: 1, user: "Amanda P.", rating: 5, date: "2024-02-18", title: "Beautiful craftsmanship", content: "Each vase is truly unique. The glaze is gorgeous and catches the light beautifully.", helpful: 56 },
            { id: 2, user: "Robert H.", rating: 5, date: "2024-01-25", title: "Perfect gift", content: "Bought this as a housewarming gift and the recipients loved it. Came well packaged.", helpful: 41 }
        ]
    }
];

// Load related products
function loadRelatedProducts(currentProduct) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;
    
    // Filter products from same category, excluding current product
    const relatedProducts = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        relatedContainer.style.display = 'none';
        return;
    }
    
    relatedContainer.style.display = 'block';
    let html = '';
    relatedProducts.forEach(product => {
        html += `
            <div class="related-product-card" onclick="viewProduct(${product.id})">
                <div class="related-product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="related-product-info">
                    <h4>${product.name}</h4>
                    <div class="related-product-price">$${product.price.toFixed(2)}</div>
                    <button class="btn-primary btn-small" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
    });
    relatedContainer.innerHTML = html;
}

// Render reviews for current product
function renderReviews(productId) {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewsCount = document.getElementById('reviews-count');
    
    if (!reviewsContainer) return;
    
    const productReviewData = productReviews.find(pr => pr.productId === productId);
    const product = products.find(p => p.id === productId);
    
    if (!productReviewData || productReviewData.reviews.length === 0) {
        reviewsContainer.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to review this product!</p>';
        if (reviewsCount) reviewsCount.textContent = '0 Reviews';
        return;
    }
    
    if (reviewsCount) reviewsCount.textContent = `${product.reviewCount} Reviews`;
    
    let html = '';
    productReviewData.reviews.forEach(review => {
        let starsHtml = '';
        for (let i = 0; i < review.rating; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        for (let i = review.rating; i < 5; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        
        html += `
            <div class="review-card">
                <div class="review-header">
                    <div class="reviewer-info">
                        <span class="reviewer-name">${review.user}</span>
                        <div class="review-rating">${starsHtml}</div>
                    </div>
                    <span class="review-date">${review.date}</span>
                </div>
                <h5 class="review-title">${review.title}</h5>
                <p class="review-content">${review.content}</p>
                <div class="review-helpful">
                    <i class="far fa-thumbs-up"></i>
                    <span>${review.helpful} people found this helpful</span>
                </div>
            </div>
        `;
    });
    reviewsContainer.innerHTML = html;
}

// Share product
function shareProduct(platform) {
    const product = {
        title: document.getElementById('detail-name').textContent,
        url: window.location.href,
        image: document.getElementById('detail-image').src
    };
    
    switch(platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(product.url)}`);
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.title)}&url=${encodeURIComponent(product.url)}`);
            break;
        case 'pinterest':
            window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(product.url)}&media=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.title)}`);
            break;
        case 'email':
            window.location.href = `mailto:?subject=Check out this product&body=${encodeURIComponent(product.title)}: ${product.url}`;
            break;
    }
}

// Load designs into the DOM
function loadDesigns() {
    if (!designsGrid) return;
    
    designsGrid.innerHTML = '';
    designs.forEach(design => {
        const designCard = document.createElement('div');
        designCard.className = 'design-card';
        designCard.innerHTML = `
            <div class="design-image">
                <img src="${design.image}" alt="${design.title}">
                <div class="design-overlay">
                    <div>
                        <h3 class="design-title">${design.title}</h3>
                        <p class="design-description">${design.description}</p>
                    </div>
                </div>
            </div>
            <div class="design-info">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-description">${design.description}</p>
                <div class="design-price">
                    <span>From $${design.price.toLocaleString()}</span>
                    <button class="btn-primary" onclick="addToCart(${design.id}, 'design')">Add to Cart</button>
                </div>
            </div>
        `;
        designsGrid.appendChild(designCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Product filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });

    // Modal close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Cart icon click
    cartIcon.addEventListener('click', openCart);

    // Continue shopping button
    continueShoppingBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        cartModal.style.display = 'none';
        openCheckout();
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Checkout form submission
    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();
        placeOrder();
    });

    // Success modal OK button
    document.getElementById('success-ok').addEventListener('click', function() {
        successModal.style.display = 'none';
        cart = [];
        updateCartCount();
        updateCartDisplay();
    });
}

// Filter products
function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            const productCategory = card.querySelector('.product-category').textContent;
            if (productCategory === category) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        }
    });
}

// Add item to cart
function addToCart(id, type = 'product', quantity = 1) {
    if (type === 'product') {
        const product = products.find(p => p.id === id);
        if (product) {
            const existingItem = cart.find(item => item.id === id && item.type === 'product');
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    type: 'product'
                });
            }
        }
    } else {
        const design = designs.find(d => d.id === id);
        if (design) {
            const existingItem = cart.find(item => item.id === id && item.type === 'design');
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: design.id,
                    name: design.title,
                    price: design.price,
                    quantity: quantity,
                    type: 'design'
                });
            }
        }
    }
    
    updateCartCount();
    updateCartDisplay();
    showNotification('Item added to cart!');
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Update cart display
function updateCartDisplay() {
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>';
        if (cartTotal) cartTotal.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <span class="cart-item-total">$${itemTotal.toFixed(2)}</span>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.type}')" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    if (cartTotal) cartTotal.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(id, type) {
    const index = cart.findIndex(item => item.id === id && item.type === type);
    if (index > -1) {
        cart.splice(index, 1);
        updateCartCount();
        updateCartDisplay();
    }
}

// Open cart modal
function openCart() {
    updateCartDisplay();
    cartModal.style.display = 'block';
}

// Open checkout modal
function openCheckout() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkout-total').textContent = total.toFixed(2);
    checkoutModal.style.display = 'block';
}

// Place order
function placeOrder() {
    const formData = new FormData(document.getElementById('checkout-form'));
    const orderData = {
        customer: {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('checkout-email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            zipCode: document.getElementById('zip-code').value,
            phone: document.getElementById('phone').value,
            paymentMethod: document.getElementById('payment-method').value
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    // Simulate order processing
    console.log('Order placed:', orderData);
    
    // Close checkout modal and show success
    checkoutModal.style.display = 'none';
    successModal.style.display = 'block';
    
    // Reset form
    document.getElementById('checkout-form').reset();
}

// Show notification with improved styling
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #27ae60, #2ecc71)' : '#e74c3c'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.3s ease;
        min-width: 250px;
    `;
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    notification.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2500);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky navigation with smooth transitions
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});
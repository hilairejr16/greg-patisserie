/* ============================================================
   Greg Patisserie – Internationalization (i18n)
   Languages: English (en), French (fr), Haitian Creole (ht), Spanish (es)
   ============================================================ */

const translations = {
  en: {
    // Navigation
    nav_home:      'Home',
    nav_menu:      'Our Menu',
    nav_order:     'Order Online',
    nav_catering:  'Catering',
    nav_about:     'About',
    nav_contact:   'Contact',
    nav_cart:      'Cart',

    // Hero
    hero_badge:    'Artisan Bakery · Laval, QC',
    hero_title:    'Exceptional <span>Pastries</span> Crafted with Love',
    hero_sub:      'Custom cakes, cupcakes, and cookies for every occasion. Serving the Canadian and Haitian communities with authentic flavors and artisanal quality.',
    hero_cta1:     'Order Now',
    hero_cta2:     'View Menu',
    hero_stat1:    'Happy Clients',
    hero_stat2:    'Recipes',
    hero_stat3:    'Years of Craft',

    // Sections
    featured_label:  'Our Specialties',
    featured_title:  'Handcrafted with Passion',
    featured_sub:    'Each creation is made to order with premium ingredients',

    catering_label:  'Private Events',
    catering_title:  'Traiteur Services',
    catering_sub:    'We bring sweetness to your most special moments',

    promo_label:     'Stay Connected',
    promo_title:     'Get <span>Exclusive Offers</span> & News',
    promo_sub:       'Subscribe to receive promotions, seasonal specials, and new creations directly to your inbox.',
    promo_placeholder: 'Your email address',
    promo_btn:       'Subscribe',
    promo_or:        'Also follow us on',

    testimonials_label: 'Reviews',
    testimonials_title: 'Our Clients Love Us',

    // Products
    cat_cakes:     'Cakes',
    cat_cupcakes:  'Cupcakes',
    cat_cookies:   'Cookies',
    add_cart:      'Add to cart',
    view_details:  'View details',

    // Order form
    order_title:   'Place Your Order',
    order_name:    'Full Name',
    order_email:   'Email',
    order_phone:   'Phone',
    order_product: 'Product',
    order_qty:     'Quantity',
    order_date:    'Pickup / Delivery Date',
    order_type:    'Order Type',
    order_pickup:  'Pickup',
    order_delivery:'Delivery',
    order_address: 'Delivery Address',
    order_notes:   'Special Instructions',
    order_payment: 'Payment Method',
    order_submit:  'Confirm Order',
    order_success: 'Your order has been placed! We will contact you shortly.',

    // Payment
    pay_interac:   'Interac',
    pay_credit:    'Credit Card',
    pay_debit:     'Debit / Chequing',
    pay_paypal:    'PayPal',
    pay_cash:      'Cash on Pickup',

    // Catering events
    ev_birthday:   'Birthday Parties',
    ev_wedding:    'Wedding Receptions',
    ev_baby:       'Baby Showers',
    ev_fiancee:    'Engagement Parties',
    ev_corporate:  'Corporate Events',
    ev_custom:     'Custom Events',

    // Contact
    contact_title: 'Find Us',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_addr:  'Address',
    contact_hours: 'Hours',

    // Footer
    footer_tagline:'Artisan pastries crafted with love in Laval, QC.',
    footer_links:  'Quick Links',
    footer_services: 'Services',
    footer_contact: 'Contact',
    footer_rights: '© 2025 Greg Patisserie. All rights reserved.',
    footer_owner:  'Gregory Olivier, Owner',

    // Misc
    loading:       'Loading…',
    close:         'Close',
    all:           'All',
    starting_at:   'Starting at',
    order_now:     'Order Now',
    learn_more:    'Learn More',
  },

  fr: {
    nav_home:      'Accueil',
    nav_menu:      'Notre Carte',
    nav_order:     'Commander en ligne',
    nav_catering:  'Traiteur',
    nav_about:     'À propos',
    nav_contact:   'Contact',
    nav_cart:      'Panier',

    hero_badge:    'Boulangerie Artisanale · Laval, QC',
    hero_title:    'Des <span>Pâtisseries</span> Exceptionnelles Faites avec Amour',
    hero_sub:      'Gâteaux sur mesure, cupcakes et biscuits pour toutes les occasions. Au service des communautés canadienne et haïtienne avec des saveurs authentiques.',
    hero_cta1:     'Commander',
    hero_cta2:     'Voir la carte',
    hero_stat1:    'Clients Satisfaits',
    hero_stat2:    'Recettes',
    hero_stat3:    'Ans d\'Expertise',

    featured_label:  'Nos Spécialités',
    featured_title:  'Fait à la Main avec Passion',
    featured_sub:    'Chaque création est faite sur commande avec des ingrédients premium',

    catering_label:  'Événements Privés',
    catering_title:  'Services Traiteur',
    catering_sub:    'Nous apportons la douceur à vos moments les plus spéciaux',

    promo_label:     'Restez Connecté',
    promo_title:     'Recevez des <span>Offres Exclusives</span>',
    promo_sub:       'Abonnez-vous pour recevoir des promotions, des spéciaux saisonniers et nos nouvelles créations.',
    promo_placeholder: 'Votre adresse courriel',
    promo_btn:       'S\'abonner',
    promo_or:        'Suivez-nous aussi sur',

    testimonials_label: 'Avis',
    testimonials_title: 'Nos Clients Nous Adorent',

    cat_cakes:     'Gâteaux',
    cat_cupcakes:  'Cupcakes',
    cat_cookies:   'Biscuits',
    add_cart:      'Ajouter au panier',
    view_details:  'Voir les détails',

    order_title:   'Passer une Commande',
    order_name:    'Nom complet',
    order_email:   'Courriel',
    order_phone:   'Téléphone',
    order_product: 'Produit',
    order_qty:     'Quantité',
    order_date:    'Date de Cueillette / Livraison',
    order_type:    'Type de commande',
    order_pickup:  'Cueillette',
    order_delivery:'Livraison',
    order_address: 'Adresse de livraison',
    order_notes:   'Instructions spéciales',
    order_payment: 'Mode de paiement',
    order_submit:  'Confirmer la commande',
    order_success: 'Votre commande est placée! Nous vous contacterons sous peu.',

    pay_interac:   'Virement Interac',
    pay_credit:    'Carte de crédit',
    pay_debit:     'Débit / Chèque',
    pay_paypal:    'PayPal',
    pay_cash:      'Comptant à la cueillette',

    ev_birthday:   'Fêtes d\'Anniversaire',
    ev_wedding:    'Réceptions de Mariage',
    ev_baby:       'Baby Showers',
    ev_fiancee:    'Fiançailles',
    ev_corporate:  'Événements Corporatifs',
    ev_custom:     'Événements Personnalisés',

    contact_title: 'Nous Trouver',
    contact_phone: 'Téléphone',
    contact_email: 'Courriel',
    contact_addr:  'Adresse',
    contact_hours: 'Heures d\'ouverture',

    footer_tagline:'Pâtisseries artisanales faites avec amour à Laval, QC.',
    footer_links:  'Liens Rapides',
    footer_services: 'Services',
    footer_contact: 'Contact',
    footer_rights: '© 2025 Greg Patisserie. Tous droits réservés.',
    footer_owner:  'Gregory Olivier, Propriétaire',

    loading:       'Chargement…',
    close:         'Fermer',
    all:           'Tous',
    starting_at:   'À partir de',
    order_now:     'Commander',
    learn_more:    'En savoir plus',
  },

  ht: {
    nav_home:      'Akèy',
    nav_menu:      'Meni Nou',
    nav_order:     'Kòmande sou entènèt',
    nav_catering:  'Traiteur',
    nav_about:     'Sou nou',
    nav_contact:   'Kontakte nou',
    nav_cart:      'Panye',

    hero_badge:    'Bakri Atizan · Laval, QC',
    hero_title:    '<span>Patissri</span> Ekselan Fèt ak Renmen',
    hero_sub:      'Gato pèsonalize, cupcakes ak biskit pou tout okazyon. Sèvi kominote kanadyen ak ayisyen ak gou otantik.',
    hero_cta1:     'Kòmande Kounye a',
    hero_cta2:     'Wè Meni',
    hero_stat1:    'Kliyan Kontan',
    hero_stat2:    'Resèt',
    hero_stat3:    'Ane Eksperyans',

    featured_label:  'Espesyalite Nou',
    featured_title:  'Fèt a Men ak Pasyon',
    featured_sub:    'Chak krerasyon fèt sou kòmand ak bon pwodui',

    catering_label:  'Evènman Prive',
    catering_title:  'Sèvis Traiteur',
    catering_sub:    'Nou pote dousè nan moman ki pi espesyal ou yo',

    promo_label:     'Rete Konekte',
    promo_title:     'Resevwa <span>Promo Eksklizif</span>',
    promo_sub:       'Enskri pou resevwa promo, espesyal sezon, ak nouvo krerasyon dirèkteman nan bwat imel ou.',
    promo_placeholder: 'Adrès imel ou',
    promo_btn:       'Enskri',
    promo_or:        'Swiv nou tou sou',

    testimonials_label: 'Kòmantè',
    testimonials_title: 'Kliyan Nou Renmen Nou',

    cat_cakes:     'Gato',
    cat_cupcakes:  'Cupcakes',
    cat_cookies:   'Biskit',
    add_cart:      'Mete nan panye',
    view_details:  'Wè detay',

    order_title:   'Pase yon Kòmand',
    order_name:    'Non konplè',
    order_email:   'Imel',
    order_phone:   'Telefòn',
    order_product: 'Pwodui',
    order_qty:     'Kantite',
    order_date:    'Dat Pran / Livrezon',
    order_type:    'Tip kòmand',
    order_pickup:  'Pran sou plas',
    order_delivery:'Livrezon',
    order_address: 'Adrès livrezon',
    order_notes:   'Enstriksyon espesyal',
    order_payment: 'Metòd peman',
    order_submit:  'Konfime Kòmand',
    order_success: 'Kòmand ou a pase! Nou pral kontakte ou byento.',

    pay_interac:   'Interac',
    pay_credit:    'Kat Kredi',
    pay_debit:     'Debi / Chèk',
    pay_paypal:    'PayPal',
    pay_cash:      'Kach sou plas',

    ev_birthday:   'Fèt Anivèsè',
    ev_wedding:    'Resepsyon Maryaj',
    ev_baby:       'Baby Shower',
    ev_fiancee:    'Fiyansay',
    ev_corporate:  'Evènman Antrepriz',
    ev_custom:     'Evènman Pèsonalize',

    contact_title: 'Jwenn Nou',
    contact_phone: 'Telefòn',
    contact_email: 'Imel',
    contact_addr:  'Adrès',
    contact_hours: 'Orè',

    footer_tagline:'Patissri atizan fèt ak renmen Laval, QC.',
    footer_links:  'Lyen Rapid',
    footer_services: 'Sèvis',
    footer_contact: 'Kontakte',
    footer_rights: '© 2025 Greg Patisserie. Tout dwa rezève.',
    footer_owner:  'Gregory Olivier, Propriyetè',

    loading:       'Chajman…',
    close:         'Fèmen',
    all:           'Tout',
    starting_at:   'Kòmanse nan',
    order_now:     'Kòmande',
    learn_more:    'Aprann plis',
  },

  es: {
    nav_home:      'Inicio',
    nav_menu:      'Nuestro Menú',
    nav_order:     'Ordenar en línea',
    nav_catering:  'Catering',
    nav_about:     'Nosotros',
    nav_contact:   'Contacto',
    nav_cart:      'Carrito',

    hero_badge:    'Panadería Artesanal · Laval, QC',
    hero_title:    '<span>Pasteles</span> Excepcionales Hechos con Amor',
    hero_sub:      'Pasteles personalizados, cupcakes y galletas para cada ocasión. Sirviendo a las comunidades canadiense y haitiana.',
    hero_cta1:     'Ordenar Ahora',
    hero_cta2:     'Ver Menú',
    hero_stat1:    'Clientes Felices',
    hero_stat2:    'Recetas',
    hero_stat3:    'Años de Oficio',

    featured_label:  'Nuestras Especialidades',
    featured_title:  'Elaborado a Mano con Pasión',
    featured_sub:    'Cada creación se hace a pedido con ingredientes premium',

    catering_label:  'Eventos Privados',
    catering_title:  'Servicios de Catering',
    catering_sub:    'Llevamos dulzura a sus momentos más especiales',

    promo_label:     'Manténgase Conectado',
    promo_title:     'Reciba <span>Ofertas Exclusivas</span>',
    promo_sub:       'Suscríbase para recibir promociones, especiales de temporada y nuevas creaciones.',
    promo_placeholder: 'Su dirección de correo',
    promo_btn:       'Suscribirse',
    promo_or:        'Síguenos también en',

    testimonials_label: 'Reseñas',
    testimonials_title: 'Nuestros Clientes nos Aman',

    cat_cakes:     'Pasteles',
    cat_cupcakes:  'Cupcakes',
    cat_cookies:   'Galletas',
    add_cart:      'Agregar al carrito',
    view_details:  'Ver detalles',

    order_title:   'Hacer un Pedido',
    order_name:    'Nombre completo',
    order_email:   'Correo electrónico',
    order_phone:   'Teléfono',
    order_product: 'Producto',
    order_qty:     'Cantidad',
    order_date:    'Fecha de Recogida / Entrega',
    order_type:    'Tipo de pedido',
    order_pickup:  'Recoger',
    order_delivery:'Entrega a domicilio',
    order_address: 'Dirección de entrega',
    order_notes:   'Instrucciones especiales',
    order_payment: 'Método de pago',
    order_submit:  'Confirmar Pedido',
    order_success: '¡Su pedido ha sido realizado! Le contactaremos en breve.',

    pay_interac:   'Interac',
    pay_credit:    'Tarjeta de crédito',
    pay_debit:     'Débito / Cheque',
    pay_paypal:    'PayPal',
    pay_cash:      'Efectivo al recoger',

    ev_birthday:   'Fiestas de Cumpleaños',
    ev_wedding:    'Recepciones de Boda',
    ev_baby:       'Baby Showers',
    ev_fiancee:    'Fiestas de Compromiso',
    ev_corporate:  'Eventos Corporativos',
    ev_custom:     'Eventos Personalizados',

    contact_title: 'Encuéntrenos',
    contact_phone: 'Teléfono',
    contact_email: 'Correo',
    contact_addr:  'Dirección',
    contact_hours: 'Horario',

    footer_tagline:'Pasteles artesanales hechos con amor en Laval, QC.',
    footer_links:  'Enlaces Rápidos',
    footer_services: 'Servicios',
    footer_contact: 'Contacto',
    footer_rights: '© 2025 Greg Patisserie. Todos los derechos reservados.',
    footer_owner:  'Gregory Olivier, Propietario',

    loading:       'Cargando…',
    close:         'Cerrar',
    all:           'Todos',
    starting_at:   'Desde',
    order_now:     'Ordenar',
    learn_more:    'Saber más',
  }
};

let currentLang = localStorage.getItem('gp_lang') || 'fr'; // Default: French

function t(key) {
  return translations[currentLang]?.[key] || translations['en']?.[key] || key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('gp_lang', lang);
  applyTranslations();
  updateLangButtons();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, t(key));
    } else {
      el.innerHTML = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangButtons();

  // Lang button click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});

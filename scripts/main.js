const carsData = [
    {
        id: 1,
        name: "Citroen C-ELYSE ",
        price: 25,
        year: 2022,
        image: "https://storage.googleapis.com/fotosautos/automotora/ASC/100/1189492/CITROEN-C-ELYSEE-lbqfes.webp",
        features: ["Manual", "4 puertas", "Diésel"]
    },
    {
        id: 2,
        name: "Dacia sandero",
        price: 25,
        year: 2023,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkYUmuVm_Qa_VFxnIJyai3JI9s3fe_1ZtXA&s",
        features: ["Manual", "4 puertas", "Diesel"]
    },
     {
        id: 3,
        name: "Dacia sandero",
        price: 25,
        year: 2023,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkYUmuVm_Qa_VFxnIJyai3JI9s3fe_1ZtXA&s",
        features: ["Manual", "4 puertas", "Diésel"]


    },
    {
        id: 4,
        name: " Peugeot 208 ",
        price: 30,
        year: 2025,
        image: "https://www.peugeot.ma/content/dam/peugeot/master/b2c/our-range/showroom/208/2023-10-new-208/mobile/208_ALLUREEV_M.jpg?imwidth=768",
        features: ["Manual", "4 puertas", "Diésel"]

        
    },
       {
        id: 5,
        name: " Dacia Stepway  ",
        price: 30,
        year: 2023,
        image: "https://cdn.wheel-size.com/automobile/body/dacia-sandero-stepway-2022-2025-1731390854.5015533.jpg",
        features: ["Manual", "4 puertas", "Diésel"]

        
    },
       {
        id: 6,
        name: " Citroen C3  ",
        price: 25,
        year: 2021,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCX6N5amNtvrhEMnwnezBcttVZFsugV-YljQ&s",
        features: ["Manual", "4puertas", "Diésel"]

        
    },
     {
        id: 7,
        name: " Citroen C3  ",
        price: 25,
        year: 2021,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCX6N5amNtvrhEMnwnezBcttVZFsugV-YljQ&s",
        features: ["Manual", "4puertas", "Diésel"]

        
    },
    {
        id: 8,
        name: "Citroen C-ELYSE ",
        price: 25,
        year: 2021,
        image: "https://www.wandaloo.com/files/Voiture-Neuve/citroen-c-elysee-2012.jpg",
        features: ["Manual", "4 puertas", "Diésel"]
    },
    {
        id: 9,
        name: "Opel Corsa",
        price: 30,
        year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9fruR_iJ57JZmjJLO8dbNlClpswocpz_ZvzlefDSemJvO18N5atxNZ-ifhX5HstclUE&usqp=CAU",
        features: ["Manual", "4 puertas", "Diésel"]
    },
    {
        id: 10,
        name: "Opel Corsa",
        price: 30,
        year: 2023,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7jXuuYvxfN_bcDYp589IBPaiqVXLxo26Aw&s",
        features: ["Manual", "4 puertas", "Diésel"]
    },
    {
        id: 11,
        name: "Accent",
        price: 35,
        year: 2020,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyHXPdNrvYzbnjCGdZJMYcEUOkoIBRgtvcA&s",
        features: ["Automatico", "4 puertas", "Diésel"]
    },
      {
        id: 12,
        name: "Accent",
        price: 35,
        year: 2021,
        image: "https://storage.googleapis.com/fotosautos/automotora/ASC/100/1189492/CITROEN-C-ELYSEE-lbqfes.webp",
        features: ["Automatico", "4 puertas", "Diésel"]
    },
     {
        id: 13,
        name: "Mercedes-Benz A-Class A200d ",
        price: 120,
        year: 2025,
        image: "https://img.autotrader.co.za/36221562/Crop800x600",
        features: ["Automatico", "4 puertas", "Diésel"]
    },
      {
        id: 14,
        name: "Mercedes-Benz A-Class A200d ",
        price: 120,
        year: 2025,
        image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_6ab89569f7594fd08e9356910ed797fb.webp",
        features: ["Automatico", "4 puertas", "Diésel"]
    },
     {
        id: 15,
        name: "Renault Clio V ",
        price: 25,
        year: 2023,
        image: "https://i.ytimg.com/vi/o1HCZ-uGWjw/sddefault.jpg",
        features: ["Manual", "4 puertas", "Diésel"]
    },
    {
        id: 16,
        name: "Renault Clio V ",
        price: 25,
        year: 2024,
        image: "https://s3-eu-west-1.amazonaws.com/staticeu.izmocars.com/toolkit/commonassets/2024/24renault/24renaultcliohevtechnohb5rb/24renaultcliohevtechnohb5rb_animations/colorpix/fr/400x300/renault_24cliohevtechnohb5rb_grisschiste_angular-front.webp",
        features: ["Manual", "4 puertas", "Diésel"]
    },
    


];


const translations = {
    es: {
        "header-title": "Motovalee Car",
        "header-subtitle": "Alquiler de vehículos de lujo",
        "nav-home": "Inicio",
        "nav-catalog": "Catálogo",
        "nav-about": "Sobre Nosotros",
        "nav-contact": "Contacto",
        "hero-title": "Descubre nuestra flota de vehículos",
        "hero-text": "Los mejores coches al mejor precio",
        "hero-button": "Ver catálogo",
        "catalog-title": "Nuestros Vehículos",
        "filter-all": "Todos los precios",
        "filter-0-50": "0 - 50€/día",
        "filter-50-100": "50 - 100€/día",
        "filter-100-200": "100 - 200€/día",
        "filter-200+": "200€+/día",
        "filter-year-all": "Todos los años",
        "filter-year-new": "2020-2023",
        "filter-year-medium": "2015-2019",
        "filter-year-old": "2010-2014",
        "about-title": "Sobre Motovalee Car",
        "about-text": "Motovalee Car es una empresa líder en alquiler de vehículos de lujo con más de 10 años de experiencia en el sector.",
        "contact-title": "Contacto",
        "contact-button": "Enviar",
        "footer-text": "© 2023 Motovalee Car. Todos los derechos reservados.",
        "car-features": "Características",
        "car-price": "Precio por día",
        "car-year": "Año",
        "car-rent": "Alquilar ahora"
    },
    ar: {

    "header-title": "موتوفالي كار",
    "header-subtitle": "تأجير سيارات فاخرة",
    "nav-home": "الرئيسية",
    "nav-catalog": "الكتالوج",
    "nav-about": "معلومات عنا",
    "nav-contact": "اتصل بنا",
    "hero-title": "اكتشف أسطولنا من المركبات",
    "hero-text": "أفضل السيارات بأفضل الأسعار",
    "hero-button": "عرض الكتالوج",
    "catalog-title": "مركباتنا",
    "filter-all": "جميع الأسعار",
    "filter-0-50": "0 - 50 يورو/يوم",
    "filter-50-100": "50 - 100 يورو/يوم",
    "filter-100-200": "100 - 200 يورو/يوم",
    "filter-200+": "200+ يورو/يوم",
    "filter-year-all": "جميع السنوات",
    "filter-year-new": "2020-2023",
    "filter-year-medium": "2015-2019",
    "filter-year-old": "2010-2014",
    "about-title": "عن موتوفالي كار",
    "about-text": "موتوفالي كار هي شركة رائدة في مجال تأجير السيارات الفاخرة مع أكثر من 10 سنوات من الخبرة في هذا القطاع. نقدم مجموعة واسعة من المركبات لتلبية جميع احتياجاتك.",
    "contact-title": "اتصل بنا",
    "contact-button": "إرسال",
    "footer-text": "© 2023 موتوفالي كار. جميع الحقوق محفوظة.",
    "car-features": "المميزات",
    "car-price": "السعر اليومي",
    "car-year": "السنة",
    "car-rent": "احجز الآن",
    "name-placeholder": "الاسم",
    "email-placeholder": "البريد الإلكتروني",
    "message-placeholder": "الرسالة"
  },
    fr: {
        "header-title": "Motovalee Car",
    "header-subtitle": "Location de véhicules de luxe",
    "nav-home": "Accueil",
    "nav-catalog": "Catalogue",
    "nav-about": "À propos",
    "nav-contact": "Contact",
    "hero-title": "Découvrez notre flotte de véhicules",
    "hero-text": "Les meilleures voitures au meilleur prix",
    "hero-button": "Voir le catalogue",
    "catalog-title": "Nos Véhicules",
    "filter-all": "Tous les prix",
    "filter-0-50": "0 - 50€/jour",
    "filter-50-100": "50 - 100€/jour",
    "filter-100-200": "100 - 200€/jour",
    "filter-200+": "200€+/jour",
    "filter-year-all": "Toutes les années",
    "filter-year-new": "2020-2023",
    "filter-year-medium": "2015-2019",
    "filter-year-old": "2010-2014",
    "about-title": "À propos de Motovalee Car",
    "about-text": "Motovalee Car est une entreprise leader dans la location de véhicules de luxe avec plus de 10 ans d'expérience dans le secteur. Nous offrons une large gamme de véhicules pour répondre à tous vos besoins.",
    "contact-title": "Contact",
    "contact-button": "Envoyer",
    "footer-text": "© 2023 Motovalee Car. Tous droits réservés.",
    "car-features": "Caractéristiques",
    "car-price": "Prix par jour",
    "car-year": "Année",
    "car-rent": "Louer maintenant",
    "name-placeholder": "Nom",
    "email-placeholder": "Email",
    "message-placeholder": "Message"
    },
    en: {
 "header-title": "Motovalee Car",
    "header-subtitle": "Luxury Car Rental",
    "nav-home": "Home",
    "nav-catalog": "Catalog",
    "nav-about": "About Us",
    "nav-contact": "Contact",
    "hero-title": "Discover Our Vehicle Fleet",
    "hero-text": "The best cars at the best price",
    "hero-button": "View Catalog",
    "catalog-title": "Our Vehicles",
    "filter-all": "All prices",
    "filter-0-50": "0 - 50€/day",
    "filter-50-100": "50 - 100€/day",
    "filter-100-200": "100 - 200€/day",
    "filter-200+": "200€+/day",
    "filter-year-all": "All years",
    "filter-year-new": "2020-2023",
    "filter-year-medium": "2015-2019",
    "filter-year-old": "2010-2014",
    "about-title": "About Motovalee Car",
    "about-text": "Motovalee Car is a leading luxury car rental company with over 10 years of experience in the sector. We offer a wide range of vehicles to meet all your needs.",
    "contact-title": "Contact",
    "contact-button": "Send",
    "footer-text": "© 2023 Motovalee Car. All rights reserved.",
    "car-features": "Features",
    "car-price": "Price per day",
    "car-year": "Year",
    "car-rent": "Rent Now",
    "name-placeholder": "Name",
    "email-placeholder": "Email",
    "message-placeholder": "Message"    }
};

let currentLanguage = 'es';

// Actualizar textos según idioma
function updateTexts() {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Renderizar coches
function renderCars(filteredCars = null) {
    const carsContainer = document.getElementById('cars-container');
    carsContainer.innerHTML = '';
    
    const carsToRender = filteredCars || carsData;
    
    carsToRender.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'car-card';
        carElement.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" loading="lazy">
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <p><strong>${translations[currentLanguage]['car-price']}:</strong> ${car.price}€/día</p>
                <p><strong>${translations[currentLanguage]['car-year']}:</strong> ${car.year}</p>
                <div class="car-features">
                    <h4>${translations[currentLanguage]['car-features']}</h4>
                    <ul>
                        ${car.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn rent-btn" data-car="${car.name}">${translations[currentLanguage]['car-rent']}</button>
            </div>
        `;
        carsContainer.appendChild(carElement);
    });
    
    // Añadir event listeners a los botones de alquiler
    document.querySelectorAll('.rent-btn').forEach(button => {
        button.addEventListener('click', showRentContact);
    });
}

// Mostrar sección de contacto para alquiler
function showRentContact(e) {
    const carName = e.target.getAttribute('data-car');
    const rentContact = document.getElementById('rent-contact');
    const rentTitle = document.getElementById('rent-contact-title');
    
    rentTitle.textContent = `${translations[currentLanguage]['car-rent']}: ${carName}`;
    rentContact.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Cerrar sección de contacto para alquiler
function closeRentContact() {
    document.getElementById('rent-contact').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Filtros
function setupFilters() {
    const priceFilter = document.getElementById('price-filter');
    const yearFilter = document.getElementById('year-filter');
    
    priceFilter.addEventListener('change', applyFilters);
    yearFilter.addEventListener('change', applyFilters);
}

function applyFilters() {
    const priceFilter = document.getElementById('price-filter').value;
    const yearFilter = document.getElementById('year-filter').value;
    
    let filteredCars = carsData;
    
    // Filtrar por precio
    if (priceFilter !== 'all') {
        if (priceFilter === '200+') {
            filteredCars = filteredCars.filter(car => car.price >= 200);
        } else {
            const [min, max] = priceFilter.split('-').map(Number);
            filteredCars = filteredCars.filter(car => car.price >= min && car.price <= max);
        }
    }
    
    // Filtrar por año
    if (yearFilter !== 'all') {
        if (yearFilter.includes('-')) {
            const [min, max] = yearFilter.split('-').map(Number);
            filteredCars = filteredCars.filter(car => car.year >= min && car.year <= max);
        } else {
            filteredCars = filteredCars.filter(car => car.year == yearFilter);
        }
    }
    
    renderCars(filteredCars);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateTexts();
    renderCars();
    setupFilters();
    
    // Configurar botón para cerrar la sección de contacto
    document.querySelector('.close-contact').addEventListener('click', closeRentContact);
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('rent-contact').addEventListener('click', function(e) {
        if (e.target === this) {
            closeRentContact();
        }
    });
    
    // Configurar envío del formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert(translations[currentLanguage]['contact-success'] || 'Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
        this.reset();
    });
});
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Recursos de traducción
const resources = {
    en: {
        translation: {
            layout: {
                userMenu: {
                    title: "My account",
                    logout: "Logout"
                },
                sidebar: {
                    title: "React Admin",
                    links: {},
                    newBadge: "NEW"
                }
            }
        }
    },
    es: {
        translation: {
            layout: {
                userMenu: {
                    title: "Mi cuenta",
                    logout: "Cerrar sesión"
                },
                sidebar: {
                    title: "React Admin",
                    links: {
                        dashboard: "Tablero",
                        users: "Usuarios",
                        products: "Productos"
                    },
                    newBadge: "NUEVO"
                }
            }
        }
    }
};

// Inicializa i18next
i18n.use(initReactI18next).init({
    resources,
    lng: "es", // Idioma inicial, puede ser dinámico
    fallbackLng: "en", // Idioma de respaldo
    interpolation: {
        escapeValue: false // react ya maneja el escape de datos
    }
});

export default i18n;

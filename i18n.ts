import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          eCommerce: "E-Commerce Dashboard",
          sales: "Sales",
          revenue: "Revenue",
          visitors: "Visitors",
          stock: "Stock",
          revenueOverview: "Revenue Overview",
          lastWeek: "Last Week",
          thisWeek: "This Week",
          salesByCategory: "Sales by Category",
          recentSales: "Recent Sales",
          topProducts: "Top Products",
          search: "Search",
          logout: "Logout",
          logoutConfirm: "Are you sure you want to log out?",

          welcome: "Welcome",
          lastLogin: "Your last login was on 04/05/2022 at 10:24 am",
          debitCard: "Debit Card",
          balance: "Balance",
          creditCard: "Credit Card",
          debt: "Debt",
          primary: "Primary",
          currency: "Currency",
          recentTransactions: "Recent Transactions",
          overview: "Overview",
          lastMonth: "Last Month",
          thisMonth: "This Month",
          addNew: "+ Add New",
          mostCommonPayees: "Most Common Payees",
          monthlyPayments: "Monthly Payments",
          send: "Send",
        },
      },
      hu: {
        translation: {
          eCommerce: "E-Kereskedelmi Kimutatás",
          sales: "Eladások",
          revenue: "Bevétel",
          visitors: "Látogatók",
          stock: "Készlet",
          revenueOverview: "Bevétel összegzés",
          lastWeek: "Múlt héten",
          thisWeek: "E héten",
          salesByCategory: "Eladások kategória szerint",
          recentSales: "Legutóbbi értékesítések",
          topProducts: "Legjobb termékek",
          search: "Keresés",
          logout: "Kijelentkezés",
          logoutConfirm: "Biztosan ki akar jelentkezni?",

          welcome: "Üdv",
          lastLogin: "Az utolsó bejelentkezés időpontja: 2022. 04. 05. 10:24",
          debitCard: "Betéti Kártya",
          balance: "Egyenleg",
          creditCard: "Hitelkártya",
          debt: "Adósság",
          primary: "Elsődleges",
          currency: "Pénznem",
          recentTransactions: "Legutóbbi tranzakciók",
          overview: "Áttekintés",
          lastMonth: "Múlt hónapban",
          thisMonth: "E hónapban",
          addNew: "+ Új hozzáadása",
          mostCommonPayees: "Leggyakoribb kedvezményezettek",
          monthlyPayments: "Havi kifizetések",
          send: "Küldés",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes output
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;

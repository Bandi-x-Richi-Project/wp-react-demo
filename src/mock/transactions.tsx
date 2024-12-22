export const TransactionService = {
  getTransactionsData() {
    return [
      {
        id: "1",
        cardType: "Debit Card",
        amount: "$200.00",
        date: "05/23/2022",
        cardNumber: "**** **** **** 1234",
        description: "Amazon",
        status: "Completed",
        cardLogo:
          "https://apollo.primereact.org/demo/images/banking/airbnb.png",
      },
      {
        id: "2",
        cardType: "Credit Card",
        amount: "$50.00",
        date: "04/12/2022",
        cardNumber: "**** **** **** 5678",
        description: "Amazon",
        status: "Completed",
        cardLogo:
          "https://apollo.primereact.org/demo/images/banking/amazon.png",
      },
      {
        id: "3",
        cardType: "Debit Card",
        amount: "$300.00",
        date: "04/29/2022",
        cardNumber: "**** **** **** 4321",
        description: "Nike Store",
        status: "Pending",
        cardLogo: "https://apollo.primereact.org/demo/images/banking/nike.svg",
      },
      {
        id: "4",
        cardType: "Credit Card",
        amount: "$120.00",
        date: "04/15/2022",
        cardNumber: "**** **** **** 8765",
        description: "Starbucks",
        status: "Completed",
        cardLogo:
          "https://apollo.primereact.org/demo/images/banking/starbucks.svg",
      },
      {
        id: "5",
        cardType: "Debit Card",
        amount: "$400.00",
        date: "04/12/2022",
        cardNumber: "**** **** **** 1357",
        description: "Amazon",
        status: "Declined",
        cardLogo:
          "https://apollo.primereact.org/demo/images/banking/amazon.png",
      },
    ];
  },

  getPayeesData() {
    return [
      {
        name: "Aisha Williams",
        avatar:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      },
      {
        name: "Brad Curry",
        avatar:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      },
      {
        name: "Kevin James",
        avatar:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      },
      {
        name: "Jane Watson",
        avatar:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      },
      {
        name: "Claire Dunphy",
        avatar:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      },
      {
        name: "Sarah McTamish",
        avatar:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      },
    ];
  },

  getMonthlyPaymentsData() {
    return [
      {
        name: "Electric Bill",
        price: 75.6,
        date: "06/04/2022",
        status: "COMPLETED",
      },
      {
        name: "Water Bill",
        price: 45.5,
        date: "07/04/2022",
        status: "COMPLETED",
      },
      {
        name: "Gas Bill",
        price: 45.2,
        date: "12/04/2022",
        status: "PENDING",
      },
      {
        name: "Internet Bill",
        price: 25.9,
        date: "17/04/2022",
        status: "COMPLETED",
      },
      {
        name: "Streaming",
        price: 40.9,
        date: "20/04/2022",
        status: "PENDING",
      },
    ];
  },

  getTransactions() {
    return Promise.resolve(this.getTransactionsData());
  },

  getPayees() {
    return Promise.resolve(this.getPayeesData());
  },

  getMonthlyPayments() {
    return Promise.resolve(this.getMonthlyPaymentsData());
  },
};

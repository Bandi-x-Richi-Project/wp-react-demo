import { useState, useEffect } from "react";
import { DataView } from "primereact/dataview";
import { TransactionService } from "../mock/transactions";
import { Status, Transaction } from "../lib/types";
import { cn } from "../lib/utils";

const statusColorMap: Record<Status, string> = {
  [Status.Declined]: "text-red-500", // Red for Declined
  [Status.Pending]: "text-orange-500", // Orange for Pending
  [Status.Completed]: "text-green-500", // Green for Confirmed
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Fetch transactions and set the state
    TransactionService.getTransactions().then((data) => setTransactions(data));
  }, []);

  const getStatusColor = (status: Status) => {
    return statusColorMap[status] || "text-gray-500";
  };

  // Template for rendering each transaction item
  const itemTemplate = (transaction: Transaction, isLast: boolean) => {
    return (
      <div className="col-12 -my-2" key={transaction.id}>
        <div className="flex flex-row xl:align-items-start py-4 gap-4">
          <div className="h-3rem w-3rem sm:h-3rem sm:w-3rem xl:h-3rem xl:w-3rem overflow-hidden">
            <img
              className="object-contain h-full w-full"
              src={transaction.cardLogo}
              alt={transaction.description}
            />
          </div>

          <div className="flex sm:flex-row justify-between items-center flex-1 gap-4 h-full w-11/12 lg:5/6">
            <div className="flex flex-column items-start justify-center gap-1 h-full">
              <div className="text-lg font-semibold">
                {transaction.description}
              </div>
              <div className="text-sm text-700">{transaction.date}</div>
            </div>
            <div className="flex flex-column items-end justify-center h-full">
              <span className="text-xl font-bold">{transaction.amount}</span>
              <span
                className={cn("text-sm", getStatusColor(transaction.status))}
              >
                {transaction.status}
              </span>
            </div>
          </div>
        </div>
        {!isLast && (
          <hr className="mb-3 w-full border-top-1 border-none surface-border" />
        )}
      </div>
    );
  };

  // Template for the list of transactions
  const listTemplate = (items: Transaction[]) => {
    if (!items || items.length === 0) return null;

    const list = items.map((transaction, i) => {
      return itemTemplate(transaction, i === items.length - 1);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  return <DataView value={transactions} listTemplate={listTemplate} />;
};

export default TransactionList;

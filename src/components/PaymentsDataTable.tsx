import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { MonthlyPayment } from "../lib/types";
import { TransactionService } from "../mock/transactions";

const PaymentsDataTable = () => {
  const [monthlyPayments, setMonthlyPayments] = useState<MonthlyPayment[]>([]);

  useEffect(() => {
    TransactionService.getMonthlyPayments().then((data) =>
      setMonthlyPayments(data)
    );
  }, []);

  const getSeverity = (value: string) => {
    switch (value) {
      case "COMPLETED":
        return "success";
      case "PENDING":
        return "warning";
      default:
        return null;
    }
  };

  const statusBodyTemplate = (rowData: MonthlyPayment) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };

  const priceBodyTemplate = (rowData: MonthlyPayment) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.price);
  };

  return (
    <DataTable value={monthlyPayments} dataKey="id">
      <Column field="name" header="Name" className="w-1/4" sortable />
      <Column
        field="price"
        header="Price"
        body={priceBodyTemplate}
        className="w-1/4"
        sortable
      />
      <Column field="date" header="Date" className="w-1/4" sortable />
      <Column
        field="status"
        header="Status"
        body={statusBodyTemplate}
        className="w-1/4 text-right"
        sortable
      />
    </DataTable>
  );
};

export default PaymentsDataTable;

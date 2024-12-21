import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

const Banking = () => {
  // Example chart data
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Savings",
        backgroundColor: "#42A5F5",
        data: [65, 59, 80, 81, 56],
      },
      {
        label: "Investments",
        backgroundColor: "#66BB6A",
        data: [28, 48, 40, 19, 86],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  // Example table data
  const transactions = [
    {
      id: 1,
      description: "Salary",
      amount: "+$5000",
      date: "2024-12-20",
      status: "Completed",
    },
    {
      id: 2,
      description: "Groceries",
      amount: "-$200",
      date: "2024-12-19",
      status: "Pending",
    },
    {
      id: 3,
      description: "Car Loan",
      amount: "-$300",
      date: "2024-12-18",
      status: "Completed",
    },
  ];

  const statusTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.status}
        severity={rowData.status === "Completed" ? "success" : "warning"}
      />
    );
  };

  return (
    <div className="grid">
      {/* Overview Cards */}
      <div className="col-12 lg:col-6 xl:col-3">
        <Card title="Total Balance" className="mb-4">
          <h3 className="mb-2">$15,000</h3>
          <ProgressBar value={75} showValue={false} />
        </Card>
      </div>
      <div className="col-12 lg:col-6 xl:col-3">
        <Card title="Savings" className="mb-4">
          <h3 className="mb-2">$8,000</h3>
          <Button
            label="View Details"
            icon="pi pi-search"
            className="p-button-text"
          />
        </Card>
      </div>
      <div className="col-12 lg:col-6 xl:col-3">
        <Card title="Investments" className="mb-4">
          <h3 className="mb-2">$5,000</h3>
          <Button
            label="View Details"
            icon="pi pi-search"
            className="p-button-text"
          />
        </Card>
      </div>
      <div className="col-12 lg:col-6 xl:col-3">
        <Card title="Expenses" className="mb-4">
          <h3 className="mb-2">$2,000</h3>
          <Button
            label="View Details"
            icon="pi pi-search"
            className="p-button-text"
          />
        </Card>
      </div>

      {/* Chart Section */}
      <div className="col-12 xl:col-8">
        <Card title="Savings vs Investments">
          <Chart type="bar" data={chartData} options={chartOptions} />
        </Card>
      </div>

      {/* Transactions Table */}
      <div className="col-12 xl:col-4">
        <Card title="Recent Transactions">
          <DataTable value={transactions} responsiveLayout="scroll">
            <Column field="description" header="Description"></Column>
            <Column field="amount" header="Amount"></Column>
            <Column field="date" header="Date"></Column>
            <Column header="Status" body={statusTemplate}></Column>
          </DataTable>
        </Card>
      </div>
    </div>
  );
};

export default Banking;

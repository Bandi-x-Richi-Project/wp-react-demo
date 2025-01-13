import { Dropdown } from "primereact/dropdown";
import { Avatar } from "primereact/avatar";
import Card from "../../components/Card";
import { RiVisaLine } from "react-icons/ri";
import TransactionList from "../../components/TransactionList";
import DoubleLineChart from "../../components/charts/DoubleLineChart";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import PaymentsDataTable from "../../components/PaymentsDataTable";
import { useEffect, useState } from "react";
import { Payee } from "../../lib/types";
import { TransactionService } from "../../mock/transactions";
import { useTranslation } from "react-i18next";

const Banking = () => {
  const { t } = useTranslation();
  const [payees, setPayess] = useState<Payee[]>([]);

  useEffect(() => {
    TransactionService.getPayees().then((data) => setPayess(data));
  }, []);

  return (
    <div className="grid">
      {/* Header */}
      <div className="col-12 mb-2 flex items-center gap-x-3">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
          size="large"
        />
        <div>
          <h2 className="font-bold text-xl mb-1">{t("welcome")} Isabel</h2>
          <p className="text-sm text-500 font-medium">{t("lastLogin")}</p>
        </div>
      </div>

      {/* Cards */}
      <div className="col-12 md:col-6 xl:col-4">
        <Card className="h-full relative bg-primary text-white rounded-xl overflow-hidden">
          {/* SVG background */}
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="900"
              height="600"
              fill="var(--primary-600)"
            />
            <path
              d="M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
              fill="var(--primary-500)"
            />
          </svg>

          {/* Card Content */}
          <div className="relative z-10">
            <span className="font-bold text-xl">{t("debitCard")}</span>
            <p className="font-medium text-sm mt-3">{t("balance")}</p>
            <h2 className="text-3xl font-bold mt-2">$2,000.00</h2>
            <div className="flex items-center mt-3 justify-between">
              <p className="text-sm">**** **** **** 1412</p>
              <p className="text-sm">12/26</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="col-12 md:col-6 xl:col-4">
        <Card className="text-black h-full">
          <div className="flex items-center justify-between -mt-2">
            <span className="font-bold text-xl">{t("creditCard")}</span>
            <RiVisaLine size={42} className="text-blue-600" />
          </div>
          <p className="font-medium text-sm mt-3">{t("debt")}</p>
          <h2 className="text-3xl font-bold mt-2 text-primary">$1,500.00</h2>
          <div className="flex items-center mt-3 justify-between">
            <p className="text-sm">**** **** **** 1231</p>
            <p className="text-sm">12/24</p>
          </div>
        </Card>
      </div>

      <div className="col-12 md:col-6 xl:col-2">
        <Card className="flex flex-col items-center h-full justify-between">
          <i className="pi pi-dollar text-4xl text-primary"></i>
          <span className="font-bold text-xl">{t("primary")}</span>
          <h2 className="text-3xl font-bold mt-2 text-primary">$24,245.21</h2>
        </Card>
      </div>

      <div className="col-12 md:col-6 xl:col-2">
        <Card className="flex flex-col items-center h-full justify-between">
          <i className="pi pi-euro text-4xl text-primary"></i>
          <span className="font-bold text-xl">{t("currency")}</span>
          <h2 className="text-3xl font-bold mt-2 text-primary">$10,426.11</h2>
        </Card>
      </div>

      {/* Recent Transactions */}
      <div className="col-12 md:col-12 xl:col-4">
        <Card className="w-full">
          <div className="flex flex-column md:flex-row md:align-items-start md:justify-content-between mb-3">
            <div className="text-900 text-xl font-semibold mb-3 md:mb-0">
              {t("recentTransactions")}
            </div>
          </div>
          <div className="w-auto">
            <TransactionList />
          </div>
        </Card>
      </div>

      {/* Overview */}
      <div className="col-12 xl:col-8">
        <Card>
          <div className="flex justify-content-between items-start mb-3">
            <h3 className="text-900 text-xl font-semibold">{t("overview")}</h3>
            <Dropdown
              value={t("lastMonth")}
              options={[t("lastMonth"), t("thisMonth")]}
            />
          </div>
          <div className="p-chart" data-pc-name="chart" data-pc-section="root">
            <DoubleLineChart />
          </div>
        </Card>
      </div>

      {/*  Most Common Payees */}
      <div className="col-12 xl:col-6">
        <Card className="h-full w-full flex flex-col items-center">
          <div className="flex justify-between items-center mb-4 w-full">
            <h3 className="text-lg font-bold">{t("mostCommonPayees")}</h3>
            <Button label={t("addNew")} className="p-button-outlined" />
          </div>
          <div className="grid w-full h-full">
            {payees.map((transaction, index) => (
              <div key={index} className="col-12 md:col-6">
                <Card className="flex items-center p-3 border border-gray-300 cursor-pointer hover:bg-gray-100">
                  <Avatar
                    image={transaction.avatar}
                    size="normal"
                    className="mr-3"
                  />
                  <span className="font-medium">{transaction.name}</span>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex mt-4 w-full gap-3 sm:flex-initial flex-wrap">
            <InputNumber
              value={0}
              inputId="currency-us"
              mode="currency"
              currency="USD"
              locale="en-US"
              className="flex-grow focus:outline-none"
            />
            <Button label={t("send")} className="p-button w-full sm:w-auto" />
          </div>
        </Card>
      </div>

      {/*  Monthly Payments */}
      <div className="col-12 xl:col-6">
        <Card>
          <div className="flex flex-column md:flex-row md:align-items-start md:justify-content-between mb-3">
            <div className="text-900 text-xl font-semibold mb-3 md:mb-0">
              {t("monthlyPayments")}
            </div>
          </div>
          <div data-pc-name="chart" data-pc-section="root">
            <PaymentsDataTable />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Banking;

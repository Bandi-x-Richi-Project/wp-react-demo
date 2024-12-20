import { Dropdown } from "primereact/dropdown";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import ProductDataTable from "../components/ProductDataTable";
import ProductList from "../components/ProductList";

import { useUser } from "../hooks/useUser";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

const Home = () => {
  const { setUser } = useAuthStore();
  const { data: user, isLoading, error } = useUser();

  useEffect(() => {
    setUser(user);
  }, [user, isLoading]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching user data.</p>;

  console.log(user);

  return (
    <div className="grid pb-4">
      <div className="col-12 md:col-6 xl:col-3 mb-0">
        <div className="card">
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">Sales</span>
              <div className="w-full flex flex-col mt-2">
                <span className="text-4xl font-bold text-900">120</span>
                <div className="text-green-500 flex items-center">
                  <span className="font-medium">+12%</span>
                  <i className="pi pi-arrow-up text-xs ml-2"></i>
                </div>
              </div>
            </div>
            <div className="w-6 -my-2">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 md:col-6 xl:col-3">
        <div className="card">
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">Revenue</span>
              <div className="w-full flex flex-col mt-2">
                <span className="text-4xl font-bold text-900">$450</span>
                <div className="text-green-500 flex items-center">
                  <span className="font-medium">+20%</span>
                  <i className="pi pi-arrow-up text-xs ml-2"></i>
                </div>
              </div>
            </div>
            <div className="w-6 -my-2">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 md:col-6 xl:col-3">
        <div className="card">
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">Visitors</span>
              <div className="w-full flex flex-col mt-2">
                <span className="text-4xl font-bold text-900">360</span>
                <div className="text-red-500 flex items-center">
                  <span className="font-medium">-24%</span>
                  <i className="pi pi-arrow-down text-xs ml-2"></i>
                </div>
              </div>
            </div>
            <div className="w-6 -my-2">
              <LineChart color="red" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 md:col-6 xl:col-3">
        <div className="card">
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">Stock</span>
              <div className="w-full flex flex-col mt-2">
                <span className="text-4xl font-bold text-900">164</span>
                <div className="text-green-500 flex items-center">
                  <span className="font-medium">+30%</span>
                  <i className="pi pi-arrow-up text-xs ml-2"></i>
                </div>
              </div>
            </div>
            <div className="w-6 -my-2">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 xl:col-9">
        <div className="card h-auto">
          <div className="flex align-items-start justify-content-between mb-6">
            <span className="text-900 text-xl font-semibold">
              Revenue Overview
            </span>
            <div
              className="w-10rem p-dropdown p-component p-inputwrapper p-inputwrapper-filled"
              data-p-disabled="false"
              data-p-focus="false"
              data-pc-name="dropdown"
              data-pc-section="root"
            >
              <Dropdown
                value={"Last week"}
                // onChange={(e) => set(e.value)}
                options={["Last week", "This week"]}
                optionLabel="name"
                placeholder="Select a City"
                className="w-full md:w-14rem"
              />
            </div>
          </div>
          <div className="p-chart" data-pc-name="chart" data-pc-section="root">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="col-12 xl:col-3">
        <div className="card h-auto">
          <div className="text-900 text-xl font-semibold mb-6">
            Sales by Category
          </div>
          <div className="p-chart flex justify-content-center">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="col-12 lg:col-8">
        <div className="card">
          <div className="flex flex-column md:flex-row md:align-items-start md:justify-content-between mb-3">
            <div className="text-900 text-xl font-semibold mb-3 md:mb-0">
              Recent Sales
            </div>
            <div className="inline-flex align-items-center">
              <IconField
                iconPosition="left"
                className="rounded-full overflow-hidden border "
              >
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText
                  placeholder="Search"
                  className="rounded-full overflow-hidden border"
                />
              </IconField>
              <Button className="ml-3 rounded-full p-3">
                <i className="pi pi-upload"></i>
              </Button>
            </div>
          </div>
          <div className="" data-pc-name="chart" data-pc-section="root">
            <ProductDataTable />
          </div>
        </div>
      </div>
      <div className="col-12 lg:col-4">
        <div className="card w-full">
          <div className="flex flex-column md:flex-row md:align-items-start md:justify-content-between mb-3">
            <div className="text-900 text-xl font-semibold mb-3 md:mb-0">
              Top Products
            </div>
          </div>
          <div className="w-auto">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

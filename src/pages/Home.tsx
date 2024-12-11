import { Dropdown } from "primereact/dropdown";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";

const Home = () => {
  return (
    <div className="grid">
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
          <div
            className="p-chart flex justify-content-center"
            data-pc-name="chart"
            data-pc-section="root"
          >
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

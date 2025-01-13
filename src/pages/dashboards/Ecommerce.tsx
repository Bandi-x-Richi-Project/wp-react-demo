import { Dropdown } from "primereact/dropdown";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/SimpleLineChart";
import PieChart from "../../components/charts/PieChart";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import ProductDataTable from "../../components/ProductDataTable";
import ProductList from "../../components/ProductList";
import Card from "../../components/Card";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  // const { setUser } = useAuthStore();
  // const { data: user, isLoading, error } = useUser();

  // useEffect(() => {
  //   setUser(user);
  // }, [user, isLoading]);

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error fetching user data.</p>;

  // console.log(user);

  return (
    <div className="grid pb-4">
      <div className="col-12 md:col-6 xl:col-3 mb-0">
        <Card>
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">{t("sales")}</span>
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
        </Card>
      </div>
      <div className="col-12 md:col-6 xl:col-3">
        <Card>
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">{t("revenue")}</span>
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
        </Card>
      </div>
      <div className="col-12 md:col-6 xl:col-3">
        <Card>
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">{t("visitors")}</span>
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
        </Card>
      </div>
      <div className="col-12 md:col-6 xl:col-3">
        <Card>
          <div className="flex items-start">
            <div className="w-6 h-full items-start">
              <span className="font-semibold text-lg">{t("stock")}</span>
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
        </Card>
      </div>
      <div className="col-12 xl:col-9">
        <Card className="h-auto">
          <div className="flex justify-content-between align-items-center mb-4">
            <h3 className="text-900 text-xl font-semibold">
              {t("revenueOverview")}
            </h3>
            <Dropdown
              value={t("lastWeek")}
              // onChange={(e) => set(e.value)}
              options={[t("lastWeek"), t("thisWeek")]}
            />
          </div>
          <div className="p-chart" data-pc-name="chart" data-pc-section="root">
            <BarChart />
          </div>
        </Card>
      </div>
      <div className="col-12 xl:col-3">
        <Card className="h-auto">
          <div className="text-900 text-xl font-semibold mb-6">
            {t("salesByCategory")}
          </div>
          <div className="p-chart flex justify-content-center">
            <PieChart />
          </div>
        </Card>
      </div>
      <div className="col-12 lg:col-8">
        <Card>
          <div className="flex flex-column md:flex-row md:align-items-start md:justify-content-between mb-3">
            <div className="text-900 text-xl font-semibold mb-3 md:mb-0">
              {t("recentSales")}
            </div>
            <div className="inline-flex align-items-center">
              <IconField
                iconPosition="left"
                className="rounded-full overflow-hidden"
              >
                <InputIcon className="pi pi-search" />
                <InputText
                  placeholder={t("search")}
                  className="rounded-full overflow-hidden border"
                />
              </IconField>
              <Button className="ml-3 rounded-full p-3 items-center flex">
                <i className="pi pi-upload mr-1"></i>
              </Button>
            </div>
          </div>
          <div data-pc-name="chart" data-pc-section="root">
            <ProductDataTable />
          </div>
        </Card>
      </div>
      <div className="col-12 lg:col-4">
        <Card className="w-full">
          <div className="flex flex-column md:flex-row md:align-items-start md:justify-content-between mb-3">
            <div className="text-900 text-xl font-semibold mb-3 md:mb-0">
              {t("topProducts")}
            </div>
          </div>
          <div className="w-auto">
            <ProductList />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;

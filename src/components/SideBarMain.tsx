/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ripple } from "primereact/ripple";
import { Sidebar } from "primereact/sidebar";
import { StyleClass } from "primereact/styleclass";
import { FC, useRef } from "react";
import { IoCaretBackCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

interface SideBarMainProps {
  visible: boolean;
  onHide: (value: boolean) => void;
}

const SideBarMain: FC<SideBarMainProps> = ({ visible, onHide }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const btnRef1 = useRef<any>(null);

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar
      visible={visible}
      modal={false} // TODO: Mobile mode masking background
      className="h-full lg:fixed top-0 left-0 w-72"
      onHide={() => onHide(false)}
      content={
        (/*{ closeIconRef, hide }*/) => (
          <div
            id="app-sidebar-2"
            className="w-full surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 surface-border select-none"
          >
            <div className="flex flex-column h-full">
              <div
                className="flex align-items-center justify-content-between px-4 pt-3 pb-1 flex-shrink-0 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <span className="inline-flex items-start gap-2">
                  {/* <IoLogoSlack size={32} className="text-primary" /> */}
                  <img
                    src="/web2build-icon.png"
                    alt="web2build logo"
                    className="h-8"
                  />
                  <div className="flex gap-1">
                    <span className="font-semibold text-2xl text-primary">
                      Web2Build
                    </span>
                    <span className="font-semibold text-sm text-primary">
                      Demo
                    </span>
                  </div>
                </span>
                {/* <span>
                <Button
                  type="button"
                  ref={closeIconRef}
                  onClick={(e) => hide(e)}
                  icon={<IoClose />}
                  rounded
                  outlined
                  className="h-2rem w-2rem"
                />
              </span> */}
              </div>
              <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                  <div className="px-3 py-1 flex text-sm">
                    <span className="font-extrabold uppercase text-primary">
                      Dashboards
                    </span>
                  </div>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                      onClick={() => navigate("/")}
                    >
                      <i className="pi pi-home mr-2 text-primary" />
                      <span
                        className={isActive("/") ? "font-bold" : "font-medium"}
                      >
                        E-Commerce
                      </span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                      onClick={() => navigate("/dashboard-banking")}
                    >
                      <i className="pi pi-bookmark mr-2 text-primary" />
                      <span
                        className={
                          isActive("/dashboard-banking")
                            ? "font-bold"
                            : "font-medium"
                        }
                      >
                        Banking
                      </span>
                      <Ripple />
                    </a>
                  </li>
                  <div className="px-3 py-1 flex text-sm">
                    <span className="font-extrabold uppercase text-primary">
                      Apps
                    </span>
                  </div>
                  <li>
                    <ul className="list-none p-0 m-0 overflow-hidden">
                      <li>
                        <StyleClass
                          nodeRef={btnRef1}
                          selector="@next"
                          enterFromClassName="hidden"
                          enterActiveClassName="slidedown"
                          leaveToClassName="hidden"
                          leaveActiveClassName="slideup"
                        >
                          <a
                            ref={btnRef1}
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <i className="pi pi-chart-line mr-2 text-primary" />
                            <span className="font-medium">Blog</span>
                            <i className="pi pi-chevron-down ml-auto mr-1" />
                            <Ripple />
                          </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          <li>
                            <a
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              onClick={() => navigate("/apps/blog/list")}
                            >
                              <i className="pi pi-image mr-2 text-primary" />
                              <span
                                className={
                                  isActive("/apps/blog/list")
                                    ? "font-bold"
                                    : "font-medium"
                                }
                              >
                                List
                              </span>
                              <Ripple />
                            </a>
                          </li>
                          <li>
                            <a
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              onClick={() => navigate("/apps/blog/detail")}
                            >
                              <i className="pi pi-list mr-2 text-primary" />
                              <span
                                className={
                                  isActive("/apps/blog/detail")
                                    ? "font-bold"
                                    : "font-medium"
                                }
                              >
                                Detail
                              </span>
                              <Ripple />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          onClick={() => navigate("/apps/calendar")}
                        >
                          <i className="pi pi-calendar mr-2 text-primary" />
                          <span
                            className={
                              isActive("/apps/calendar")
                                ? "font-bold"
                                : "font-medium"
                            }
                          >
                            Calendar
                          </span>
                          <Ripple />
                        </a>
                      </li>
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          onClick={() => navigate("/apps/chat")}
                        >
                          <i className="pi pi-comments mr-2 text-primary" />
                          <span
                            className={
                              isActive("/apps/chat")
                                ? "font-bold"
                                : "font-medium"
                            }
                          >
                            Chat
                          </span>
                          <span
                            className="inline-flex align-items-center justify-content-center ml-auto bg-primary text-0 border-circle"
                            style={{ minWidth: "1.5rem", height: "1.5rem" }}
                          >
                            3
                          </span>
                          <Ripple />
                        </a>
                      </li>
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          onClick={() => navigate("/apps/files")}
                        >
                          <i className="pi pi-folder mr-2 text-primary" />
                          <span
                            className={
                              isActive("/apps/files")
                                ? "font-bold"
                                : "font-medium"
                            }
                          >
                            Files
                          </span>
                          <Ripple />
                        </a>
                      </li>
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          onClick={() => navigate("/apps/mail")}
                        >
                          <i className="pi pi-envelope mr-2 text-primary" />
                          <span
                            className={
                              isActive("/apps/mail")
                                ? "font-bold"
                                : "font-medium"
                            }
                          >
                            Mail
                          </span>
                          <Ripple />
                        </a>
                      </li>
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          onClick={() => navigate("/apps/tasklist")}
                        >
                          <i className="pi pi-check-square mr-2 text-primary" />
                          <span
                            className={
                              isActive("/apps/tasklist")
                                ? "font-bold"
                                : "font-medium"
                            }
                          >
                            Task List
                          </span>
                          <Ripple />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <hr className="mx-3 border-top-1 border-none surface-border" />
                <a
                  className="py-4 px-3 flex align-items-center cursor-pointer gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  href="https://web2build.hu/"
                >
                  <IoCaretBackCircle size={32} />
                  <span className="font-semibold">Back to Web2Build.hu</span>
                </a>
              </div>
            </div>
          </div>
        )
      }
    />
  );
};

export default SideBarMain;

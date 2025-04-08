import React, { Fragment, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Layouts/Loader/Loader";
import "./index.scss";
import "../src/assets/css/global.css";
import reportWebVitals from "./reportWebVitals";
import Customers from "./components/pages/Customers";
import Enquires from "./components/pages/Enquires";
import CustomerCarts from "./components/pages/CustomerCarts";
import CustomersDealers from "./components/pages/CustomersDealers";
import Dealers from "./components/pages/Dealers";
import DealersByState from "./components/pages/DealersByState";
import AddTrip from "./components/pages/AddTrip";
import AddTimeSheet from "./components/pages/AddTimeSheet";
import AddCustomer from "./components/pages/AddCustomer";
import AddProject from "./components/pages/AddProject";
import LeaveManagement from "./components/pages/LeaveManagement";
import Invoices from "./components/pages/Invoices";
import UpdateCustomer from "./components/pages/UpdateCustomer";
import { CustomerById } from "./components/pages/CustomerById";
import BookingDates from "./components/pages/BookingDates";
import { TripsDetailsById } from "./components/pages/TripsDetailsById";
import { TripsCityDetails } from "./components/pages/TripsCityDetails";
import { DealerById } from "./components/pages/DealerById";
import CustomerPurchases from "./components/pages/CustomerPurchases";
import CustomerTokens from "./components/pages/CustomerTokens";
import PurchasesDealers from "./components/pages/PurchasesDealers";
import PurchasesAdmin from "./components/pages/PurchasesAdmin";
import FeatherIcons from "./components/Icons/FeatherIcons/FeatherIcons";
import Breadcrumbs from "./components/bootstrap/Breadcrumbs/Breadcrumbs";
import PendingLeave from "./components/pages/PendingLeave";
import ApprovedLeave from "./components/pages/ApprovedLeave";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import UserTimeSheets from "./components/pages/UserTimesheets";
import TimeSheetDetails from "./components/pages/TimeSheetDetails";
import InvoiceDetails from "./components/pages/Extension/Invoice/InvoiceDetails";
import Products from "./components/pages/Extension/Products/Products";
import ProjectFinancial from "./components/pages/Extension/Products/ProjectFinancial";
import Tax from "./components/pages/Extension/Products/Tax";
import Contacts from "./components/pages/Extension/Products/Contacts";
import { TaskProvider } from "./context/TaskContext";

// import FullCalendar from "@fullcalendar/react";

// const Auth = lazy(() =>
//   import("./components/Authentication/firebaseAuth/auth")
// );
// const CardsDesign = lazy(() =>
//   import("./components/apps/CardsDesign/CardsDesign")
// );
// const Chat = lazy(() => import("./components/apps/Chat/Chat"));
// const Charts = lazy(() => import("./components/apps/Charts/Charts"));
// const ContentScrollbar = lazy(() =>
//   import("./components/apps/ContentScrollbar/ContentScrollbar")
// );
// const Counters = lazy(() => import("./components/apps/Counters/Counters"));
// const CryptoCurrencies = lazy(() =>
//   import("./components/apps/Cryptocurrencies/Cryptocurrencies")
// );
// const DefaultCalender = lazy(() =>
//   import("./components/apps/DefaultCalender/DefaultCalender")
// );
// const Footers = lazy(() => import("./components/apps/Footers/Footers"));
const FullCalender = lazy(() =>
  import("./components/apps/FullCalender/FullCalender")
);
// const Loaders = lazy(() => import("./components/apps/Loaders/Loaders"));
// const Notifications = lazy(() =>
//   import("./components/apps/Notifications/Notifications")
// );
// const RangeSlider = lazy(() =>
//   import("./components/apps/RangeSlider/RangeSlider")
// );
// const Rating = lazy(() => import("./components/apps/Rating/Rating"));
// const Search = lazy(() => import("./components/apps/Search/Search"));
// const Sweet = lazy(() => import("./components/apps/Sweet/Sweet"));
// const Timeline = lazy(() => import("./components/apps/Timeline/Timeline"));
// const TreeView = lazy(() => import("./components/apps/TreeView/TreeView"));
// const Userlist = lazy(() => import("./components/apps/Userlist/Userlist"));
// const Error401 = lazy(() =>
//   import("./components/Authentication/errorPage/Error401/Error401")
// );
// const Error403 = lazy(() =>
//   import("./components/Authentication/errorPage/Error403/Error403")
// );
// const Error404 = lazy(() =>
//   import("./components/Authentication/errorPage/Error404/Error404")
// );
// const Error503 = lazy(() =>
//   import("./components/Authentication/errorPage/Error503/Error503")
// );
// const ForgotPassword = lazy(() =>
//   import("./components/Authentication/Forgot Password/ForgotPassword")
// );
// const LockScreen = lazy(() =>
//   import("./components/Authentication/LockScreen/LockScreen")
// );
// const Register = lazy(() =>
//   import("./components/Authentication/Register/Register")
// );
// const Accordians = lazy(() =>
//   import("./components/bootstrap/Accordians/Accordians")
// );
// const BootstrapAlerts = lazy(() =>
//   import("./components/bootstrap/bootstrapAlerts/bootstrapAlerts")
// );
// const AvatarRadius = lazy(() =>
//   import("./components/bootstrap/AvatarRadius/AvatarRadius")
// );
// const AvatarSquare = lazy(() =>
//   import("./components/bootstrap/AvatarSquare/AvatarSquare")
// );
// const AvatarRounded = lazy(() =>
//   import("./components/bootstrap/AvatarRounded/AvatarRounded")
// );
const BadgesPills = lazy(() =>
  import("./components/bootstrap/BadgesPills/BadgesPills")
);
// const Breadcrumbs = lazy(() =>
//   import("./components/bootstrap/Breadcrumbs/Breadcrumbs")
// );
// const Buttons = lazy(() => import("./components/bootstrap/Buttons/Buttons"));
// const Carousels = lazy(() =>
//   import("./components/bootstrap/Carousels/Carousels")
// );
// const Colors = lazy(() => import("./components/bootstrap/Colors/Colors"));
// const DropDowns = lazy(() =>
//   import("./components/bootstrap/DropDowns/DropDowns")
// );
// const ListGroups = lazy(() =>
//   import("./components/bootstrap/ListGroup/ListGroups")
// );
// const MediaObject = lazy(() =>
//   import("./components/bootstrap/MediaObject/MediaObject")
// );
// const Modals = lazy(() => import("./components/bootstrap/Modal/Modal"));
// const Navigation = lazy(() =>
//   import("./components/bootstrap/Navigation/Navigation")
// );
// const OffCanvas = lazy(() =>
//   import("./components/bootstrap/OffCanvas/OffCanvas")
// );
// const Pagination = lazy(() =>
//   import("./components/bootstrap/Pagination/Pagination")
// );
// const Panels = lazy(() => import("./components/bootstrap/Panels/Panels"));
// const Progress = lazy(() => import("./components/bootstrap/Progress/Progress"));
const Tabs = lazy(() => import("./components/bootstrap/Tabs/Tabs"));
// const Tags = lazy(() => import("./components/bootstrap/Tags/Tags"));
// const Thumbnails = lazy(() =>
//   import("./components/bootstrap/Thumbnails/Thumbnails")
// );
// const Toast = lazy(() => import("./components/bootstrap/Toast/Toast"));
// const TooltipPopover = lazy(() =>
//   import("./components/bootstrap/TooltipPopover/TooltipPopover")
// );
// const Typography = lazy(() =>
//   import("./components/bootstrap/Typography/Typography")
// );
// const Ribbons = lazy(() => import("./components/bootstrap/Ribbons/Ribbons"));
// const Chartjs = lazy(() => import("./components/Charts/Chart Js/Chartjs"));
// const AddProduct = lazy(() =>
//   import("./components/E-commerce/AddProduct/AddProduct")
// );
// const Checkout = lazy(() =>
//   import("./components/E-commerce/Checkout/Checkout")
// );
// const ProductDetails = lazy(() =>
//   import("./components/E-commerce/ProductDetails/ProductDetails")
// );
// const Shop = lazy(() => import("./components/E-commerce/Shop/Shop"));
// const ShoppingCart = lazy(() =>
//   import("./components/E-commerce/ShoppingCart/ShoppingCart")
// );
// const Wishlist = lazy(() =>
//   import("./components/E-commerce/Wishlist/Wishlist")
// );
// const FileAttachments = lazy(() =>
//   import("./components/FileManager/FileAttachments/FileAttachments")
// );
// const FileDetails = lazy(() =>
//   import("./components/FileManager/FileDetails/FileDetails")
// );
// const FileManager = lazy(() =>
//   import("./components/FileManager/FileManager/FileManager")
// );
// const FileManagerList = lazy(() =>
//   import("./components/FileManager/FileManagerList/FileManagerList")
// );
// const BootstrapIcons = lazy(() =>
//   import("./components/Icons/BootstrapIcons/BootstrapIcons")
// );
// const FeatherIcons = lazy(() =>
//   import("./components/Icons/FeatherIcons/FeatherIcons")
// );
// const FlagIcons = lazy(() => import("./components/Icons/FlagIcons/FlagIcons"));
// const FontAwesome = lazy(() =>
//   import("./components/Icons/FontAwesome/FontAwesome")
// );
// const IonicIcons = lazy(() =>
//   import("./components/Icons/IonicIcons/IonicIcons")
// );
// const MaterialDesignIcons = lazy(() =>
//   import("./components/Icons/MaterialDesignIcons/MaterialDesignIcons")
// );
// const Pe7Icons = lazy(() => import("./components/Icons/Pe7Icons/Pe7Icons"));
// const SimpleLineIcons = lazy(() =>
//   import("./components/Icons/SimpleLineIcons/SimpleLineIcons")
// );
// const ThemifyIcons = lazy(() =>
//   import("./components/Icons/ThemifyIcons/ThemifyIcons")
// );
// const TypiconsIcons = lazy(() =>
//   import("./components/Icons/TypiconsIcons/TypiconsIcons")
// );
// const WeatherIcons = lazy(() =>
//   import("./components/Icons/WeatherIcons/WeatherIcons")
// );
// const LeafletMaps = lazy(() =>
//   import("./components/Maps/LeafletMaps/LeafletMaps")
// );
// const SimpleMaps = lazy(() =>
//   import("./components/Maps/SimpleMaps/SimpleMaps")
// );

const Editprofile = lazy(() =>
  import("./components/pages/Editprofile/Editprofile")
);
const ReportsTimeSheet = lazy(() =>
  import("./components/pages/ReportsTimeSheet")
);
const ReportsTimeSheetProjectWise = lazy(() =>
  import("./components/pages/ReportsTimeSheetProjectWise")
);
const MultiProjectReport = lazy(() =>
  import("./components/pages/MultiProjectReport")
);
const DateRangeReport = lazy(() =>
  import("./components/pages/DateRangeReport")
);
// const AboutCompany = lazy(() =>
//   import("./components/pages/Extension/AboutCompany/AboutCompany")
// );
// const BlogDetails = lazy(() =>
//   import("./components/pages/Extension/BlogDetails/BlogDetails")
// );
// const BlogPost = lazy(() =>
//   import("./components/pages/Extension/BlogPost/BlogPost")
// );
// const Blogs = lazy(() => import("./components/pages/Extension/Blogs/Blogs"));
// const EmptyPage = lazy(() =>
//   import("./components/pages/Extension/EmptyPage/EmptyPage")
// );
const FAQS = lazy(() => import("./components/pages/Extension/FAQS/FAQS"));
const Invoice = lazy(() =>
  import("./components/pages/Extension/Invoice/Invoice")
);
// const Pricing = lazy(() =>
//   import("./components/pages/Extension/Pricing/Pricing")
// );
// const Services = lazy(() =>
//   import("./components/pages/Extension/Services/Services")
// );
// const Settings = lazy(() =>
//   import("./components/pages/Extension/Settings/Settings")
// );
// const Terms = lazy(() => import("./components/pages/Extension/Terms/Terms"));
// const UnderConstruction = lazy(() =>
//   import("./components/pages/Extension/UnderConstruction/UnderConstruction")
// );
const FormAdvanced = lazy(() =>
  import("./components/pages/forms/FormAdvanced/FormAdvanced")
);
// const FormEditor = lazy(() =>
//   import("./components/pages/forms/FormEditor/FormEditor")
// );
// const FormElements = lazy(() =>
//   import("./components/pages/forms/FormElements/FormElements")
// );
// const FormLayouts = lazy(() =>
//   import("./components/pages/forms/FormLayouts/FormLayouts")
// );
// const FormValidation = lazy(() =>
//   import("./components/pages/forms/FormValidation/FormValidation")
// );
// const FormWizard = lazy(() =>
//   import("./components/pages/forms/FormWizard/FormWizard")
// );
// const Gallery = lazy(() => import("./components/pages/Gallery/Gallery"));
// const MailCompose = lazy(() =>
//   import("./components/pages/MailCompose/MailCompose")
// );
// const MailInbox = lazy(() => import("./components/pages/MailInbox/MailInbox"));
// const MailRead = lazy(() => import("./components/pages/MailRead/MailRead"));
// const NotificationList = lazy(() =>
//   import("./components/pages/NotificationList/NotificationList")
// );
const Profile = lazy(() => import("./components/pages/Profile/Profile"));
// const DataTable = lazy(() =>
//   import("./components/pages/tables/DataTable/DataTable")
// );
// const DefaultTable = lazy(() =>
//   import("./components/pages/tables/DefaultTable/DefaultTable")
// );
// const EditTable = lazy(() =>
//   import("./components/pages/tables/EditTable/EditTable")
// );

// const Line = lazy(() => import("./components/Charts/ApexChart/Line/Line"));
// const Area = lazy(() => import("./components/Charts/ApexChart/Area/Area"));
// const Column = lazy(() =>
//   import("./components/Charts/ApexChart/Column/Column")
// );
// const Bar = lazy(() => import("./components/Charts/ApexChart/Bar/Bar"));
// const Mixed = lazy(() => import("./components/Charts/ApexChart/Mixed/Mixed"));
// const CandleStick = lazy(() =>
//   import("./components/Charts/ApexChart/CandleStick/CandleStick")
// );
// const Boxplot = lazy(() =>
//   import("./components/Charts/ApexChart/Boxplot/Boxplot")
// );
// const Treemap = lazy(() =>
//   import("./components/Charts/ApexChart/Treemap/Treemap")
// );
// const Pie = lazy(() => import("./components/Charts/ApexChart/Pie/Pie"));
// const Radialbar = lazy(() =>
//   import("./components/Charts/ApexChart/Radialbar/Radialbar")
// );
// const Radar = lazy(() => import("./components/Charts/ApexChart/Radar/Radar"));
// const Polararea = lazy(() =>
//   import("./components/Charts/ApexChart/Polararea/Polararea")
// );

// const Lines = lazy(() => import("./components/Charts/Echarts/Line/Lines"));
// const Trees = lazy(() => import("./components/Charts/Echarts/Tree/Trees"));
// const Scatters = lazy(() =>
//   import("./components/Charts/Echarts/Scatter/Scatters")
// );
// const Timelines = lazy(() =>
//   import("./components/Charts/ApexChart/Timeline/Timelines")
// );
// const CandleSticks = lazy(() =>
//   import("./components/Charts/Echarts/CandleSticks/CandleSticks")
// );
// const Bars = lazy(() => import("./components/Charts/Echarts/Bars/Bars"));
// const Widgets = lazy(() => import("./components/apps/Widgets/Widgets"));
// const FormInputSpinners = lazy(() =>
//   import("./components/pages/forms/FormInputSpinners/FormInputSpinners")
// );
// const CustomPage = lazy(() => import("./components/CustomPage"));
// const Error400 = lazy(() =>
//   import("./components/Authentication/errorPage/Error400/Error400")
// );

// const Login = lazy(() => import("./components/Authentication/Login/Login"));
// const AuthenticationPage = lazy(() =>
//   import("./components/AuthenticationPage")
// );
// const ErrorPages = lazy(() => import("./components/ErrorPages"));
// const Switcherapp = lazy(() => import("./components/Switcherapp"));
// const Landing = lazy(() => import("./components/Landing"));
// const SignUp = lazy(() =>
//   import("./components/Authentication/firebaseAuth/Signup")
// );
const App = lazy(() => import("./components/app"));

const AuthLogin = lazy(() =>
  import("./components/Authentication/firebaseAuth/AuthLogin")
);
const AuthLoginDealer = lazy(() =>
  import("./components/Authentication/firebaseAuth/AuthLoginDealer")
);
const CustomerLogin = lazy(() =>
  import("./components/Authentication/firebaseAuth/CustomerLogin")
);
const CustomerLoginWithoutDealer = lazy(() =>
  import("./components/Authentication/firebaseAuth/CustomerLoginWithoutDealer")
);
const SearchDealer = lazy(() =>
  import("./components/Authentication/firebaseAuth/SearchDealer")
);
const Error500 = lazy(() =>
  import("./components/Authentication/errorPage/Error500/Error500")
);
const LeaderBoardCustomer = lazy(() =>
  import("./components/pages/LeaderBoardCustomer")
);
const LeaderBoardDealer = lazy(() =>
  import("./components/pages/LeaderBoardDealer")
);
if (false) {
  console.log = () => {};
}

const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const DealerDashboard = lazy(() =>
  import("./components/Dashboard/DealerDashboard")
);
const CustomerDashboard = lazy(() =>
  import("./components/Dashboard/CustomerDashboard")
);
const CustomerUploadInvoice = lazy(() =>
  import("./components/Dashboard/CustomerUploadInvoice")
);
const CustomerReloadInvoice = lazy(() =>
  import("./components/Dashboard/CustomerReloadInvoice")
);
const CustomerThankYouPage = lazy(() =>
  import("./components/Dashboard/CustomerThankYouPage")
);
const PurchaseDetailsById = lazy(() =>
  import("./components/pages/PurchaseDetailsById")
);
const Cities = lazy(() => import("./components/pages/Cities"));
const Projects = lazy(() => import("./components/pages/Projects"));
const TaskDetails = lazy(() => import("./components/pages/TaskDetails"));
const TaskDetailsSubtask = lazy(() =>
  import("./components/pages/taskDetailsSubtask")
);
const TemplateDetailsSubTask = lazy(() =>
  import("./components/pages/TemplateDetailsSubTask")
);
const Blogs = lazy(() => import("./components/pages/Blogs"));
const Jobs = lazy(() => import("./components/pages/Jobs"));
const SectionById = lazy(() => import("./components/pages/SectionById"));
const EnquiresById = lazy(() => import("./components/pages/EnquiresById"));
const Slider_images = lazy(() => import("./components/pages/Slider_images"));
const Sections = lazy(() => import("./components/pages/Sections"));
const Users = lazy(() => import("./components/pages/Users"));
const Tasks = lazy(() => import("./components/pages/Tasks"));
const ProfileSection = lazy(() => import("./components/pages/Profile"));
const Templates = lazy(() => import("./components/pages/Templates"));
const TemplateDetails = lazy(() =>
  import("./components/pages/TemplateDetails")
);
const Testimonials = lazy(() => import("./components/pages/Testimonials"));
const Videos = lazy(() => import("./components/pages/Videos"));
const Coupons = lazy(() => import("./components/pages/Coupons"));
const Trips = lazy(() => import("./components/pages/Trips"));
const Categories = lazy(() => import("./components/pages/Categories"));
const RegisteredCustomers = lazy(() =>
  import("./components/pages/Registered_customers")
);
const TimeSheet = lazy(() => import("./components/pages/TimeSheet"));
const ProjectsData = lazy(() => import("./components/pages/ProjectsData"));
const CustomerProjects = lazy(() =>
  import("./components/pages/CustomerProjects")
);
const Bookings = lazy(() => import("./components/pages/Bookings"));
const BookingsDetails = lazy(() =>
  import("./components/pages/BookingsDetails")
);
const OfflineBookings = lazy(() =>
  import("./components/pages/OfflineBookings")
);
// const TripsDetailsById = lazy(() => import("./components/pages/TripsDetailsById"));
// const LeaderBoardDealer = lazy(() => import("./components/pages/LeaderBoardDealer"));
// const LeaderBoardCustomer = lazy(() => import("./components/pages/LeaderBoardCustomer"));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <TaskProvider>
    <ThemeProvider theme={theme}>
      <Fragment>
        <BrowserRouter>
          <React.Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path={`${process.env.PUBLIC_URL}/`}
                element={<AuthLogin />}
              ></Route>

              <Route
                path={`${process.env.PUBLIC_URL}/login_retailer`}
                element={<AuthLoginDealer />}
              ></Route>
              <Route path={`${process.env.PUBLIC_URL}/`} element={<App />}>
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/cities`}
                  element={<Cities />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Blogs`}
                  element={<Blogs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Jobs`}
                  element={<Jobs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/slider_images`}
                  element={<Slider_images />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/sections`}
                  element={<Sections />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/users`}
                  element={<Users />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Task`}
                  element={<Tasks />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/profile`}
                  element={<ProfileSection />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/leaveManagement`}
                  element={<LeaveManagement />}
                />
                {/* <Route
                  path={`${process.env.PUBLIC_URL}/admin/Quote`}
                  element={<Quoate />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Quotes`}
                  element={<Quotes />}
                /> */}
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Invoice`}
                  element={<Invoice />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/products`}
                  element={<Products />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/ProjectFinancial/`}
                  element={<ProjectFinancial />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Tax`}
                  element={<Tax />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Contacts`}
                  element={<Contacts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/InvoiceDetails/:id`}
                  element={<InvoiceDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Invoices`}
                  element={<Invoices />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/pendingLeave`}
                  element={<PendingLeave />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/approvedLeave`}
                  element={<ApprovedLeave />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Templates`}
                  element={<Templates />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/UserTimesheets/:user_id`}
                  element={<UserTimeSheets />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/TimeSheetDetails/:user_id/:week`}
                  element={<TimeSheetDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/templateDetails/:id`}
                  element={<TemplateDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Bookings`}
                  element={<Bookings />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/BookingsDetails/:id`}
                  element={<BookingsDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/OfflineBookings`}
                  element={<OfflineBookings />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Coupons`}
                  element={<Coupons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Testimonials`}
                  element={<Testimonials />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Registered_customers`}
                  element={<RegisteredCustomers />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/TimeSheet`}
                  element={<TimeSheet />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/ReportsTimeSheet`}
                  element={<ReportsTimeSheet />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/ReportsTimeSheetProjectWise`}
                  element={<ReportsTimeSheetProjectWise />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/MultiProjectReport`}
                  element={<MultiProjectReport />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/DateRangeReport`}
                  element={<DateRangeReport />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/projectsData`}
                  element={<ProjectsData />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/videos`}
                  element={<Videos />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/categories`}
                  element={<Categories />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/trips`}
                  element={<Trips type="NotArchive" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/trips/archive`}
                  element={<Trips type="Archive" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_customers`}
                  element={<Customers />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/my_admin_enquires`}
                  element={<Enquires type="my" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/AddTrip`}
                  element={<AddTrip />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/addTimeSheet`}
                  element={<AddTimeSheet />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/AddCustomer`}
                  element={<AddCustomer />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/UpdateCustomer/:id`}
                  element={<UpdateCustomer />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerProjects/:id`}
                  element={<CustomerProjects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/BookingDates/:tripId/:cityId`}
                  element={<BookingDates />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/customer_carts`}
                  element={<CustomerCarts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_enquires`}
                  element={<Enquires type="all" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/trips/:id`}
                  element={<TripsDetailsById />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/project/:id`}
                  element={<Projects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/taskDetails/:id`}
                  element={<TaskDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/tripsCityDetails/:id`}
                  element={<TripsCityDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard`}
                  element={<Dashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/DealerDashboard`}
                  element={<DealerDashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerDashboard`}
                  element={<CustomerDashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerUploadInvoice`}
                  element={<CustomerUploadInvoice />}
                />

                {/* path={`${process.env.PUBLIC_URL}/admin/cities`}
                  element={<Cities />}
                /> */}
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Blogs`}
                  element={<Blogs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Jobs`}
                  element={<Jobs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/slider_images`}
                  element={<Slider_images />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/sections`}
                  element={<Sections />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/users`}
                  element={<Users />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/leaveManagement`}
                  element={<LeaveManagement />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/pendingLeave`}
                  element={<PendingLeave />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/approvedLeave`}
                  element={<ApprovedLeave />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Templates`}
                  element={<Templates />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/templateDetails/:id`}
                  element={<TemplateDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/TemplateDetailsSubTask/:id/:id2`}
                  element={<TemplateDetailsSubTask />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Bookings`}
                  element={<Bookings />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/BookingsDetails/:id`}
                  element={<BookingsDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/OfflineBookings`}
                  element={<OfflineBookings />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Coupons`}
                  element={<Coupons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Testimonials`}
                  element={<Testimonials />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/Registered_customers`}
                  element={<RegisteredCustomers />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/TimeSheet`}
                  element={<TimeSheet />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/projectsData`}
                  element={<ProjectsData />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/videos`}
                  element={<Videos />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/categories`}
                  element={<Categories />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/trips`}
                  element={<Trips type="NotArchive" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/trips/archive`}
                  element={<Trips type="Archive" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_customers`}
                  element={<Customers />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/my_admin_enquires`}
                  element={<Enquires type="my" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/AddTrip`}
                  element={<AddTrip />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/addTimeSheet`}
                  element={<AddTimeSheet />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/AddCustomer`}
                  element={<AddCustomer />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/UpdateCustomer/:id`}
                  element={<UpdateCustomer />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerProjects/:id`}
                  element={<CustomerProjects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/BookingDates/:tripId/:cityId`}
                  element={<BookingDates />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/customer_carts`}
                  element={<CustomerCarts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_enquires`}
                  element={<Enquires type="all" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/trips/:id`}
                  element={<TripsDetailsById />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/project/:id`}
                  element={<Projects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/taskDetails/:id`}
                  element={<TaskDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin/tripsCityDetails/:id`}
                  element={<TripsCityDetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard`}
                  element={<Dashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/DealerDashboard`}
                  element={<DealerDashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerDashboard`}
                  element={<CustomerDashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerUploadInvoice`}
                  element={<CustomerUploadInvoice />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/LeaderBoardCustomer`}
                  element={<LeaderBoardCustomer />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/LeaderBoardDealer`}
                  element={<LeaderBoardDealer />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_purchases`}
                  element={<PurchasesAdmin />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_purchases_all`}
                  element={<PurchasesAdmin status="all" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_purchases_inprogress`}
                  element={<PurchasesAdmin status="inprogress" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_purchases_reupload`}
                  element={<PurchasesAdmin status="re-upload" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_purchases_updated`}
                  element={<PurchasesAdmin status="updated" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_purchases_rejected`}
                  element={<PurchasesAdmin status="rejected" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_purchases_verified`}
                  element={<PurchasesAdmin status="verified" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/dealer_customers`}
                  element={<CustomersDealers />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/dealer_purchases`}
                  element={<PurchasesDealers />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_dealers`}
                  element={<Dealers isactive={true} />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_dealers_inactive`}
                  element={<Dealers isactive={false} />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_dealers_by_state`}
                  element={<DealersByState />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_customers_by_id`}
                  element={<CustomerById />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_customers_by_id/:id`}
                  element={<CustomerById />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_section_details/:id`}
                  element={<SectionById />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_enquiry_details/:id`}
                  element={<EnquiresById />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/PurchaseDetailsById/:id`}
                  element={<PurchaseDetailsById />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/customer_purchases/:id`}
                  element={<CustomerPurchases type="all" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerReloadInvoiceNew/:id`}
                  element={<CustomerPurchases type="re-upload" />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/customer_tokens/:id`}
                  element={<CustomerTokens />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/CustomerThankYouPage/:id`}
                  element={<CustomerThankYouPage />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/admin_dealer_by_id/:id`}
                  element={<DealerById />}
                />
              </Route>
              {/* <Route path="*" element={<Invoice />} /> */}
              <Route path="search_dealer" element={<SearchDealer />}></Route>
              <Route
                path="dealer/:id"
                element={<CustomerLogin type="normal" />}
              ></Route>
              <Route
                path="reupload/:id"
                element={<CustomerLogin type="reupload" />}
              ></Route>
              <Route
                path="login_customer"
                element={<CustomerLoginWithoutDealer />}
              ></Route>
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  </TaskProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

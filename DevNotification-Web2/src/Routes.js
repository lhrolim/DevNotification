import React from 'react'
import {Switch, Route} from 'react-router'

//layouts
import DefaultSidebar1 from './layouts/DefaultSidebar1'
import CollapsedSidebar1 from './layouts/CollapsedSidebar1'
import TopNavigation1 from './layouts/TopNavigation1'

//charts
import Chartist from './charts/chartist'
import Recharts from './charts/recharts'

//demos
import Demo1 from './demos/Demo1'
import Demo2 from './demos/Demo2'
import Demo3 from './demos/Demo3'
import Demo4 from './demos/Demo4'
import Demo5 from './demos/Demo5'
import Demo6 from './demos/Demo6'

//dashboards
import Analytics from './dashboards/analytics'
import Geographic from './dashboards/geographic'
import ECommerce from './dashboards/e-commerce'

//documentation
import Installation from './documentation/installation'
import CodeStructure from './documentation/code-structure'
import Faq from './documentation/faq'
import Changelog from './documentation/changelog'
import Credits from './documentation/credits'

//forms
import DefaultForms from './forms/default-forms'
import InputGroups from './forms/input-groups'
import Validation from './forms/validation'
import Sliders from './forms/sliders'
import ReactDatetime from './forms/react-datetime'
import ReactSelect from './forms/react-select'

//icons
import Flags from './icons/flags'
import FontAwesome from './icons/font-awesome'
import Ionicons from './icons/ionicons'
import MaterialDesignIcons from './icons/material-design-icons'
import SimpleLineIcons from './icons/simple-line-icons'
import WeatherIcons from './icons/weather-icons'

//maps
import GoogleMaps from './maps/google-maps'
import VectorMaps from './maps/vector-maps'

//pages
import Home from './pages/home'
import ContactUs from './pages/contact-us'
import EmptyPage from './pages/empty-page'
import CreateAccount from './pages/create-account'
import ErrorPage from './pages/error-page'
import Login from './pages/login'
import ResetPassword from './pages/reset-password'
import Subscribe from './pages/subscribe'
import UnderMaintenance from './pages/under-maintenance'
import UnlockAccount from './pages/unlock-account'

//tables
import DefaultTables from './tables/default-tables'
import Reactable from './tables/reactable'

//ui-elements
import Badges from './ui-elements/badges'
import Breadcrumbs from './ui-elements/breadcrumbs'
import Buttons from './ui-elements/buttons'
import Images from './ui-elements/images'
import Lists from './ui-elements/lists'
import Pagination from './ui-elements/pagination'
import ProgressBars from './ui-elements/progress-bars'
import SocialMediaButtons from './ui-elements/social-media-buttons'
import Tabs from './ui-elements/tabs'
import Typography from './ui-elements/typography'
import Tooltips from './ui-elements/tooltips'

//notifications
import Alerts from './ui-elements/alerts'
import Modals from './ui-elements/modals'
import Reapop from './notifications/reapop'

//widgets
import ActivityWidgets from './widgets/activity-widgets'
import AreaChartWidgets from './widgets/area-chart-widgets'
import BarChartWidgets from './widgets/bar-chart-widgets'
import DonutChartWidgets from './widgets/donut-chart-widgets'
import IconWidgets from './widgets/icon-widgets'
import LineChartWidgets from './widgets/line-chart-widgets'
import PieChartWidgets from './widgets/pie-chart-widgets'
import TableWidgets from './widgets/table-widgets'
import TextWidgets from './widgets/text-widgets'
import TimelineWidgets from './widgets/timeline-widgets'
import UserWidgets from './widgets/user-widgets'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/charts/chartist" component={Chartist} />
    <Route path="/charts/recharts" component={Recharts} />
    <Route path="/dashboards/analytics" component={Analytics} />
    <Route path="/dashboards/geographic" component={Geographic} />
    <Route path="/dashboards/e-commerce" component={ECommerce} />
    <Route path="/demos/demo-1" component={Demo1} />
    <Route path="/demos/demo-2" component={Demo2} />
    <Route path="/demos/demo-3" component={Demo3} />
    <Route path="/demos/demo-4" component={Demo4} />
    <Route path="/demos/demo-5" component={Demo5} />
    <Route path="/demos/demo-6" component={Demo6} />
    <Route path="/documentation/change-log" component={Changelog} />
    <Route path="/documentation/code-structure" component={CodeStructure} />
    <Route path="/documentation/credits" component={Credits} />
    <Route path="/documentation/faq" component={Faq} />
    <Route path="/documentation/installation" component={Installation} />
    <Route path="/forms/default-forms" component={DefaultForms} />
    <Route path="/forms/input-groups" component={InputGroups} />
    <Route path="/forms/react-datetime" component={ReactDatetime} />
    <Route path="/forms/react-select" component={ReactSelect} />
    <Route path="/forms/sliders" component={Sliders} />
    <Route path="/forms/validation" component={Validation} />
    <Route path="/icons/flags" component={Flags} />
    <Route path="/icons/font-awesome" component={FontAwesome} />
    <Route path="/icons/ionicons" component={Ionicons} />
    <Route
      path="/icons/material-design-icons"
      component={MaterialDesignIcons}
    />
    <Route path="/icons/simple-line-icons" component={SimpleLineIcons} />
    <Route path="/icons/weather-icons" component={WeatherIcons} />
    <Route path="/layouts/collapsed-sidebar-1" component={CollapsedSidebar1} />
    <Route path="/layouts/default-sidebar-1" component={DefaultSidebar1} />
    <Route path="/layouts/top-navigation-1" component={TopNavigation1} />
    <Route path="/maps/google-maps" component={GoogleMaps} />
    <Route path="/maps/vector-maps" component={VectorMaps} />
    <Route path="/notifications/reapop" component={Reapop} />
    <Route path="/pages/contact-us" component={ContactUs} />
    <Route path="/pages/create-account" component={CreateAccount} />
    <Route path="/pages/empty-page" component={EmptyPage} />
    <Route path="/pages/error-page" component={ErrorPage} />
    <Route path="/pages/home" component={Home} />
    <Route path="/pages/login" component={Login} />
    <Route path="/pages/reset-password" component={ResetPassword} />
    <Route path="/pages/subscribe" component={Subscribe} />
    <Route path="/pages/under-maintenance" component={UnderMaintenance} />
    <Route path="/pages/unlock-account" component={UnlockAccount} />
    <Route path="/tables/default-tables" component={DefaultTables} />
    <Route path="/tables/reactable" component={Reactable} />
    <Route path="/ui-elements/alerts" component={Alerts} />
    <Route path="/ui-elements/badges" component={Badges} />
    <Route path="/ui-elements/breadcrumbs" component={Breadcrumbs} />
    <Route path="/ui-elements/buttons" component={Buttons} />
    <Route path="/ui-elements/images" component={Images} />
    <Route path="/ui-elements/lists" component={Lists} />
    <Route path="/ui-elements/modals" component={Modals} />
    <Route path="/ui-elements/pagination" component={Pagination} />
    <Route path="/ui-elements/progress-bars" component={ProgressBars} />
    <Route
      path="/ui-elements/social-media-buttons"
      component={SocialMediaButtons}
    />
    <Route path="/ui-elements/tabs" component={Tabs} />
    <Route path="/ui-elements/tooltips" component={Tooltips} />
    <Route path="/ui-elements/typography" component={Typography} />
    <Route path="/widgets/activity-widgets" component={ActivityWidgets} />
    <Route path="/widgets/area-chart-widgets" component={AreaChartWidgets} />
    <Route path="/widgets/bar-chart-widgets" component={BarChartWidgets} />
    <Route path="/widgets/donut-chart-widgets" component={DonutChartWidgets} />
    <Route path="/widgets/icon-widgets" component={IconWidgets} />
    <Route path="/widgets/line-chart-widgets" component={LineChartWidgets} />
    <Route path="/widgets/pie-chart-widgets" component={PieChartWidgets} />
    <Route path="/widgets/table-widgets" component={TableWidgets} />
    <Route path="/widgets/text-widgets" component={TextWidgets} />
    <Route path="/widgets/timeline-widgets" component={TimelineWidgets} />
    <Route path="/widgets/user-widgets" component={UserWidgets} />
    <Route component={EmptyPage} />
  </Switch>
)

export default Routes

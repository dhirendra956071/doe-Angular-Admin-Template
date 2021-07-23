import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'bx bx-home', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/e-commerce', title: 'e-Commerce', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/analytics', title: 'Analytics', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Components', icon: 'bx bx-spa icon-color-10', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/components/alerts', title: 'Alerts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/badge', title: 'Badge', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/buttons', title: 'Buttons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/cards', title: 'Cards', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/carousel', title: 'Carousel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/acordians', title: 'Accordion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/list-groups', title: 'List Groups', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/media-objects', title: 'Media Objects', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/modals', title: 'Modals', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navs', title: 'Navs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navbar', title: 'Navbar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/pagination', title: 'Pagination', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/progress-bar', title: 'Progress Bars', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/spinners', title: 'Spinners', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/avtars-chips', title: 'Avatrs & Chips', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/basic-table', title: 'Basic Table', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'ng-Components', icon: 'bx bx-layer icon-color-6', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/ng-components/accordion', title: 'Accordion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/alert', title: 'Alert', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/buttons', title: 'Buttons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/carousel', title: 'Carousel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/collapse', title: 'Collapse', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/datepicker', title: 'Datepicker', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/dropdown', title: 'Dropdown', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/modal', title: 'Modal', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/nav', title: 'Nav', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/pagination', title: 'Pagination', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/popovers', title: 'Popovers', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/progress-bar', title: 'Progressbar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/table', title: 'Table', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/timepicker', title: 'Timepicker', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/toast', title: 'Toast', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/tooltip', title: 'Tooltip', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    
    {
        path: '', title: 'Charts', icon: 'mdi mdi-chart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'ChartJs', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/apex-charts', title: 'Apex Charts', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/sparkline-charts', title: 'Sparkline Charts', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/peity-charts', title: 'Peity Charts', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/other-charts', title: 'Other Charts', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Widgets', icon: 'zmdi zmdi-widgets', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/widgets/static-widgets', title: 'Static Widgets', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/widgets/data-widgets', title: 'Data Widgets', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Authentication', icon: 'zmdi zmdi-lock', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/auth/signin', title: 'SignIn 1', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/signup', title: 'SignUp 1', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/lock-screen', title: 'Lock Screen', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/reset-password', title: 'Reset Password 1', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
           ]
    },
    {
        path: '', title: 'Form', icon: 'zmdi zmdi-format-list-bulleted', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/form/basic-inputs', title: 'Basic Inputs', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/input-group', title: 'Input Group', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-layouts', title: 'Form Iayouts', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/masks', title: 'Masks', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/editor', title: 'Editor', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/validation', title: 'Validation', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/timepicker', title: 'Timepicker', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/datepicker', title: 'Datepicker', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           ]
    },
    { path: '/calendar', title: 'Calendar', icon: 'zmdi zmdi-calendar-check', class: '', badge: 'New', badgeClass: 'badge badge-light ml-auto', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Tables', icon: 'zmdi zmdi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/table/basic', title: 'Basic', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/table/responsive', title: 'Responsive', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           ]
    },
    {
        path: '', title: 'Icons', icon: 'zmdi zmdi-invert-colors', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/icons/font-awesome-icons', title: 'Font Awesome icon', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/icons/material-design-icons', title: 'Material Design Icons', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/icons/boxicons', title: 'Boxicons', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Maps', icon: 'zmdi zmdi-map', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/maps/google', title: 'Google Maps', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Pages', icon: 'zmdi zmdi-collection-folder-image', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/pages/invoice', title: 'Invoice', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/user-profile', title: 'User Profile', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/blank-page', title: 'Blank Page', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/coming-soon', title: 'Coming Soon', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/pages/error-403', title: 'Error 403', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/pages/error-404', title: 'Error 404', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/pages/error-500', title: 'Error 500', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    },
    
    {
        path: 'javascript:;', title: 'Menu Levels', icon: 'fa fa-share', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
            submenu: [
                { path: 'javascript:;', title: 'Level 1', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: 'javascript:;', title: 'Level 1', icon: 'mdi mdi-forward', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
                        submenu: [
                            { path: 'javascript:;', title: 'level 2', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                            { path: 'javascript:;', title: 'level 2', icon: 'mdi mdi-forward', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

                        ] },
            ]
    },
    { path: 'https://codervent.com/dashtreme-angular/docs/', title: 'Documentation', icon: 'fa fa-address-book', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://themeforest.net/user/codervent/portfolio', title: 'Support', icon: 'zmdi zmdi-help-outline', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }

    
];

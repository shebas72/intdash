<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Interactive Dashboard to show company financial details">
    <meta name="keywords" content="finance, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="The Guardianchief">
    <title>Nupco Dashboard</title>
  
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" rel="stylesheet">

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/charts/apexcharts.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/tether-theme-arrows.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/tether.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/shepherd-theme-default.css">
    <!-- END: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/tables/datatable/datatables.min.css">
    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/components.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/semi-dark-layout.css">

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/core/menu/menu-types/horizontal-menu.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/core/colors/palette-gradient.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/dashboard-analytics.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/card-analytics.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/plugins/tour/tour.css">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- END: Custom CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="horizontal-layout horizontal-menu dark-layout 2-columns  navbar-floating footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="2-columns" data-layout="dark-layout">

<nav class="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed navbar-brand-center">
        <div class="navbar-header d-xl-block d-none">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item"><a class="navbar-brand" href="index.php">
                       <img src="assets/logo.png" alt="nupco" />
                    </a></li>
            </ul>
        </div>
        <div class="navbar-wrapper">
            <div class="navbar-container content">
                <div class="navbar-collapse" id="navbar-mobile">
                    <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                        <ul class="nav navbar-nav">
                            <li class="nav-item mobile-menu d-xl-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ficon feather icon-menu"></i></a></li>
                        </ul>
                      
                     
                    </div>
                    <ul class="nav navbar-nav float-right">
                     
                        <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand"><i class="ficon feather icon-maximize"></i></a></li>
                   
                    
                      
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  


    <!-- BEGIN: Main Menu-->
    <div class="horizontal-menu-wrapper">
        <div class="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-dark navbar-without-dd-arrow navbar-shadow menu-border" role="navigation" data-menu="menu-wrapper">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mr-auto"><a class="navbar-brand" href="index.php">
                            
                            <h2 class="brand-text mb-0">Nupco</h2>
                        </a></li>
                    <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
                </ul>
            </div>
            <!-- Horizontal menu content-->
            <div class="navbar-container main-menu-content" data-menu="menu-container">
                <!-- include ../../../includes/mixins-->
                <?php
// function to get the current page name
function PageName() {
  return substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
}

$current_page = PageName();
?>

                <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
                    <li class="dropdown nav-item"><a class="dropdown-toggle nav-link" href="index.php" data-toggle="dropdown"><i class="feather icon-life-buoy"></i><span data-i18n="Dashboard">Aging Receivable</span></a>
                        <ul class="dropdown-menu">
                        <li class="<?php echo $current_page == 'index.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="index.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Dashboard</a>
                            </li>
                            <li class="<?php echo $current_page == 'more360.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="more360.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>More than one year</a>
                            </li>
                            <li class="<?php echo $current_page == '360.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="360.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>360 days</a>
                            <li class="<?php echo $current_page == '270.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="270.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>270 days</a>
                            <li class="<?php echo $current_page == '180.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="180.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>180 days</a>
                            <li class="<?php echo $current_page == '90.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="90.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>90 days</a>
                            <li class="<?php echo $current_page == '30.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="30.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>30 days</a>
                            </li>
                        </ul>
                    </li>
                   
                    <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="ap.php" data-toggle="dropdown"><i class="feather icon-briefcase"></i><span data-i18n="ap">Accounts Payable</span></a>
                    <ul class="dropdown-menu">
                        <li class="<?php echo $current_page == 'ap.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="ap.php" data-toggle="dropdown" data-i18n="apa"><i class="feather icon-activity"></i>Dashboard</a>
                            </li>
                            <li class="<?php echo $current_page == 'net-payable.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="net-payable.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Net Payable</a>
                            </li>
                            <li class="<?php echo $current_page == 'accounts-payable.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="accounts-payable.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Accounts Payable</a>
                            <li class="<?php echo $current_page == 'vendors.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="vendors.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>No. of Vendors</a>
                            <li class="<?php echo $current_page == 'subco-balance.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="subco-balance.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Subco Balance</a>
                            <li class="<?php echo $current_page == 'sup-balance.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="sup-balance.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Supplier Balance</a>
                            <li class="<?php echo $current_page == 'ad-subco.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="ad-subco.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Advance Due From Subco</a>
                            </li>
                            <li class="<?php echo $current_page == 'ret-subco.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="ret-subco.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Retention Payable to Subco</a>
                            </li>
                           
                        </ul>
                     
                    </li>

                    <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="bank.php" data-toggle="dropdown"><i class="feather icon-file-text"></i><span data-i18n="bank">Daily Bank Position</span></a>
                    <ul class="dropdown-menu">
                        <li class="<?php echo $current_page == 'bank.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="bank.php" data-toggle="dropdown" data-i18n="apa"><i class="feather icon-activity"></i>Dashboard</a>
                            </li>
                            <li class="<?php echo $current_page == 'bank-position.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="bank-position.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Bank Position</a>
                            </li>
                            <li class="<?php echo $current_page == 'proposed-payment.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="proposed-payment.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Proposed Payment</a>
                            
                            <li class="<?php echo $current_page == 'expected-receipts.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="expected-receipts.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Expected Receipt</a>
                            <li class="<?php echo $current_page == 'overdraft.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="overdraft.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Overdraft</a>
                            <li class="<?php echo $current_page == 'bank-loans.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="bank-loans.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Bank Loans</a></li>
                            </ul>
                     </li>

                   

                     <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="ebit.php" data-toggle="dropdown"><i class="feather icon-percent"></i><span data-i18n="ebit">EBIT</span></a>
                     <ul class="dropdown-menu">
                        <li class="<?php echo $current_page == 'ebit.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="ebit.php" data-toggle="dropdown" data-i18n="apa"><i class="feather icon-activity"></i>Dashboard</a>
                            </li>
                            <li class="<?php echo $current_page == 'actual-budget.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="actual-budget.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Actual VS Budget</a>
                            </li>
                            <li class="<?php echo $current_page == 'sales.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="sales.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Sales Growth Vs % Profit</a>
                            
                            <li class="<?php echo $current_page == 'sales-quantity.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="sales-quantity.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Sales quantity CY vs PY</a>
                            <li class="<?php echo $current_page == 'expenditure.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="expenditure.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Expenditure by Department</a>
                            <li class="<?php echo $current_page == 'leave.php' ? 'active':NULL ?>" data-menu=""><a class="dropdown-item" href="leave.php" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Leave Balance</a></li>
                            </ul>
                     </li>
                     <li class="nav-item"><a class="dropdown-toggle nav-link" href="index.html" data-toggle="dropdown"><i class="feather icon-trending-up"></i><span data-i18n="Dashboard">Financial</span></a>
                     
                     </li>
                  
                </ul>
             
             
            </div>
        </div>
    </div>
    <!-- END: Main Menu-->
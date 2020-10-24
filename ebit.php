<?php include 'header.php'; ?> 
<div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">



            <section id="statistics-card">

            <div class="row">
                        <div class="col-xl-3 col-md-6 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="avatar bg-rgba-info p-50 m-0 mb-1">
                                            <div class="avatar-content">
                                                <i class="feather icon-plus text-info font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="text-bold-700">3.5 M</h2>
                                        <p class="mb-0 line-ellipsis">Cash Reserves</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="avatar bg-rgba-warning p-50 m-0 mb-1">
                                            <div class="avatar-content">
                                                <i class="feather icon-file-text text-info font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="text-bold-700">16</h2>
                                        <p class="mb-0 line-ellipsis">Cosultants</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="avatar bg-rgba-warning p-50 m-0 mb-1">
                                            <div class="avatar-content">
                                                <i class="feather icon-file-text text-info font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="text-bold-700">7</h2>
                                        <p class="mb-0 line-ellipsis">New Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="avatar bg-rgba-warning p-50 m-0 mb-1">
                                            <div class="avatar-content">
                                                <i class="feather icon-file-text text-info font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="text-bold-700">36</h2>
                                        <p class="mb-0 line-ellipsis">Social Campaigns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
</div>
         
<div class="row">

                        <div class="col-xl-12 col-md-12 col-sm-12">
                            <div class="card text-center">
                           
                                <div class="card-header d-flex justify-content-between">
                                    <h4 class="card-title">Actual VS Budget</h4>
                                   
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="line-area-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>

                

                    
                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col-lg-6 col-md-12">
                        <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-end">
                                    <h4 class="card-title">Sales Growth Vs % Profit</h4>
                                 
                                </div>
                                <div class="card-content">
                                    <div class="card-body py-0">
                                    <div id="line-area-chart-profit"></div>
                                    </div>
                               
                                </div>
                            </div>
                        </div>

                        <!-- Donut Chart -->
                        <div class="col-lg-6 col-md-12">
                        <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-end">
                                    <h4>Gender equality % Female</h4>
                                 
                                </div>
                                <div class="card-content">
                                    <div class="card-body pt-50">
                                    <div id="radial-bar-chart" class="mx-auto"></div>
                                   
                                    </div>
                               
                                </div>
                            </div>
                        </div>

                  
                      
                    </div>

                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Advance Due From Subco</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="line-chart-advancedue"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                  
                      
                    </div>


                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Net Payable</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="bar-chart-netpayable"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
</div>
<div class="row">

                        <!-- Donut Chart -->
                        <div class="col-lg-12 col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Subco Balance</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="line-chart-subbal"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                  
                      
                    </div>


                    <div class="row">

                        <div class="col-xl-12 col-md-12 col-sm-12">
                            <div class="card text-center">
                           
                                <div class="card-header d-flex justify-content-between">
                                    <h4 class="card-title">Balance - Suppliers</h4>
                                   
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="sales-line-chart-subbal"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                
                  
                </section>


                <!-- Dashboard Analytics Start -->
              

            </div>
        </div>
    </div>

 <?php include 'footer.php'; ?> 
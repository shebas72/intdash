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

                        <div class="col-xl-12 col-md-12 col-sm-12">
                            <div class="card text-center">
                           
                                <div class="card-header d-flex justify-content-between">
                                    <h4 class="card-title">Retention Payable to Subco</h4>
                                   
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="sales-line-chart"></div>
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
                                    <h4 class="card-title">Vendors</h4>
                                 
                                </div>
                                <div class="card-content">
                                    <div class="card-body py-0">
                                        <div id="customer-chart"></div>
                                    </div>
                                    <ul class="list-group list-group-flush customer-info">
                                        <li class="list-group-item d-flex justify-content-between">
                                            <div class="series-info">
                                                <i class="fa fa-circle font-small-3 text-primary"></i>
                                                <span class="text-bold-600">Subco Balance</span>
                                            </div>
                                            <div class="product-result">
                                                <span>11</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between ">
                                            <div class="series-info">
                                                <i class="fa fa-circle font-small-3 text-warning"></i>
                                                <span class="text-bold-600">Suppliers Balance</span>
                                            </div>
                                            <div class="product-result">
                                                <span>15</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between ">
                                            <div class="series-info">
                                                <i class="fa fa-circle font-small-3 text-danger"></i>
                                                <span class="text-bold-600">Total Vendors</span>
                                            </div>
                                            <div class="product-result">
                                                <span>26</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Donut Chart -->
                        <div class="col-lg-6 col-md-12">
                        <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-end">
                                    <h4>Accounts Payable</h4>
                                 
                                </div>
                                <div class="card-content">
                                    <div class="card-body pt-50">
                                        <div id="session-chart" class="mb-1"></div>
                                   
                                    </div>
                                    <ul class="list-group list-group-flush customer-info">
                                        <li class="list-group-item d-flex justify-content-between">
                                            <div class="series-info">
                                                <i class="fa fa-circle font-small-3 text-primary"></i>
                                                <span class="text-bold-600">Subco Balance</span>
                                            </div>
                                            <div class="product-result">
                                                <span>11</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between ">
                                            <div class="series-info">
                                                <i class="fa fa-circle font-small-3 text-warning"></i>
                                                <span class="text-bold-600">Suppliers Balance</span>
                                            </div>
                                            <div class="product-result">
                                                <span>15</span>
                                            </div>
                                        </li>
                                       
                                    </ul>
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
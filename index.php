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
                        <div class="col-xl-6 col-md-6 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="avatar bg-rgba-info p-50 m-0 mb-1">
                                            <div class="avatar-content">
                                                <i class="feather icon-plus text-info font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="text-bold-700">174,469,931</h2>
                                        <p class="mb-0 line-ellipsis">Total AR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="avatar bg-rgba-warning p-50 m-0 mb-1">
                                            <div class="avatar-content">
                                                <i class="feather icon-file-text text-info font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="text-bold-700">54,250,727</h2>
                                        <p class="mb-0 line-ellipsis">Receipts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
</div>
<div class="row">

                        <div class="col-xl-12 col-md-12 col-sm-12">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="line-chart-tbalance"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>

                    
                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">30 Days</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div id="pie-chart-30days" class="mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Donut Chart -->
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">90 days</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div id="pie-chart-90days" class="mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                  
                      
                    </div>

                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">180 Days</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div class="height-300">
                                    <canvas id="simple-doughnut-chart-180"></canvas>
</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Donut Chart -->
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">270 days</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div class="height-300">
                                    <canvas id="simple-doughnut-chart-270"></canvas>
</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                  
                      
                    </div>


                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">360 Days</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="bar-chart-360"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Donut Chart -->
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">More than one year</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                    <div id="bar-chart-more360"></div>
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
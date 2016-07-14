<?php
    $title = "Home Page";
    $description = "Table of my family members";
    include 'includes/header.php';
    include 'includes/personModel.php';
?>
        <body>
            <div class="container">
                <table class="table table-striped table-hover">
                  <thead>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                    <th>Current Age</th>
                    <th>Cost of life</th>
                  </thead>
                  <tbody>
                      <?php
                        $obj = new Family();
                        $obj->dispalyFamily();
                      ?>
                  </tbody>
                </table>
              <br>
              <br>
              <br>

            <div id="newPerson" class="col-lrg-5">
              <h3 class="text-center"><label>New Person</label></h3>
              <hr>
              <form class="addPerson" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" role="form">
                <div id="nameInput" class="form-group col-sm-5 has-feedback">
                    <label id="nameLabel"><b>Name:</b></label>
                  <input id="name" type="text" name="name" class="form-control" placeholder="John Appleseed" required>
                    <span id="nameOk" class="glyphicon glyphicon-ok form-control-feedback hidden"></span>
                    <span id="nameError" class="glyphicon glyphicon-remove form-control-feedback hidden"></span>
                </div>
                <div class="clearfix"></div>
                <div id="genderSelect" class="form-group col-sm-6    radio">
                  <label id="genderLabel"><b>Gender:</b></label>
                  <div class="clearfix"></div>
                  <div id="genderBtns">
                      <label class="radio-inline"><input class="" type="radio" name="gender" value="Male">Male</label>
                      <label class="radio-inline"><input class="" type="radio" name="gender" value="Female">Female</label>
                      <label class="radio-inline active"><input class="" type="radio" name="gender" value="Other" checked="">Other</label>
                  </div>
                </div>
                <div class="clearfix"></div>
                  <div class='col-sm-3'>
                    <div id="birthDayForm" class="form-group">
                      <label id="birthLabel">Birthday & Time:<label>
                      <div class="input-group date" id='datetimepicker1'>
                        <input type='text' name="birthday" class="form-control" placeholder="MM/DD/YY"required>
                        <span class="input-group-addon">
                          <span class="glyphicon glyphicon-chevron-down"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                <script type="text/javascript">
                  $(function () {
                    $('#datetimepicker1').datetimepicker({
                      format: 'YYYY-MM-DD'
                    });
                  });
                </script>
                <div class="clearfix"></div>
                <div id="submitDiv" class="col-sm-3">
                    <input id="submitBtn" name="submitBtn" type="submit" class="" value="Save">
                </div>
              <div class="clearfix"></div>
          </div>

            </div>
            <script>
                $('#name').on('input',function(){
                    //Test string for numbers and other characters
                    var strName = document.getElementById('name').value;
                    if(/^[a-z A-Z]+$/.test(strName))
                    {
                        $('#submitBtn').removeClass('error');
                        $(this).closest('div').addClass('has-success');
                        $(this).closest('div').removeClass('has-error');
                        $('#nameOk').removeClass('hidden');
                        $('#nameError').addClass('hidden');
                    }
                    else
                    {
                        $('#submitBtn').addClass('error');
                        $(this).closest('div').addClass('has-error');
                        $(this).closest('div').removeClass('has-success');
                        $('#nameOk').addClass('hidden');
                        $('#nameError').removeClass('hidden');
                    }
                });
            </script>
          </form>
        </body>
        <?php
            if($obj->validate())
            {
                echo "<pre>Validated</pre>";
                $obj->addMember();
            }
            include 'includes/footer.php';
        ?>

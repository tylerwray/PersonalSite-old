<?php
/*
*Author: Tyler Wray
*Date: 04/17/2016
*File: userModel.php
*FileType: Model
*
*Purpose: Manage the user information between
*the Controller and the View.
*/
$username = "root";
$password = "root";
$hostname = "localhost";
$database = "main";

//Test connection to the database
$dbConnect = mysql_connect($hostname, $username, $password);
    if($dbConnect)
    {
	   echo "<br>" . "Connection Successful!" . "<br>";
    }
    else
    {
	   echo "Connection Failed";
    }
    $test = mysql_select_db($database) or die( "Unable to select database :(");
    if($test)
        echo "Database selection Successful!";

    function insertUser($userName, $password, $email)
    {
        $insert = "INSERT INTO Main (userName, password, email)
                    VALUES ($userName, $password, $email)";
        $dbConnect->query($insert);
    }

    if ($_POST[''])
?>

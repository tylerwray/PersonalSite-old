<?php
//include(functions.php);
class Family
{
    function dispalyFamily()
    {
        $username = "root";
        $password = "root";
        $hostname = "localhost";
        $database = "main";
        try {
            //Connect to DB
            $dbConnect = new PDO('mysql:host=localhost;port=8888;dbname=main', $username, $password, array(PDO::ATTR_PERSISTENT => true));
            $dbConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
            $stmt = $dbConnect->prepare('SELECT * FROM main.family');
            $stmt->execute();
            while ($row = $stmt->fetch())
            {
                echo "<tr>";
                echo "<td>".$row['name']."</td>";
                echo "<td>".$row['gender']."</td>";
                echo "<td>".$row['birthday']."</td>";
                $today = time();
                $age = $today - strtotime($row['birthday']);

                //Year
                $year = 60 * 60 * 24 * 365;
                $yearsOld = floor($age / $year);
                $age -= ($yearsOld * $year);

                //Months
                /*$month = 60 * 60 * 24 * 30;
                $monthsOld = floor($age / $month);
                $age = $age - ($monthsOld * $month);*/

                //Day
                $day = 60 * 60 * 24;
                $daysOld = floor($age / $day);
                $age -= ($daysOld * $day);

                //Hour
                $hour = 60 * 60;
                $hoursOld = floor($age / $hour);
                $age -= ($hoursOld * $hour);

                //Min
                $min = 60;
                $minsOld = floor($age / $min);
                $age -= ($minsOld * $min);

                //Seconds
                //$secsOld = $age;

                echo "<td>$yearsOld years, $daysOld days, $hoursOld hours, and $minsOld minutes old.</td>";
                $perSecond = 0.001;
                $costAge = $today - strtotime($row['birthday']);
                $costAge *= $perSecond;
                $costAge = round($costAge);
                echo "<td>\$$costAge</td>";
                echo "</tr>";
            }//END While for Display
        } catch (PDOException $e) {
            echo "<pre>Error: " . $e->getMessage() . "</pre>";
        }
    }

    function addMember()
    {

        $name = $_POST['name'];
        $gender = $_POST['gender'];
        $birthday = $_POST['birthday'];
        echo "<pre>$name</pre>";
        $username = "root";
        $password = "root";
        $hostname = "localhost";
        $database = "main";
        try {
            $dbConnect = new PDO('mysql:host=localhost;port=8888;dbname=main', $username, $password, array(PDO::ATTR_PERSISTENT => true));
            $dbConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "<pre>Error: " . $e->getMessage() . "</pre>";
        }

        $insert = "INSERT INTO main.family (Name,gender,birthday) VALUES ('{$name}', '{$gender}', '{$birthday}')";
    }

    function validate()
    {
        if(isset($_POST['submitBtn']))
        {

            if($_POST['name'] == "" || $_POST['gender'] == "" || $_POST['birthday']== "")
            {
                echo "<pre>Something was empty</pre>";
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
?>

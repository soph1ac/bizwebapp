<?php session_start();
//Store data from my form into variables
$a = $_POST['alt-languages'];
//$g = $_POST['gender'];

//retrieve the Json file and converted it into php array
$j = file_get_contents('ppl.json');
$j = json_decode($j, true);

//print_r ($j);

$k = "object".$objectCount;
//
//format the id
//$i = count($j);
//$i = ++$i;
//
//// insert my variables into an array stored in a variable called $add
//$add = array(
//	"id" => $i,
//	"alanguages" => $p,
//	"gender" => $g
//);
////print_r ($add);
//
//// append my new array into the json array
////array_push($j[$i-2], $add);
//array_push($j, $add);
//
//foreach($j as $k=>$v){
//    if ($v['id'] == $_SESSION['i']){
//        $v['alt-languages'] = $s;
//    }
//}

$k = count($j);
--$k;
$j[$k]['alanguages'] = $a;
print_r ($j);

// take my updated json array, format it back into Json and Overwrite it into the Json file
$j = json_encode($j);
file_put_contents('ppl.json', $j);

// Store the image on my service
//$t = $_FILES['photo']['tmp_name'];
//$f = "img/$i.jpg";
//move_uploaded_file( $t, $f);
?>
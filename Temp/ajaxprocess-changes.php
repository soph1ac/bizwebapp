ajaxprocess-b2b

<?php
//Store data from my form into variables
$s = $_POST['specs'];

//retrieve the Json file and converted it into php array
$j = file_get_contents('ppl.json');
$j = json_decode($j, true);


// append my new array into the json array
array_push($j, $s);

// take my updated json array, format it back into Json and Overwrite it into the Json file
$j = json_encode($j);
file_put_contents('ppl.json', $j);
?>

ajaxprocess-sec-audit

<?php
//Store data from my form into variables
$sa = $_POST['sec-audit'];

//retrieve the Json file and converted it into php array
$j = file_get_contents('ppl.json');
$j = json_decode($j, true);


//format the id
$i = count($j);
$i = ++$i;

// append my new array into the json array
array_push($j[i], $sa);

// take my updated json array, format it back into Json and Overwrite it into the Json file
$j = json_encode($j);
file_put_contents('ppl.json', $j);
?>

ajaxprocess-alt-languages

<?php
//Store data from my form into variables
$al = $_POST['alt-languages'];

//retrieve the Json file and converted it into php array
$j = file_get_contents('ppl.json');
$j = json_decode($j, true);


// append my new array into the json array
array_push($j, $al);

// take my updated json array, format it back into Json and Overwrite it into the Json file
$j = json_encode($j);
file_put_contents('ppl.json', $j);
?>
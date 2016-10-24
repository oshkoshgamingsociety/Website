<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
	<?php class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('test.db');
      }
   }
   $db = new MyDB();
   if(!$db){
      echo $db->lastErrorMsg();
   } else {
      echo "Opened database successfully\n";
   }
   
   $sql =<<<EOF
      SELECT * from Scores;
EOF;

   $ret = $db->query($sql);
   while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
      echo "Name = ". $row['Name'] . "\n";
      echo "Points = ". $row['Points'] ."\n";
   }
   echo "Operation done successfully\n";
   $db->close();
    
   ?> 
	 
 <?php phpinfo(); ?> 
 </body>
</html>

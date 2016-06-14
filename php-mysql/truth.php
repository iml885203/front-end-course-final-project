<?php
  include 'mysql_connect.inc.php';
  $limit_count = 3;
  $sql = "SELECT * FROM post ORDER BY id DESC LIMIT $limit_count";
  $result = mysql_query($sql);


  while($row = mysql_fetch_row($result))
  {
?>
    <div class="slide">

      <div class="truth">
        <?php
        if($row[5] == 0){
          echo '<div class="truth-bg-color yellow">';
          echo '</div>';
        }
        else if($row[5] == 1){
          echo '<div class="truth-bg-color gray">';
          echo '</div>';
        }
        else if($row[5] == 2){
          echo '<div class="truth-bg-color green">';
          echo '</div>';
        }
        ?>
        <div class="background">

        </div>
        <div class="content">
          <div class="left">
            <div class="title">
              <h2>#<?php echo $row[0] ?> <?php echo $row[1] ?></h2>
              <h4><a href="<?php echo $row[2] ?>" target="_blank"><?php echo $row[2] ?></a></h4>
            </div>
            <div class="image">
              <img src="<?php echo $row[4] ?>" alt="" />
            </div>
          </div>
          <div class="right">

            <?php echo $row[3].'<br>' ?>
            <div class="fb-like" data-href="http://lguo.ddns.net/final-project/index.php#<?php echo $row[0] ?>" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>

            <div class="fb-comments" data-href="http://lguo.ddns.net/final-project/index.php#<?php echo $row[0] ?>" data-width="auto" data-numposts="5"></div>
          </div>
          <div class="clear">

          </div>
        </div>

      </div>


    </div>
<?php
  }
?>

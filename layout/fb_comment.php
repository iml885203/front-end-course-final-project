<?php
  for($i = 0 ; $i<count($idarray) ; $i++){
    ?>
    <!-- Modal -->
    <div class="modal fade" id="myModal<?php echo $idarray[$i] ?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title" id="myModalLabel">留言</h4>
          </div>
          <div class="modal-body">
            <div class="fb-comments" data-href="http://lguo.ddns.net/final-project/index.php#<?php echo $idarray[$i] ?>" data-width="auto" data-numposts="1" data-mobile="true"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
    <?php
  }
 ?>

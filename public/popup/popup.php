<style>
.balti_popup{width:450px;border-radius:11px;padding:50px;overflow:visible;background:#000;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-image:url(/popup/bg.png);text-align:center;background-repeat: no-repeat;background-position: bottom;}
.modal{background:rgba(0,0,0,0.6);z-index: 9999;}
.balti_popup h2{font-size:18px;color:#fff;font-weight:600;margin: 60px 0 0px;line-height:35px;}
.balti_popup p{font-size:30px;color:#fff;font-weight:700;margin: 0 0 10px;line-height:35px;}
.balti_popup img {width: 200px; position: absolute; top: 0; left: 0; right: 0; margin: auto; }
.balti_popup ul{margin:0;padding:0;}
.balti_popup ul li{text-align:left;position:relative;width:100%;margin:8px 0px;display:inline-block;}
.balti_popup ul li i{position:absolute;top:15px;left:14px;color:#d605a4;}
.balti_popup ul li input[type="text"],.balti_popup ul li input[type="email"],.balti_popup ul li input[type="number"],.balti_popup ul li textarea{background:#ffffff;border:#dedede 2px solid;padding:10px 10px 10px 34px;width:100%;border-radius:6px;font-size:14px;color:#000;box-shadow:none!important;outline:none 0px!important;}
.balti_popup ul li textarea{height:100px;resize:none;}
.balti_popup ul li input[type="text"]:focus,.balti_popup ul li input[type="email"]:focus,.balti_popup ul li textarea:focus{border:2px solid #d605a4;}
.balti_popup .pd-right-0{padding-right:0px!important;}
.balti_popup ul li input[type="submit"]{background-image:-webkit-linear-gradient(-14deg,rgb(236,1,166) 0%,rgb(181,13,162) 49%,rgb(126,24,158) 100%);color:#fff;font-size:18px;border:2px solid;text-transform:uppercase;font-weight:600;padding:9px 10px;letter-spacing:1px;outline:0px none;border-radius:50px;width:195px;margin:0 auto;text-align:center;cursor:pointer;display:block;width:100%;transition:.1s linear;}
.balti_popup ul li input[type="submit"]:hover{background-image:-webkit-linear-gradient(140deg,rgb(236,1,166) 0%,rgb(181,13,162) 49%,rgb(126,24,158) 100%);}
.balti_popup .fancybox-close-small{position:absolute;top:0;right:0;width:44px;height:44px;padding:0;margin:0;border:0;border-radius:0;outline:none;background:transparent;z-index:10;outline:none;cursor:pointer;}
.balti_popup .fancybox-close-small{border:rgb(184,0,93) 3px solid;background:#fff;border-radius:72px;text-align:center;box-shadow:#000 0 0 10px;right:-14px;top:-13px;overflow:visible;outline:none!important;}
.balti_popup .fancybox-close-small:hover{background-image:-webkit-linear-gradient(-90deg,rgb(184,0,93) 0%,rgb(93,16,13) 100%);z-index:11;}
.balti_popup .fancybox-close-small:after{position:absolute;top:2px;right:5px;width:30px;height:30px;font:20px/30px Arial,Helvetica Neue,Helvetica,sans-serif;color:#888;font-weight:300;text-align:center;border-radius:50%;border-width:0;transition:background .2s;box-sizing:border-box;z-index:2;content:"x";color:#4a171e;font-size:25px;right:4px;transition:.1s linear;}
.balti_popup .fancybox-close-small:hover:after{color:white!important;}
.balti_popup button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}
@media screen and (max-width:1400px){
    .balti_popup {padding: 30px;}
}

@media screen and (max-width:767px){
    .balti_popup{padding:20px;}
    .balti_popup .pd-right-0{padding-right:15px!important;}
    .balti_popup ul li textarea{height:85px;}
}
@media screen and (max-width:490px){
    .balti_popup{width:90%;}
    .balti_popup h2{font-size:25px;}
}
.modal-backdrop{display:none!important;}
.balti_popup ::placeholder {color: #000; opacity: 1;} .balti_popup :-ms-input-placeholder {color: #000; } .balti_popup ::-ms-input-placeholder {color: #000; }
.selected-dial-code {color: #000; }
</style>
<!-- START POPUP MODAL -->
<div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
    <div style="display: inline-block;" class="balti_popup" id="balti_popup">
        <img src="http://www.pixelstudiosinc.com/assets/images/logo.webp">
        <h2>We are here to help!</h2>
        <p>Get an Instant Quote</p>
        <form action="mail" method="post" class="validate-balti_popup">
            <div class="row">
                <div class="col-md-12">
                    <ul>
                        <li>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <input type="text" class="required" placeholder="Full Name *" name="name" required="required">
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 pd-right-0">
                    <ul>
                        <li>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <input name="phone" type="text" minlength="10" maxlength="10" autocomplete="off" onkeypress="return ((event.charCode >= 48 &amp;&amp; event.charCode <= 57) )" placeholder="Phone*" required>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 ">
                    <ul>
                        <li>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <input type="email" class="required email" placeholder="Email Address *" name="email" required="required">
                        </li>
                    </ul>
                </div>
                
                <div class="col-md-12">
                    <ul>
                        <li>
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            <textarea name="msg" class="required" required="required" placeholder="To help us understand better enter a brief description of your project."></textarea>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li>
                            <input type="submit" name="cta" value="Submit">
                            <input type="hidden" name="pageurl" value="<?php echo $actual_link; ?>">
                            <input type="hidden" name="ip2loc_ip" value="">
                            <input type="hidden" name="ip2loc_isp" value="">
                            <input type="hidden" name="ip2loc_org" value="">
                            <input type="hidden" name="ip2loc_country" value="">
                            <input type="hidden" name="ip2loc_region" value="">
                            <input type="hidden" name="ip2loc_city" value="">
                            <input type="hidden" name="Form_name" value="Popup Form">
                        </li>
                    </ul>
                </div>
            </div>
        </form>
        <button data-fancybox-close="" class="fancybox-close-small close"></button>
    </div>
</div>
<!-- END POPUP MODAL -->
<script>
// POPUP Script
$(".close").click(function () {
$(".modal").hide()
})
$(".popup-btn").click(function () {
$(".modal").show()
})
setTimeout(function () {
$(".modal").show()
}, 10000);
</script>
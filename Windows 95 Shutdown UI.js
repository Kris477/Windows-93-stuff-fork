$_shutdown = function(){
  	$window.current.destroy();
    $audio('boot').pause();
    setTimeout(()=>{
      le._dom.taskbar.classList.add('hide');
      const _icons = document.querySelectorAll('.ui_icon');
      _icons.forEach(function(x){
        x.classList.add('hide');
      });
    },400);
    setTimeout(()=>{
      $audio("/c/files/sounds/shutdown.mp3").play();
    },1000);
    setTimeout(()=>{
      le._dom.desktop.style.background = "#000 !important";
      le._dom.desktop.style['background-color'] = "#000 !important";
      le._dom.desktop.style['background-image'] = "#000 !important";
      const nocursor = document.createElement('style');
      nocursor.innerText = `.nocursor { cursor: none }`;
      document.head.appendChild(nocursor);
      le._dom.desktop.classList.add('nocursor');
    },4300);
    setTimeout(()=>{
      document.body.innerHTML = "<div style='display: table;width: 100%;height: "+window.innerHeight+"px;text-align:center;'><p style='display:table-cell;vertical-align:middle;'>Please wait while your computer<br>shuts down.</p></div>";
      document.body.style.color = "#fb7700";
      document.body.style['font-size'] = "25px";
      document.body.style.background = "#000";
      document.body.style.cursor = "none";
    },5300);
    setTimeout(()=>{
      document.body.innerHTML = "<div style='display: table;width: 100%;height: "+window.innerHeight+"px;text-align:center;'><p style='display:table-cell;vertical-align:middle;'>It's now safe to turn off<br>your computer.</p><br><p></p></div>";
    },8200);
  };
$_reboot = function(){
  location.reload();
};
$_rebootdos = function(){
    $file.save('/a/boot/dosbox.js',`location.hash="!dosbox";setTimeout(()=>{$window.current.maximize();le._dom.taskbar.classList.add('hide');document.querySelector('.ui_window__head').classList.add('hide');$file.delete('/a/boot/dosbox.js')},4000)`);
    setTimeout(()=>{location.reload()},500);
};

le._apps.shutdown.exec = function(){
  $confirm({
    title: "Shut Down Windows",
    msg: `<div style="text-align:left !important">Are you sure you want to:<br>
	<button onclick="$_shutdown()"><u>S</u>hut down the computer?</button><br>
	<button onclick="$_reboot()"><u>R</u>estart the computer?</button><br>
	<button onclick="$_rebootdos()">Restart the computer in <u>M</u>S-DOS mode?</button></div>
	`,
    img: "/c/sys/skins/w93/shutdown.png",
    btnCancel: "No",
    btnOk: "",
    animationIn: "",
    animationOut: ""
  });
}

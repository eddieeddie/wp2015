<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
		
		<style>
#head1 {
    color:black;
	position:relative;
	left:40%;
	
    }
body {background: url(background.jpg)
      
     }
	
h1   { 
       font-size:200%;
     }
#con  { 
      position:absolute;
	  left:40%;
      background: rgba(0%,30%,50%,0.1);
     }	 
	
	
	
p    { color:black;}

		

</style>
	</head>
	
	<body>
    <div id="head1">
    <h1>吳映諦的個人履歷</h1>
    </div>
	
	
	
	<!--<div style="text-align:center;">Text Content</div>-->
	<div id="con">
	
	
	<h1>關於我</h1>
    <p>
 
    <table style="width:50%">
		<tr>
		<td>喜歡的歌手</td>
		<td>鹿乃(かの)</td>		
    
		</tr>
  
		<tr>
		<td>興趣</td>
		<td>聽音樂,看小說</td>		
    
		</tr>
	</table>
	</p>
	
	
	<h3>學歷</h3>
    <p>Da Ye Junior High School
	
	<a href="http://www.dyjh.cy.edu.tw/" target="_blank">visit school<img src="piture\ya.png" alt="ya" height="21" width="21"></a>
	</p>
	<p>Nation Chiayi Senior High School
	
	<a href="http://www.cysh.cy.edu.tw/releaseRedirect.do?unitID=183&pageID=3037" target="_blank">visit school<img src="piture\cha.jpg" alt="cha" height="21" width="21"></a>
	</p>
	<p>National Cheng Kung University
	
	<a href="http://web.ncku.edu.tw/bin/home.php" target="_blank">visit school<img src="piture\ncku.png" alt="ncku" height="21" width="21"></a>
	</p>
	
	<img id="myImage" onclick="changeImage()" src="shit1st.png" width="400" height="300">
	
	<script type="text/javascript">
	function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("shit2nd")) {
        image.src = "shit1st.png";
    } else {
        image.src = "shit2nd.png";
    }
	}
	</script>
	<!--<a href="C:\Users\User\Desktop\fun.html" target="_blank">just for fun</a>-->
	
	</div>
	
	
    
	
	
	
	
	
	
	
	</body>
</html>
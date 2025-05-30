.lunchBreakfastButton {
	-moz-box-shadow:inset 0px 1px 0px 0px #54a3f7;
	-webkit-box-shadow:inset 0px 1px 0px 0px #54a3f7;
	box-shadow:inset 0px 1px 0px 0px #54a3f7;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7));
	background:-moz-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:-o-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:-ms-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);
	background-color:#007dc1;
	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #00152e;
}
.lunchBreakfastButton:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0061a7), color-stop(1, #007dc1));
	background:-moz-linear-gradient(top, #0061a7 5%, #007dc1 100%);
	background:-webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%);
	background:-o-linear-gradient(top, #0061a7 5%, #007dc1 100%);
	background:-ms-linear-gradient(top, #0061a7 5%, #007dc1 100%);
	background:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1',GradientType=0);
	background-color:#0061a7;
}
.lunchBreakfastButton:active {
	position:relative;
	top:1px;
}

.numberButton {
    background: #DBDBDB;
    background-image: -webkit-linear-gradient(top, #DBDBDB, #D0D0D0);
    background-image: -moz-linear-gradient(top, #DBDBDB, #D0D0D0);
    background-image: -ms-linear-gradient(top, #DBDBDB, #D0D0D0);
    background-image: -o-linear-gradient(top, #DBDBDB, #D0D0D0);
    background-image: linear-gradient(to bottom, #DBDBDB, #D0D0D0);
    -webkit-border-radius: 50;
    -moz-border-radius: 50;
    border-radius: 50px;
    text-shadow: 1px 1px 3px #ffffff;
    font-family: Arial;
    color: #000000;
    font-size: 46px;
    padding: 3px 16px 3px 16px;
    text-decoration: none;
    font-weight: bold;
	display: block;
	margin:auto;
}

.numberButton:hover {
    background: #C7C7C7;
    background-image: -webkit-linear-gradient(top, #C7C7C7, #C7C7C8);
    background-image: -moz-linear-gradient(top, #C7C7C7, #C7C7C8);
    background-image: -ms-linear-gradient(top, #C7C7C7, #C7C7C8);
    background-image: -o-linear-gradient(top, #C7C7C7, #C7C7C8);
    background-image: linear-gradient(to bottom, #C7C7C7, #C7C7C8);
    text-decoration: none;
}

table tr td{
    border: 1px solid black;
}

table.fixed{table-layout:fixed;
};

table.buttonTable { table-layout:fixed; 
    
    }
              
table.buttonTable td { 
    overflow: hidden;
    text-align: "center";
    width:70px;
    }
    
table.buttonTable tr {
    height:70px;
    overflow: hidden;
}

select.currentOrder{
    size:"30";
    height:400px;
    width:200px;
}

select.previousOrders{
    size:10;
    height:200px;
    width:200px;
}

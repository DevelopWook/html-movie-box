function openWin(src)
{
	win = window.open(""+src+"","win","width=1024 height=768 directories=no")
	win.document.write("<html><head>")
	win.document.write("<title>포스터 확대보기</title>")
	win.document.write("</head><body leftmargin=0 topmargin=0 onclick='self.close()'>")
	win.document.write("<img src='"+src+"' width=100% height=100%>")
	win.document.write("</body></html>")
}
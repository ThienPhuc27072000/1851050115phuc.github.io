										// JavaScript Document

function dangki() 
{
	var ho = document.getElementById("lastname").value;
	var ten = document.getElementById("name").value;
	var mail = document.getElementById("email").value;
	var ngay = document.getElementById("day").value;
	var thang = document.getElementById("month").value;
	var nam = document.getElementById("year").value;
	var gioitinh = document.getElementById("sex").value;
	var cmnd = document.getElementById("id").value;
	var dt = document.getElementById("sdt").value;
	var diachi = document.getElementById("address").value;
	var thanhpho = document.getElementById("city").value;
	var quan = document.getElementById("district").value;
	if( ho == "" || ten == "" || mail == "" || ngay == "" || thang == "" || nam == "" || gioitinh  == "" || 
		cmnd == "" || dt == "" || diachi == "" || thanhpho == "" || quan == "")
	{
		var x = confirm("Vui lòng kiểm tra lại thông tin đăng kí ");
	}
	else
	{
		alert("Vui lòng kiểm tra lại thông tin đăng kí ");
		var x = alert(
			"Họ tên: " + ho + " " + ten + 
			"\nEmail: " + mail +
			"\nNăm sinh: " + ngay + "/" + thang + "/" + nam +
			"\nGiới tính " + gioitinh + 
			"\nSố CMND: " + cmnd + 
			"\nSố điện thoại: " + dt +
			"\nĐịa chỉ nhà: " + diachi +
			"\nThành phố: " + thanhpho + 
			"\nQuận: " + quan 	);
	}
	
}

function dangnhap() 
{
	var mail = document.getElementById("email").value;
	var matkhau = document.getElementById("pass").value;
	if( mail == " " || matkhau == " " )
		var x = confirm("Vui lòng kiểm tra lại thông tin đăng kí ");
	else
	{
		var x = alert("Bạn đã đăng nhập thành công");
	}
}


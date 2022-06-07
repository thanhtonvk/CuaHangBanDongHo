function addSanPham() {
    var tensp = document.getElementById("txt-tensp").value;
    var hangsx = document.getElementById("txt-hangsx").value;
    var file = document.getElementById("txt-file").value;
    var soluong = document.getElementById("txt-soluong").value;
    var dongia = document.getElementById("txt-dongia").value;
    var product = {
        tensp: tensp,
        hangsx: hangsx,
        file: file,
        soluong: soluong,
        dongia: dongia,
    };
    var jsonString = localStorage.getItem("sanpham");
    var list = JSON.parse(jsonString);
    if (list == null) {
        list = [];
        list.push(product);
    } else {
        list.push(product);
    }
    console.log(list);
    localStorage.setItem("sanpham", JSON.stringify(list));
    alert("Thêm sản phẩm thành công");
    location.replace("./sanpham.html");
}

function getAllSP() {
    var jsonString = localStorage.getItem("sanpham");
    var list = JSON.parse(jsonString);
    console.log(list);
    var html = "";
    for (var i = 0; i < list.length; i++) {
        html =
            html +
            `<ul class="danhsach-item">
        <li style="width:60px;">${i}</li>
        <li style="width:250px;">${list[i].tensp}</li>
        <li style="width:200px;">${list[i].hangsx}</li>
        <li style="width:500px;">
            ${list[i].file.toString().substring(12, list[i].file.toString().length-1)}
        </li>
        <li style="width:200px;"> ${list[i].soluong}</li>
        <li style="width:200px;"> ${list[i].dongia}</li>
        <li style="width:100px; float:right; text-align:right;">
            <button class="lnkSua" onclick="getIndexSP(${i})">Sửa</a>
            <button class="lnkXoa" onclick ="deleteSP(${i})">Xoá</button>
        </li>
    </ul>`;
    }
    document.getElementById("list-sp").innerHTML = html;
}

function deleteSP(index) {
    var jsonString = localStorage.getItem("sanpham");
    var list = JSON.parse(jsonString);
    list.splice(index, 1);
    localStorage.setItem("sanpham", JSON.stringify(list));
    location.reload()
}

function getIndexSP(index) {
    localStorage.setItem("index", index)
    location.replace('./suasanpham.html')
}
getAllSP()
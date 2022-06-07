var listProduct = [{
        TenSP: "CASIO 44.4 × 43.2 mm Unisex W-218HC-4AVDF",
        GiaBan: "612.000 VND",
        HinhAnh: "image/product/casio-a168wemb-1bdf-nu-thumb-600x600.jpg",
    },
    {
        TenSP: "CASIO 52 mm Nam AEQ-120W-9AVDF",
        GiaBan: "8.500.000 VND",
        HinhAnh: "image/product/casio-aeq-120w-1avdf-nam-thumb-1.-600x600.jpg",
    },
    {
        TenSP: "CASIO 52 mm Nam AEQ-120W-9AVDF",
        GiaBan: "31.500.000 VND",
        HinhAnh: "image/product/casio-aeq-120w-9avdf-nam-thumb-600x600.jpg",
    },
    {
        TenSP: "CASIO 38.6 × 36.3 mm Unisex A168WEMB-1BDF",
        GiaBan: "7.500.000 VND",
        HinhAnh: "image/product/casio-a168wemb-1bdf-nu-thumb-600x600.jpg",
    },
    {
        TenSP: "NAKZEN 36 mm Nữ SL5058LBK-7",
        GiaBan: "7.400.000 VND",
        HinhAnh: "image/product/casio-w-218hc-4avdf-nu-thumb-600x600.jpg",
    },
    {
        TenSP: "NAKZEN 28 mm Nữ SS4095L-7",
        GiaBan: "612.000 VND",
        HinhAnh: "image/product/nakzen-ss4095l-1-nu-thumb-600x600.jpg",
    },
    {
        TenSP: "NAKZEN 28 mm Nữ SS4095L-1",
        GiaBan: "612.000 VND",
        HinhAnh: "image/product/nakzen-sl5059gbn-7nr-nam-thumb-600x600.jpg",
    },
    {
        TenSP: "NAKZEN 38 mm Nam SS4095G-1",
        GiaBan: "612.000 VND",
        HinhAnh: "image/product/nakzen-ss9212gd-7n3-nam-thumb-600x600.jpg",
    },
];

function addCart() {
    var index = Math.floor(Math.random() * 7)
    product = listProduct[index]
    var jsonString = localStorage.getItem('gioHang')
    var list = JSON.parse(jsonString)
    if (list == null) {
        list = [];
        list.push(product)
    } else {
        list.push(product)
    }
    console.log(list)
    localStorage.setItem('gioHang', JSON.stringify(list))
    alert('Thêm giỏ hàng thành công')
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Trang CV đã tải xong!');
    themHieuUngChuot();
    themPhimTat();
});
function themHieuUngChuot() {
    var cacMuc = document.querySelectorAll('.sidebar-box li');
    for (var i = 0; i < cacMuc.length; i++) {
        var muc = cacMuc[i];
        muc.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '10px';
            this.style.transition = 'padding-left 0.3s';
        });
        muc.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '0';
        });
    }
    var anh = document.querySelector('.profile-img');
    if (anh) {
        anh.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        
        anh.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}
function themPhimTat() {
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
}
function saoChep(noiDung) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(noiDung).then(function() {
            alert('Đã sao chép: ' + noiDung);
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var thongTinLienHe = document.querySelectorAll('.sidebar-box p');
    
    for (var i = 0; i < thongTinLienHe.length; i++) {
        var muc = thongTinLienHe[i];
        muc.style.cursor = 'pointer';
        muc.title = 'Nhấp để sao chép'
        muc.addEventListener('click', function() {
            var noiDung = this.textContent;
            saoChep(noiDung);
        });
    }
});
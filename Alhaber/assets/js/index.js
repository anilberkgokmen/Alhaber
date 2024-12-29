// tarih ve saati görüntülemek için
var tarih = new Date();
var saat = tarih.getHours();
var dakika = tarih.getMinutes();
document.getElementById("hour").innerHTML = tarih.toLocaleDateString() + " " + saat + ":" + dakika;
// end

// index html deki carousel yapısı için
const carouselEl = document.querySelector(".carousel");

if (carouselEl) {
    setInterval(carouselChange, 5000);

    carouselEl.querySelectorAll(".pagination .number").forEach(carouselItems => {
        carouselItems.addEventListener("click", function(e) {
            console.log(e.target.getAttribute("value"))

            carouselEl.querySelector(".items .item.active").classList.remove("active")
            carouselEl.querySelectorAll(".items .item")[Number(e.target.getAttribute("value")) - 1].classList.add("active")
        })
    })
}

function carouselChange() {
    const carouselItemList = carouselEl.querySelectorAll(".items .item");

    for (let i = 0; i < carouselItemList.length; i++) {
        if (carouselItemList[i].classList.contains("active")) {
            carouselItemList[i].classList.remove("active");

            if (i < (carouselItemList.length - 1)) {
                carouselItemList[i + 1].classList.add("active");
            } else {
                carouselItemList[0].classList.add("active");
            }

            return;
        }
    }
}
// end

// 600px den küçün genişliğe sahip ekranlar için yani mobil ve tablet ler için kategori menüsü sığmadığı için kategoriler başlangıçta görünmeyecek menü tuşuna basında aşağıya doğru açılacak

document.querySelector("header .menu-ac").addEventListener("click", function() {
    const menuEl = document.querySelector("nav.menu");
    if (!menuEl.classList.contains("active")) {
        menuEl.classList.add("active");
    } else {
        menuEl.classList.remove("active");
    }
});
// end
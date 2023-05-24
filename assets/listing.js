let accordions = document.getElementsByClassName("item__header");
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    panel.classList.toggle("active");
  });
}

var ShowBulkDiscount = document.getElementsByClassName("js-ShowBulkDiscount");
var bulkDiscount = document.getElementsByClassName("bulk-discount")[0];
for (var i = 0; i < ShowBulkDiscount.length; i++) {
  ShowBulkDiscount[i].addEventListener("click", function () {
    bulkDiscount.classList.add("open");
  });
}
var CloseBulkDiscount = document.getElementsByClassName("js-CloseBulkDiscount");
for (var i = 0; i < CloseBulkDiscount.length; i++) {
  CloseBulkDiscount[i].addEventListener("click", function () {
    bulkDiscount.classList.remove("open");
  });
}

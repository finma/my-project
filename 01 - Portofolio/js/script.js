// event pada saat link diklik
$('.page-scroll').on('click', function(e){

  // ambil isi href
  var tujuan = $(this).attr('href');

  // tangkap elemen
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 1000, 'swing');

  e.preventDefault();
});


// $('.page-scroll').on('click', function(e) {

//   var tujuan = $(this).attr('href');
 
//   var elemenTujuan = $(tujuan);
 
//   $('html , body').animate({
//    scrollTop: elemenTujuan.offset().top - 50
//   });
 
//   e.preventDefault();
//  });
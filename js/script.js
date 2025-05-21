// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Aktif menü linkini ayarla
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if ((currentPath === 'index.html' && href === 'index.html') ||
        (currentPath === href)) {
      link.classList.add('active');
    }
  });

  // 2) Smooth scroll (sayfa içi #anker linkler için)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3) Ürün detay sayfası için dinamik içerik yükleme
  if (window.location.pathname.endsWith('urun-detay.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('urun');
    if (id) {
      const urunler = {
        'polo-yaka-tisort': {
          title: 'Polo Yaka Tişört',
          img: 'images/polo_yaka.jpg',
          desc: 'Yüksek kaliteli pamuklu polo tişört, rahat kesim ve nefes alabilir kumaş.',
          material: '%100 pamuk',
          features: 'Modern kesim, makinede yıkanabilir',
          price: '250 TL'
        },
        'beyaz-onluk': {
          title: 'Beyaz Önlük',
          img: 'images/beyaz_onluk.jpg',
          desc: 'Şık ve dayanıklı aşçı önlüğü, su ve lekelere karşı korumalı.',
          material: '%65 pamuk, %35 polyester',
          features: 'Ayarlanabilir boyun bağı, cep detaylı',
          price: '180 TL'
        },
        'asci-ceketi': {
          title: 'Aşçı Ceketi',
          img: 'images/asci_kiyafeti.jpg',
          desc: 'Profesyonel mutfaklarda konforlu kullanım sunan şef ceketi.',
          material: '%100 pamuk',
          features: 'Nefes alabilir, uzun kollu',
          price: '320 TL'
        },
        'pvc-sugecirmez': {
          title: 'PVC Su Geçirmez Takım',
          img: 'images/pvc_sugecirmeztakim.jpg',
          desc: 'Su geçirmez PVC iş elbisesi, zorlu hava koşullarında koruma sağlar.',
          material: '%100 PVC',
          features: 'Su geçirmez, rüzgar geçirmez',
          price: '450 TL'
        },
        'garson-kiyafeti': {
          title: 'Garson Kıyafeti',
          img: 'images/garson_kiyafeti.jpg',
          desc: 'Modern tasarımlı garson kıyafeti, restoran ve oteller için ideal.',
          material: '%65 pamuk, %35 polyester',
          features: 'Slim fit, cep detaylı',
          price: '280 TL'
        },
        'muhendis-yelegi': {
          title: 'Mühendis Yeleği',
          img: 'images/muhendis_yelegi.jpg',
          desc: 'Yüksek görünürlüklü mühendis yeleği, reflektör bantlı.',
          material: '%100 polyester',
          features: 'Ayarlanabilir bel, cepli tasarım',
          price: '200 TL'
        }
      };

      const data = urunler[id];
      if (data) {
        document.getElementById('pd-img').src = data.img;
        document.getElementById('pd-img').alt = data.title;
        document.getElementById('pd-title').textContent = data.title;
        document.getElementById('pd-desc').innerHTML = `<strong>Açıklama:</strong> ${data.desc}`;
        document.getElementById('pd-material').innerHTML = `<strong>Malzeme:</strong> ${data.material}`;
        document.getElementById('pd-features').innerHTML = `<strong>Özellikler:</strong> ${data.features}`;
        document.getElementById('pd-price').textContent = data.price;
      }
    }
  }
});

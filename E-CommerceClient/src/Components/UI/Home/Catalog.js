import React, { useState, useEffect } from 'react';

const Catalog = () => {


   
        const [brands, setBrands] = useState([]);
      
        useEffect(() => {
          const fetchBrands = async () => {
            try {
              const response = await fetch('http://localhost:5004/api/Catalog/Brand');
              if (response.ok) {
                const data = await response.json();
                setBrands(data);
              } else {
                console.error('API ile ilgili bir hata oluştu:', response.statusText);
              }
            } catch (error) {
              console.error('API ile iletişim sırasında bir hata oluştu:', error);
            }
          };
      
          fetchBrands();
        }, []); // Boş bağımlılık dizisi, sadece bileşen yüklendiğinde bir kere çalışmasını sağlar
      


  return (
    
<>

<div class="indirim-banner">
  <div class="indirim-content">
    <h4>Özel Teklif!</h4>
    <div class="underline"></div>

    <p>Yılbaşı İndirimleri Kaçmaz!</p>
    <p class="more-info">
      İndirimli ürünleri kaçırmayın! Sınırlı stok, hemen alışverişe başlayın.
    </p>
    <a href="#" class="indirim-button">Hemen Al</a>
  </div>
</div>
<div  class="indirim-kargo"><span>Kargo Bedava</span></div>

<div className='container buttons-home-page'>
    <div className='row'>
        <div className=' col-4'>
        <button className="en-cok-satan-urunler-buton">
        En Çok Satan Ürünler
        </button>
        </div>
        <div className=' col-4'>
        <button className="en-cok-satan-urunler-buton flas-btn">
        En Çok Satan Ürünler
        </button>
        </div>
        <div className=' col-4'>
        <button className="en-cok-satan-urunler-buton yellow-btn">
        En Çok Satan Ürünler
        </button>
        </div>
         </div>
 </div>

{/* <div class="container">
  <div class="row justify-content-center mt-80">
    <div class="col-lg-6 text-center">
      <div class="text">
        <h3>Öne Çıkan Markalar</h3>
        <div class="underline"></div>
      </div>
    </div>
  </div>
</div> */}

<section class="blog-list-half section-padding sub-bg">
<div class="underline"></div>

            <div class="container">
                <div class="row">                
                    {brands.map(brand => (
                    <div class="col-lg-4">
                         <article class="component-item">
                                <a href="/sr?wc=86%2C101386%2C101385&amp;sst=BEST_SELLER" class="widget widget-small-with-name no-border-and-shadow" data-tracker="seen:homepage-component" data-id="2368900" data-type="widget" data-order="3" data-eventkey="pim_bu_54" data-bannereventkey="pim_bu_54">
                                    <span class="image-container">
                                    <img src={brand.imgUrl} alt="Nike"></img>
                                    </span>
                                    <div class="campaign-summary">
                                    <span class="name">{brand.brand}</span>
                                    </div>
                                </a>
                            </article>
                    </div>
                 
                 ))}
                </div>
            </div>
        </section>


</>

  );
};

export default Catalog;


import React from 'react';
import "./gallery.scss";
function Gallery() {
  return (
    <div>
      <p className="dev">Developed with <span>❤</span> by <a href="" target="_blank" rel="noopener noreferrer">MercDev</a> </p>
      <button onClick={() => {
        var el = document.querySelector('body');
        el.requestFullscreen();
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-maximize">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </svg>
      </button>
      <div className="wrapper-images1">
        {/* 5 images by row */}
        <div className="images-line1">
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
        </div>
        <div className="images-line1">
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
        </div>
        {/* Add more image lines here if needed */}
        <div className="images-line1">
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
        </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)"}}></div>
          </div>
          <div className="line1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}>
            <div className="img1" style={{backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)"}}></div>
          </div>
        </div>
        
      </div>
  );
}

export default Gallery;

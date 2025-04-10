import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Newly from '../Newly/Newly';
import Product from '../Product/Product';
import Ads from '../Ads/Ads';
import Purchase from '../Purchase/Purchase';
import Popular from '../Popular/Popular';
import Blog from '../Blog/Blog';
import Application from '../Application/Application';
import Buttons from '../Buttons/Buttons';
import Methods from '../Methods/Methods';
import Footer from '../Footer/Footer';

function HomeWraper({setProductsId,setWislistId}) {
  return (
    <>
      <Banner />
      <Category />
      <Newly />
      <Product setProductsId={setProductsId} setWislistId={setWislistId}/>
      <Ads />
      <Buttons />
      <Purchase />
      {/* <Popular /> */}
      <Blog />
      <Application />
      <Methods />
      <Footer />
    </>
  );
}

export default HomeWraper;

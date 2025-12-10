'use client';

// import Market from '@/components/pages/Market'
import Marketplace from '@/components/pages/Marketplace'
import ProductDetails from '@/components/communities/ProductDetails';
import React from 'react';
import { mockProducts } from "@/lib/mockData";
import { useSearchParams } from 'next/navigation';

const MarketsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // If id is provided, show product details
  if (id) {
    const matchedProduct = mockProducts.find(product => product.id === id);
    if (!matchedProduct) {
      return <div>Product not found</div>;
    }
    return (
      <div>
        <ProductDetails data={matchedProduct} />
      </div>
    );
  }

  // Otherwise show marketplace listing
  return (
    <div>
        {/* <Market/> */}
        <Marketplace/>
    </div>
  )
}

export default MarketsPage
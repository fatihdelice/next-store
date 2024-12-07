const CartOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-1/3 p-4">
        <h2>Sepet</h2>
        <p>Ürünler burada listelenecek.</p>
      </div>
    </div>
  );
};

export default CartOverlay;

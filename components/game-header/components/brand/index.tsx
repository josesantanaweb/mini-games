"use client";

const Brand = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <img src="/logo.png" alt="icon" data-testid="brand-logo" className="w-6"/>
      <h4 className="font-bold text-yellow-200" data-testid="brand-text">Chicken</h4>
    </div>
  );
};

export default Brand;

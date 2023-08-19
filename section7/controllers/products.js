const addProductController = (req, res, next) => {
	res.render('add-product', {
	  pageTitle: 'Add Product',
	  path: '/admin/add-product',
	  formsCSS: true,
	  productCSS: true,
	  activeAddProduct: true
	});
  }

const getProduct = (req, res, next) => {
	const products = adminData.products;
	res.render('shop', {
	  prods: products,
	  pageTitle: 'Shop',
	  path: '/',
	  hasProducts: products.length > 0,
	  activeShop: true,
	  productCSS: true
	});
  }

exports.getProduct = getProduct;
exports.addProductController = addProductController;
import { Product } from './Product.model';
export class ProductList {
    productList: Product[] = [];

    getProductList(){
        return this.productList;
    }

    setProductList(productList){
        this.productList = productList;
    }

    getProduct(pid){
        this.productList.filter((item) => {
            return item.pid.indexOf(pid) >= 0;
        })
    }
}
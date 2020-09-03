import { environment } from 'src/environments/environment';

export class API {
    public apiKey:string;
    
    public static URL = {
      productList: `http://localhost:8080/api/products`,
      products: `http://localhost:8080/api/products`,
      images: `http://localhost:8080/api/images`,
    }
}

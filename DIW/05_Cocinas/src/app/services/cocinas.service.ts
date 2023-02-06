import { Injectable } from '@angular/core';
import { Cocina } from '../Models/cocina.model';

@Injectable({
  providedIn: 'root'
})
export class CocinasService {

  private cocinas: Cocina[] = [
    new Cocina(1, 'Cocina 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse sapiente nobis dolore perspiciatis hic mollitia exercitationem tenetur commodi, enim aliquam eius quis dignissimos officiis. Necessitatibus autem doloremque deleniti sed repellat, minus, error cum consequatur vitae facere officia consectetur perferendis quibusdam molestias aut eum. Itaque, quam iusto nesciunt qui hic corrupti minima? Unde, soluta porro perferendis a deserunt deleniti assumenda placeat doloribus tempore nihil, ea alias, nostrum cumque praesentium? Sunt possimus eligendi vel quos impedit dicta quae nesciunt iure, ex, debitis maxime accusamus in esse aspernatur quaerat, ad expedita earum totam nostrum tempore voluptate. Nemo distinctio veritatis alias omnis similique.', 'red', 100, 'assets/img/cocina1.jpg'),
    new Cocina(2, 'Cocina 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse sapiente nobis dolore perspiciatis hic mollitia exercitationem tenetur commodi, enim aliquam eius quis dignissimos officiis. Necessitatibus autem doloremque deleniti sed repellat, minus, error cum consequatur vitae facere officia consectetur perferendis quibusdam molestias aut eum. Itaque, quam iusto nesciunt qui hic corrupti minima? Unde, soluta porro perferendis a deserunt deleniti assumenda placeat doloribus tempore nihil, ea alias, nostrum cumque praesentium? Sunt possimus eligendi vel quos impedit dicta quae nesciunt iure, ex, debitis maxime accusamus in esse aspernatur quaerat, ad expedita earum totam nostrum tempore voluptate. Nemo distinctio veritatis alias omnis similique.', 'blue', 200, 'assets/img/cocina2.jpg'),
    new Cocina(3, 'Cocina 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse sapiente nobis dolore perspiciatis hic mollitia exercitationem tenetur commodi, enim aliquam eius quis dignissimos officiis. Necessitatibus autem doloremque deleniti sed repellat, minus, error cum consequatur vitae facere officia consectetur perferendis quibusdam molestias aut eum. Itaque, quam iusto nesciunt qui hic corrupti minima? Unde, soluta porro perferendis a deserunt deleniti assumenda placeat doloribus tempore nihil, ea alias, nostrum cumque praesentium? Sunt possimus eligendi vel quos impedit dicta quae nesciunt iure, ex, debitis maxime accusamus in esse aspernatur quaerat, ad expedita earum totam nostrum tempore voluptate. Nemo distinctio veritatis alias omnis similique.', 'green', 300, 'assets/img/cocina3.jpg'),
    new Cocina(4, 'Cocina 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse sapiente nobis dolore perspiciatis hic mollitia exercitationem tenetur commodi, enim aliquam eius quis dignissimos officiis. Necessitatibus autem doloremque deleniti sed repellat, minus, error cum consequatur vitae facere officia consectetur perferendis quibusdam molestias aut eum. Itaque, quam iusto nesciunt qui hic corrupti minima? Unde, soluta porro perferendis a deserunt deleniti assumenda placeat doloribus tempore nihil, ea alias, nostrum cumque praesentium? Sunt possimus eligendi vel quos impedit dicta quae nesciunt iure, ex, debitis maxime accusamus in esse aspernatur quaerat, ad expedita earum totam nostrum tempore voluptate. Nemo distinctio veritatis alias omnis similique.', 'yellow', 400, 'assets/img/cocina4.jpg')
  ];

  getCocinas(): Cocina[] {
    return this.cocinas;
  }
  
  constructor() { }
}

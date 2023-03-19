import { Injectable } from '@nestjs/common';
import { categories } from 'src/entities/categories/categories.entities';
import {
  createCategoriesDto,
  updateCategoriesDto,
} from 'src/dtos/categories/categories.dto';

@Injectable()
export class CategoriesService {
  private categorie: categories[] = [];
  private categorieID = 0;

  findAll() {
    return this.categorie;
  }

  findOne(id: number) {
    return this.categorie.find((item) => item.id === id);
  }

  create(payload: createCategoriesDto) {
    this.categorieID++;
    const newCategorie = {
      id: this.categorieID,
      ...payload,
    };
    this.categorie.push(newCategorie);
    return newCategorie;
  }

  update(id: number, payload: updateCategoriesDto) {
    const categorie = this.findOne(id);
    if (categorie) {
      const index = this.categorie.findIndex((item) => item.id === id);
      this.categorie[index] = {
        ...categorie,
        ...payload,
      };
      return this.categorie[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.categorie.findIndex((item) => item.id === id);
    if (index > -1) {
      this.categorie.splice(index, 1);
      return true;
    }
    return false;
  }
}

import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import { CategoriesService } from '../services/categories.service';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-category-taker',
  templateUrl: './category-taker.component.html',
  styleUrls: ['./category-taker.component.css']
})
export class CategoryTakerComponent implements OnInit {

  public cat: category;
  
  errMessage: string;
  public category : category;
  
  constructor(private categoryService:CategoriesService, public dialogService: DialogService) {
    this.cat = new category();
    
  }
  
  ngOnInit(){

  }
  addCategory() {
      if (this.cat.categoryId !== '' && this.cat.categoryName !== '' 
      && this.cat.categoryDescription !== '' ){
      this.categoryService.addCategory(this.cat).subscribe(
        data => { console.log("inside data of addcatgeory ",data)
        this.dialogService.openDialog('Success','Category Added Sucessfully!');
       },
        err => {
          console.log("err object in addCategory ",err);
          this.dialogService.openDialog('Error',err.error);
        
        }
      )
      this.cat = new category();
            this.errMessage ="";
    }
    else {
      this.errMessage = "All fields are required.. Please fill all required fields and continue";
    }
  }
}

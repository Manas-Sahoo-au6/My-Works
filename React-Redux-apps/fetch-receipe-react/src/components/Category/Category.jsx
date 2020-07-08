import React from "react";
import "../Box.css";
import CategoryPop from "./CategoryPop";
function Category() {
  return (
    <>
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div id="modal-content" class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="App">
            
            <CategoryPop /> 
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

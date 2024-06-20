document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main_image");
    const thumbnailSlider = document.getElementById("thumbnail_slider");
    const prevBtn = document.getElementById("prev_btn");
    const nextBtn = document.getElementById("next_btn");
  
    const photos = [
      "../photos/asley_under_cherry_blossom_tree.jpeg",
      "../photos/cornell_bridge_sunset.jpeg",
      "../photos/downtown_water_reflection_1.jpeg",
      "../photos/downtown_water_reflection_2.jpeg",
      "../photos/downtown_water_reflection_3.jpeg",
      "../photos/pretty_tree_coloration.jpg",
      "../photos/seven_eleven.jpeg",
      "../photos/street_pops.jpeg",
      "../photos/sunrise_crabs.jpeg",
      "../photos/sunset_fox_elem_1.jpeg",
      "../photos/sunset_fox_elem_2.jpeg",
      "../photos/university_federal_credit_union.jpeg"
    ];
  
    let currentIndex = 0;
  
    function updateMainImage(index) {
      mainImage.src = photos[index];
      Array.from(thumbnailSlider.children).forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }
  
    function populateThumbnails(startIndex) {
      thumbnailSlider.innerHTML = "";
      for (let i = startIndex; i < startIndex + 11; i++) {
        const img = document.createElement("img");
        img.src = photos[i];
        img.addEventListener("click", () => {
          currentIndex = i;
          updateMainImage(currentIndex);
        });
        thumbnailSlider.appendChild(img);
      }
      updateMainImage(currentIndex);
    }
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        if (currentIndex < photos.length - 6) {
          populateThumbnails(currentIndex - 5);
        }
      }
    });
  
    nextBtn.addEventListener("click", () => {
      if (currentIndex < photos.length - 1) {
        currentIndex++;
        if (currentIndex > 5) {
          populateThumbnails(currentIndex - 5);
        }
      }
    });
  
    populateThumbnails(currentIndex);
  });
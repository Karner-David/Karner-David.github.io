document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main_image");
    const thumbnailSlider = document.getElementById("thumbnail_slider");
  
    // right now we have 11 photos
    const total_photos = 11;
    const photos = [
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
  
    let currentIndex = 4;
    let numVisibleThumbnails = 11;
    let thumbnailWidth = 56;
  
    function updateMainImage(index) {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = photos[index];
        mainImage.style.opacity = 1; // Start fade in effect
      }, 200);

      const middleIndex = Math.floor(numVisibleThumbnails / 2);

      Array.from(thumbnailSlider.children).forEach((div, i) => {
        div.classList.toggle("active", i === middleIndex);
      });
    }

    function applyTransformations(currentIndex, newIndex) {
      const direction = getDirection(currentIndex, newIndex);
    //   const direction = (newIndex > currentIndex) ? -1 : 1;
      const thumbnails = Array.from(thumbnailSlider.children);
      thumbnails.forEach((div, i) => {
        div.style.transition = "transform 0.5s ease";
        div.style.transform = `translateX(${direction * thumbnailWidth}px)`;
        div.style.opacity = ((direction < 0 && i === 0) || (direction > 0 && i === thumbnails.length - 1)) ? 0 : 0.7; // Make the pushed out thumbnail disappear
      });
    }

    function getDirection(currentIndex, newIndex) {
      // Determine the shortest direction for wrapping
      const forwardSteps = (newIndex - currentIndex + total_photos) % total_photos;
      const backwardSteps = (currentIndex - newIndex + total_photos) % total_photos;
    
      // Handle edge cases for wrapping
      if (currentIndex === 0 && newIndex === total_photos - 1) {
        return 1; // Move backward
      }
      if (currentIndex === total_photos - 1 && newIndex === 0) {
        return -1; // Move forward
      }
    return (newIndex > currentIndex) ? -1 : 1;
    }
  
    function populateThumbnails(startIndex) {
      thumbnailSlider.innerHTML = "";
      for (let i = startIndex; i < startIndex + 11; i++) {
        const imgIndex = (startIndex + i + total_photos) % total_photos;
        const div = document.createElement("div");
        div.className = "thumbnail";
        const might_be_negative = i - 5;

        if (might_be_negative < 0) {
            div.style.backgroundImage = `url(${photos[total_photos + might_be_negative]})`;
        } else if (might_be_negative >= total_photos) {
            div.style.backgroundImage = `url(${photos[might_be_negative % total_photos]})`;
        } else {
            div.style.backgroundImage = `url(${photos[might_be_negative]})`;
        }

        div.addEventListener("click", () => {
          const old_current_index = currentIndex;
          if (might_be_negative < 0) {
            currentIndex = total_photos + might_be_negative;
          } else if (might_be_negative >= total_photos) {
            currentIndex = might_be_negative % total_photos;
          } else {
            currentIndex = might_be_negative;
          }
          applyTransformations(old_current_index, currentIndex);
          setTimeout(() => {
            updateMainImage(currentIndex);
            populateThumbnails(currentIndex);
          }, 250);
        });
        thumbnailSlider.appendChild(div);
      }

      updateMainImage(currentIndex);
    }

    // const slidePosition = -((currentIndex - Math.floor(numVisibleThumbnails / 2)) * 56); // 56px for each thumbnail (50px width + 6px margin)
    // thumbnailSlider.style.transform = `translateX(${slidePosition}px)`;
  
    populateThumbnails(currentIndex);
  });